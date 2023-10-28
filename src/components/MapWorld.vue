<script setup>
import { ref, onMounted } from 'vue';
``;
// Import the mapbox library
import mapboxgl from 'mapbox-gl';


// fetch de riverdata API

const riverData = ref(null); // Start met een null-waarde om aan te geven dat er nog geen data is.
const oceanData = ref(null);

async function getData() {
  try {
    const resRiver = await fetch("https://fdnd-toc-api.netlify.app/river");
    if (resRiver.ok) {
      const rData = await resRiver.json();
      riverData.value = rData;
    } else {
      // Als de API-aanroep niet succesvol is, behandel de fout hier.
      console.error("Fout bij het ophalen van gegevens. Statuscode: " + resRiver.status);
    }
	const resOcean = await fetch("https://fdnd-toc-api.netlify.app/ocean");
	if (resOcean.ok) {
	  const oData = await resOcean.json();
      oceanData.value = oData;
	} else {
      console.error("Fout bij het ophalen van oceaangegevens. Statuscode: " + resOcean.status);
    }
	} catch (error) {
    // Als er een andere fout optreedt, behandel deze hier.
    console.error("Er is een fout opgetreden: " + error.message);
  }
}


// export let data;
// console.log(data.latitude, data.longitude);
let map;

onMounted(async() => {

// Door await getData() te gebruiken binnen de onMounted-hook, zorg je ervoor dat de API-aanroep wordt voltooid voordat je de gegevens probeert te benaderen
await getData();
console.log(riverData.value)
console.log(oceanData.value)

		// toegangscode in voor mapbox weer te geven
		mapboxgl.accessToken =
			'pk.eyJ1IjoibWNwaGVuZHJpa3MiLCJhIjoiY2xuYWpkajM3MDRvNzJxbzdjbGg1YXc0MiJ9.mRRivdosZVdSXQ9FDd0ZwA';
		map = new mapboxgl.Map({
			container: 'map',
			style: 'mapbox://styles/mapbox/light-v11',
			zoom: 2,
			center: [-103.5917, 40.6699]
		});
		// lijst van GeoJSON-functies (geografische kenmerken) op basis van gegevens in data.riverDataJson.systems
		const geojsonFeatures = riverData.value.systems.map((interceptor) => ({
			type: 'Feature',
			geometry: {
				type: 'Point',
				coordinates: [interceptor.longitude, interceptor.latitude]
			},
			properties: interceptor
		}));

		const geojsonFeaturesOcean = oceanData.value.systems.map((ocean) => ({
			type: 'Feature',
			geometry: {
				type: 'Point',
				coordinates: [ocean.longitude, ocean.latitude]
			},
			properties: ocean
		}));

		map.on('load', () => {
			map.addSource('interceptor-locations', {
				type: 'geojson',
				data: {
					type: 'FeatureCollection',
					features: geojsonFeatures, geojsonFeaturesOcean
				}
			});

			// Add a layer for the circles
			map.addLayer({
				id: 'interceptor-circles',
				type: 'circle',
				source: 'interceptor-locations',
				paint: {
					'circle-radius': 10,
					'circle-stroke-width': 1,
					'circle-stroke-color': '#fff',
					'circle-color': [
						'match',
						['get', 'status'],
						'in_operation',
						'#84CE5F',
						'in_maintenance',
						'#143653',
						'installed_for_testing',
						'#6CCDE1',
						'contract_signed',
						'#B0B0B0',
						'planned',
						'#B0B0B0',
						/* Default color */ 'blue'
					]
				}
			});

			map.on('click', 'interceptor-circles', (e) => {
				const interceptorId = e.features[0].properties.id;
				const coordinates = e.features[0].geometry.coordinates;

				const slug = `/interceptor?id=${interceptorId}`;
				window.location.href = slug;
			});
		});
	});
</script>


<template>
    <section id="map" />
</template>


<style>
	#map {
		position: relative;
		width: 100%;
		height: 100%;
	}
	#map:hover{
		cursor: pointer;
	}
	#map:active{
		cursor:grabbing
	}
	.mapboxgl-ctrl-attrib-inner{
		margin-top:-5rem;
		margin-left:1rem;	
	}
</style>