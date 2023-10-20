<script setup>

// Haal data op uit de totals API:
import { ref, onMounted } from 'vue';
import { Chart } from 'chart.js/auto';


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




// Chart JS


	// Functie om de kleurinstelling voor Chart.js te configureren op basis van dark mode
	// function configureChartColor() {
	// 	if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			// Dark mode wordt gebruikt
		// 	Chart.defaults.color = 'white';
		// } else {
			// Dark mode wordt niet gebruikt
	// 		Chart.defaults.color = '#143653';
	// 	}
	// }


	// Ik heb de hele chart grafiek in de onmounted gezet omdat het dan bij de data kan als die goed is geladen. Anders krijg je error.
	onMounted(async() => {
	// configureChartColor();




	// Door await getData() te gebruiken binnen de onMounted-hook, zorg je ervoor dat de API-aanroep wordt voltooid voordat je de gegevens probeert te benaderen
	await getData();
	// console.log(totalData.value.totals.debris_extracted_last_30d);



	// de slice -4 pakt de laatste vier months
	const laatsteVierMaanden = totalData.value.totals.months.slice(-4);
	// console.log(laatsteVierMaanden);

	// Gegevens en configuratie
	const labels = [
			laatsteVierMaanden[0].month,
			laatsteVierMaanden[1].month,
			laatsteVierMaanden[2].month,
			laatsteVierMaanden[3].month
		];

		let data = {
			labels: labels,
			datasets: [
				{
					label: 'Trash collected in kilogram',
					data: [ laatsteVierMaanden[0].debris_extracted,
						laatsteVierMaanden[1].debris_extracted,
						laatsteVierMaanden[2].debris_extracted,
						laatsteVierMaanden[3].debris_extracted
					],
					fill: true,
					borderColor: 'rgb(75, 192, 192)',
					tension: 0.1
				}
			]
		};

			const ctx = document.getElementById('line-chart').getContext('2d');
			new Chart(ctx, {
				type: 'line',
				data: data
			});
		});
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
