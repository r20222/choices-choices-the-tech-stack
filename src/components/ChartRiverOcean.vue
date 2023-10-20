<script setup>
	import { ref, onMounted } from 'vue';
	import { Chart } from 'chart.js/auto';

	let chartInstance;

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




// Data from endpoint /total

// // "totals" {
// //    "ocean_river_ratio": {
// //         "percent_river": 65,
// //          "percent_ocean": 35
// //     }
// //  }



// Functie om de kleurinstelling voor Chart.js te configureren op basis van dark mode
// function configureChartColor() {
// 		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
// 			// Dark mode wordt gebruikt
// 			Chart.defaults.color = 'white';
// 		} else {
// 			// Dark mode wordt niet gebruikt
// 			Chart.defaults.color = '#143653';
// 		}
// 	}
		

onMounted(async() => {
	// configureChartColor();

    await getData()


    // Gegevens & configuratie 
	let data = {
		labels: ['River', 'Ocean'],
		datasets: [
			{
				label: 'Percentage of removed plastic',
				data: [totalData.value.totals.ocean_river_ratio.percent_river, totalData.value.totals.ocean_river_ratio.percent_ocean],
				backgroundColor: ['#5CC8DE', '#95D6E3'],
				hoverOffset: 4
			}
		]
	};

	const config = {
		type: 'doughnut',
		data: data
	};

    const ctx = document.getElementById('donut-chart').getContext('2d');
    chartInstance = new Chart(ctx, config);
});
</script>

<template>
	<canvas id="donut-chart" width="400" height="200" />
</template>