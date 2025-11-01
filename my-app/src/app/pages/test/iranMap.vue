<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref, watch, computed } from "vue";
import * as echarts from "echarts/core";
import { MapChart } from "echarts/charts";
import {
  TooltipComponent,
  VisualMapComponent,
  GeoComponent,
} from "echarts/components";
import { CanvasRenderer } from "echarts/renderers";

echarts.use([
  MapChart,
  TooltipComponent,
  VisualMapComponent,
  GeoComponent,
  CanvasRenderer,
]);

type DataItem = {
  key: string | number;
  value: number;
  extra?: Record<string, any>;
};

const props = defineProps<{
  geojson?: any; // اگر ندی، از پیش‌فرض استفاده می‌شود
  data: DataItem[];
  mapName?: string; // نام نقشه در ECharts
  featureKey?: string; // کلیدی که باید با data.key یکی باشد (مثلاً "name" یا "id")
  title?: string; // عنوان در tooltip
  min?: number;
  max?: number;
  height?: string;
  width?: string;
}>();

const emit = defineEmits<{
  (
    e: "region-click",
    payload: {
      key: string | number;
      name: string;
      value: number | null;
      extra?: any;
    }
  ): void;
}>();

// ⚠️ مسیر را مطابق محل واقعی GeoJSON پیش‌فرض تنظیم کن
// اگر از assets استفاده می‌کنی، فایل را به آن پوشه منتقل کن یا مسیر زیر را عوض کن:
import iranGeoJsonDefault from "./iran_geo.json"; // ← با فایل خودت هم‌نام کردم

const containerRef = ref<HTMLDivElement | null>(null);
let chart: echarts.ECharts | null = null;

const mapName = computed(() => props.mapName ?? "iran-provinces");
const featureKey = computed(() => {
  return props.featureKey ?? "name";
});

function registerMap() {
  console.log(iranGeoJsonDefault)
  const geo = props.geojson ?? iranGeoJsonDefault;
  if (!geo) return;
  echarts.registerMap(mapName.value, geo);
}

function buildSeriesData() {
  const keyName = featureKey.value; // مثلا "HASC_1" یا "NAME_1"
  const map: Record<string | number, DataItem> = {};
  props.data.forEach((d) => (map[d.key] = d));

  const geo = props.geojson ?? iranGeoJsonDefault;
  const features: any[] = geo?.features ?? [];

  return features.map((f) => {
    const key = f.properties?.[keyName];
    const item = map[key];
    return {
      name: f.properties?.[keyName] ?? f.properties?.name ?? key, // ← مهم
      value: typeof item?.value === "number" ? item.value : null,
      _key: key,
      _extra: item?.extra,
    };
  });
}

function getMinMax() {
  if (typeof props.min === "number" && typeof props.max === "number") {
    const fix = props.min === props.max ? props.max + 1 : props.max;
    return { min: props.min, max: fix };
  }
  const values = props.data
    .map((d) => d.value)
    .filter((v) => typeof v === "number" && !Number.isNaN(v));
  const min = values.length ? Math.min(...values) : 0;
  const max = values.length ? Math.max(...values) : 1;
  return { min, max: min === max ? max + 1 : max };
}

function formatNumberFa(n: number) {
  try {
    return n.toLocaleString("fa-IR");
  } catch {
    return String(n);
  }
}

function renderChart() {
  console.log(props)
  if (!containerRef.value) return;

  if (!chart) {
    chart = echarts.init(containerRef.value, undefined, { locale: "fa" });
    window.addEventListener("resize", resize);
    chart.on("click", (params: any) => {
      emit("region-click", {
        key: params.data?._key ?? params.name,
        name: params.name,
        value: typeof params.value === "number" ? params.value : null,
        extra: params.data?._extra,
      });
    });
  }

  registerMap();

  const seriesData = buildSeriesData();

  const { min, max } = getMinMax();

  const option: echarts.EChartsOption = {
    tooltip: {
      trigger: "item",
      formatter: (params: any) => {
        // اگر برای استانی دیتایی نباشه، params.data نال می‌شه
        const safeData = params.data ?? {};
        const title = props.title ?? "اطلاعات استان";
        const name = params.name ?? "—";
        const val =
          typeof params.value === "number" ? formatNumberFa(params.value) : "—";
        const extra = safeData._extra ?? {};
        const extraHtml = Object.keys(extra).length
          ? `<div style="margin-top:6px;line-height:1.6">
             ${Object.entries(extra)
               .map(([k, v]) => `<div><b>${k}:</b> ${v}</div>`)
               .join("")}
           </div>`
          : "";
        return `
        <div style="direction:rtl;text-align:right">
          <div style="font-weight:700;margin-bottom:4px">${title}</div>

          ${extraHtml}
        </div>`;
        //         <div><b>استان:</b> ${name}</div>
        // <div><b>مقدار:</b> ${val}</div>
      },
      confine: true,
      appendToBody: true,
    },
    visualMap: {
      /* همون قبلی */
    },
    series: [
      {
        type: "map",
        map: mapName.value,
        nameProperty: featureKey.value, // ← بسیار مهم
        roam: true,
        emphasis: { label: { show: false } },
        label: { show: false },
        data: seriesData,
      },
    ],
  };

  chart.setOption(option as any, { notMerge: true });
}

function resize() {
  chart?.resize();
}

onMounted(renderChart);

onBeforeUnmount(() => {
  window.removeEventListener("resize", resize);
  chart?.dispose();
  chart = null;
});

watch(
  () => [props.data, props.geojson, props.min, props.max, props.featureKey],
  () => renderChart(),
  { deep: true }
);
</script>

<template>
  <div
    class="w-full"
    :style="{
      width: props.width ?? '100%',
      height: props.height ?? '520px',
      direction: 'rtl',
    }"
    ref="containerRef"
  />
</template>

<style scoped>
/* محلی برای استایل‌های دلخواه */
</style>
