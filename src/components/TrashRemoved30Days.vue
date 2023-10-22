<script setup>
    import { ref, onMounted } from 'vue';


// Data ophalen uit totals api
    const totalData = ref(null); // Start met een null-waarde om aan te geven dat er nog geen data is.

async function getData() {
  try {
    const res = await fetch("https://fdnd-toc-api.netlify.app/total");
    if (res.ok) {
      const tData = await res.json();
      totalData.value = tData;
    } else {
      // Als de API-aanroep niet succesvol is, behandel de fout hier.
      console.error("Fout bij het ophalen van gegevens. Statuscode: " + res.status);
    }
  } catch (error) {
    // Als er een andere fout optreedt, behandel deze hier.
    console.error("Er is een fout opgetreden: " + error.message);
  }
}

onMounted(async() => {
	// configureChartColor();
	// Door await getData() te gebruiken binnen de onMounted-hook, zorg je ervoor dat de API-aanroep wordt voltooid voordat je de gegevens probeert te benaderen
	await getData();
})

</script>


<template>
    <section class="trash-removed-30-days">
        <h2 v-if="totalData">{{ totalData.totals.debris_extracted_last_30d }} KG</h2>
        <h2 v-else>Error</h2>
        <p>Last 30 days removed</p>
    </section>
</template>


<style scoped>
    section{
        border-radius: .5rem;
        padding: 1.5rem;
        background-color: var(--whiteColor);
        box-shadow: var(--boxShadow) 0px 0px 8px;
        transition: .2s;
        /* border: 20px solid var(--lightBlue) */
    }
    .trash-removed-30-days{
        grid-area: trash-removed-30-days;
    }
    h2{
        font-size: 1rem;
        margin-bottom:1rem;
        color: var(--textColor);
        font-family: 'Roboto Mono', monospace;
    }
    p{
        font-size: 1rem;
        color: var(--textColor);
        font-family: 'Roboto Mono', monospace;
    }

</style>
