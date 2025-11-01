<script setup lang="ts">
import { onMounted, ref } from "vue";
import IranMap from "./iranMap.vue";
import mockData from "./mock-data.json"; // ← اگر فایل را به پوشه test کپی کردی
import IranLocationPicker from "./IranLocationPicker.vue";

// اگر خواستی دستی بدی:
const mapData = ref(mockData);
const point = ref<{ lat: number; lng: number } | null>(null);

function onPicked(v: { lat: number; lng: number }) {
  console.log("Picked:", v);
}
function onRegionClick(payload: {
  key: string | number;
  name: string;
  value: number | null;
  extra?: any;
}) {
  console.log("clicked:", payload);
  // اینجا می‌تونی دیالوگ باز کنی، جدول فیلتر کنی، API بزنی و...
}
</script>

<template>
  <div class="card !overflow-auto pb-20 h-full flex flex-col">
    <!-- <div class="p-4">
      <IranLocationPicker v-model="point" @picked="onPicked" />

      <div class="text-sm">
        مختصات انتخاب‌شده:
        <pre class="bg-gray-100 p-2 rounded">{{ point }}</pre>
      </div>
    </div> -->
    <IranMap
      :data="mapData"
      title="شاخص نمونه"
      featureKey="HASC_1"
      height="100%"
      class="!h-[700px]"
      @region-click="onRegionClick"
    />
  </div>
</template>

<style></style>
