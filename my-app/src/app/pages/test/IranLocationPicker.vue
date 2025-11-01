<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref, watch, computed } from "vue";
import * as L from "leaflet";

type LatLng = { lat: number; lng: number };

const props = defineProps<{
  modelValue?: LatLng | null;      // مقدار اولیه (اختیاری)
  height?: string;                 // ارتفاع مپ
  zoom?: number;                   // زوم اولیه
  minZoom?: number;                // حداقل زوم
}>();

const emit = defineEmits<{
  (e: "update:modelValue", v: LatLng | null): void;
  (e: "picked", v: LatLng): void;
}>();

const mapEl = ref<HTMLDivElement | null>(null);
let map: L.Map | null = null;
let marker: L.Marker | null = null;

// حدود جغرافیایی ایران (تقریباً)
const iranBounds = L.latLngBounds(
  L.latLng(23.5, 43.0),   // SW
  L.latLng(41.5, 64.5)    // NE
);

// مرکز پیش‌فرض: تهران
const defaultCenter = L.latLng(35.6892, 51.3890);

const mapHeight = computed(() => props.height ?? "520px");
const initZoom = computed(() => props.zoom ?? 5);
const minZoom = computed(() => props.minZoom ?? 4);

function clampToIran(latlng: L.LatLng): L.LatLng | null {
  // اگر داخل مرز ایران نبود، اجازه نده
  return iranBounds.contains(latlng) ? latlng : null;
}

function placeMarker(latlng: L.LatLng) {
  if (!map) return;
  if (!marker) {
    marker = L.marker(latlng, { draggable: true }).addTo(map);
    marker.on("dragend", () => {
      const m = marker!.getLatLng();
      const fixed = clampToIran(m);
      if (!fixed) {
        // برگردون به آخرین مقدار معتبر
        const v = props.modelValue ?? { lat: defaultCenter.lat, lng: defaultCenter.lng };
        marker!.setLatLng(v);
        return;
      }
      emit("update:modelValue", { lat: fixed.lat, lng: fixed.lng });
      emit("picked", { lat: fixed.lat, lng: fixed.lng });
    });
  } else {
    marker.setLatLng(latlng);
  }
}

function initMap() {
  if (!mapEl.value) return;

  map = L.map(mapEl.value, {
    center: props.modelValue ? L.latLng(props.modelValue.lat, props.modelValue.lng) : defaultCenter,
    zoom: initZoom.value,
    minZoom: minZoom.value,
    maxBounds: iranBounds,
    maxBoundsViscosity: 0.9, // برگشت نرم از بیرون ایران
    zoomControl: true,
    attributionControl: true,
  });

  L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>',
    }
  ).addTo(map);

  // اگر مقدار اولیه داریم، مارکر بگذار
  const initial = props.modelValue ? L.latLng(props.modelValue.lat, props.modelValue.lng) : defaultCenter;
  placeMarker(initial);

  // کلیک برای انتخاب نقطه
  map.on("click", (e: L.LeafletMouseEvent) => {
    const fixed = clampToIran(e.latlng);
    if (!fixed) return;
    placeMarker(fixed);
    emit("update:modelValue", { lat: fixed.lat, lng: fixed.lng });
    emit("picked", { lat: fixed.lat, lng: fixed.lng });
  });

  // اگر کاربر خیلی بیرون رفت، ویو رو داخل ایران نگه‌دار
  map.on("moveend", () => {
    if (!map) return;
    if (!iranBounds.contains(map.getCenter())) {
      map.panInsideBounds(iranBounds, { animate: true });
    }
  });

  // نمایش کل ایران
  map.fitBounds(iranBounds, { padding: [20, 20] });
}

onMounted(initMap);

onBeforeUnmount(() => {
  if (map) {
    map.off();
    map.remove();
    map = null;
  }
});

// sync بیرونی → داخلی
watch(() => props.modelValue, (v) => {
  if (v && marker) {
    const ll = L.latLng(v.lat, v.lng);
    if (iranBounds.contains(ll)) {
      marker.setLatLng(ll);
      map?.panTo(ll, { animate: true });
    }
  }
}, { deep: true });
</script>

<template>
  <div :style="{ width: '100%', height: mapHeight }" ref="mapEl" />
</template>

<style scoped>
/* Leaflet container باید ارتفاع داشته باشد (از prop تأمین شده) */
</style>
