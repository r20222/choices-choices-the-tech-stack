<script setup>

// Haal data op uit de totals API:
import { ref } from 'vue';

const totalData = ref(null); // Start met een null-waarde om aan te geven dat er nog geen data is.

async function getData() {
  try {
    const res = await fetch("https://fdnd-toc-api.netlify.app/total");
    if (res.ok) {
      const data = await res.json();
      totalData.value = data;
    } else {
      // Als de API-aanroep niet succesvol is, behandel de fout hier.
      console.error("Fout bij het ophalen van gegevens. Statuscode: " + res.status);
    }
  } catch (error) {
    // Als er een andere fout optreedt, behandel deze hier.
    console.error("Er is een fout opgetreden: " + error.message);
  }
}

getData();
</script>

<template>
  
    <h2>Trash collected over time</h2>
    <p>In kilogram</p>

    <canvas id="line-chart" width="400" height="200" />

    <!-- v-if gebruik ik zodat het alleen wordt weergegeven als de data binnen is, anders krijg je een error -->
    <h3 v-if="totalData">{{ totalData.totals.debris_extracted_last_30d }}</h3>
    <h3 v-else>
      Error
    </h3>
  
</template>
