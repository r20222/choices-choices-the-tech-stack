<script setup>
import { ref, onMounted } from 'vue';

// haal de dotenv op

const key = import.meta.env.VITE_COSMIC_KEY
const cosmicData = ref(null); // Start met een null-waarde om aan te geven dat er nog geen data is.

async function getData() {
  try {
    const res = await fetch(key);
    if (res.ok) {
      const cData = await res.json();
      cosmicData.value = cData;
    } else {
    //   Als de API-aanroep niet succesvol is, behandel de fout hier.
      console.error("Fout bij het ophalen van gegevens. Statuscode: " + res.status);
    }
  } catch (error) {
    // Als er een andere fout optreedt, behandel deze hier.
    console.error("Er is een fout opgetreden: " + error.message);
  }
}

onMounted(async() => {
	// Door await getData() te gebruiken binnen de onMounted-hook, zorg je ervoor dat de API-aanroep wordt voltooid voordat je de gegevens probeert te benaderen
	await getData();
   
    // console.log(cosmicData.value.object.metadata.info_text)
})
</script>


<template>
    <section>
        <p v-if="cosmicData">{{cosmicData.object.metadata.info_text}}</p>
        
    </section>
</template>


<style scoped>
     * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
    }
    section {
        grid-area: dashboard-info;
        border-radius: .5rem;
        padding: 1.5rem;
        background-color: var(--whiteColor);
        box-shadow: var(--boxShadow) 0px 0px 8px;
        transition: .2s;
    }
    p {
        line-height: 1.4;
        color: var(--textColor);
        margin-top: 0.5rem;
        font-family: 'Proxima', sans-serif;

    }
</style>

