<script setup>
    import { ref, onMounted } from 'vue';
	import { Chart } from 'chart.js/auto';
	// export let data 

	let chartInstance;
	// let continentData = data

// Data from endpoint /total

// "totals" {
//    "world_ratio": {
// 			"asia": 10,
// 			"africa": 15,
// 			"north_america": 25,
// 			"south_america": 5,
// 			"europe": 30,
// 			"antarctica": 0,
// 			"oceania": 15
//     }
//  }

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
		labels: ['Asia', 'Africa', 'North America', 'South America', 'Europe', 'Antarctica', 'Oceania'],
		datasets: [
			{
				label: 'Kilograms of removed plastic from this continent',
				data: [
					totalData.value.totals.world_ratio.asia, 
					totalData.value.totals.world_ratio.africa, 
					totalData.value.totals.world_ratio.north_america, 
					totalData.value.totals.world_ratio.south_america, 
					totalData.value.totals.world_ratio.europe, 
					totalData.value.totals.world_ratio.antarctica, 
					totalData.value.totals.world_ratio.oceania], 
				backgroundColor: [
					'#5CC8DE',
					'#79CFE1',
					'#95D6E3',
					'#B2DDE6',
					'#EBEBEB',
                    '#EBECDC',
                    '#EBEBCB'
				]
			}
		]
	};

	const config = {
		type: 'polarArea',
		data: data,
		options: {}
	};




		const ctx = document.getElementById('polar-area-chart').getContext('2d');
		chartInstance = new Chart(ctx, config);
	});
</script>

<template>
	<h2>Plastic removed per continent</h2>
	<canvas id="polar-area-chart" width="400" height="200" />
</template>


 