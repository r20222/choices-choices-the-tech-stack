<script>
import TrashGraph from '../components/TrashGraph.vue'
import ChartContinents from '../components/ChartContinents.vue'
import ChartRiverOcean from '../components/ChartRiverOcean.vue'
import HeaderDashboard from '../components/HeaderDashboard.vue'
import TrashRemovedTotal from '../components/TrashRemovedTotal.vue'
import TrashRemoved30Days from '../components/TrashRemoved30Days.vue'
import InfoText from '../components//InfoText.vue'






// Je moet de componenten die je wilt gebruiken hieronder in de export default zetten:
export default {
  components: {
    TrashGraph,
    ChartContinents,
    ChartRiverOcean,
    HeaderDashboard,
    TrashRemovedTotal,
    TrashRemoved30Days,
    InfoText
  },
}
</script>

<template>
  <main>

    <hr>
    <HeaderDashboard class="header-dashboard" />
    <TrashRemovedTotal />
    <TrashRemoved30Days />
    <InfoText />

    <section class="panel chart-river-ocean">
      <ChartRiverOcean/>
		</section>

		<!-- Box 4: percentage in 2040 -->
		<section class="panel chart-continents">
			<ChartContinents/>
		</section>

		<section class="panel trash-graph">
			<TrashGraph/>
		</section>
    

    
  </main>
</template>

<style scoped>

/* Grid */
main{
		margin: 5rem 1.5rem 1.5rem 1.5rem;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		/* grid-template-rows: 0.01fr 0.1fr 1fr 1fr 0.5fr 0.8fr 0.5fr 0.5fr 1fr ; */
		gap: 1rem;
		grid-template-areas:
			'line line'
			'header-dashboard header-dashboard'
			'trash-removed-total trash-removed-30-days'
			'dashboard-info dashboard-info'
			'map map'
			'share share'
			'chart-river-ocean chart-river-ocean'
			'chart-continents chart-continents'
			'trash-graph trash-graph'
			'more more';
	}

/* Grid areas */
.header-dashboard{
		grid-area: header-dashboard;
	}
	.map{
		grid-area: map;
		border-radius: 0.5rem;
		padding: 0.5rem;
		background-color: var(--whiteColor);
		box-shadow: var(--boxShadow) 0px 0px 8px;
		transition: 0.2s;
	}
	.chart-river-ocean{
		grid-area: chart-river-ocean;
	}
	.chart-continents{
		grid-area: chart-continents;
	}
  .trash-graph{
    grid-area: trash-graph;
  }
	.share{
		grid-area: share;
	}
	.more{
		grid-area: more;
	}





/* horizontal blue line */
hr{
    height: 2px;
    width: 20%;
    background-color: var(--lightBlue);
    border: none;
    grid-area: line;
  }
.panel{
		border-radius: 0.5rem;
		padding: 1.5rem;
		background-color: var(--whiteColor);
		box-shadow: var(--boxShadow) 0px 0px 8px;
		transition: 0.2s;
	}
  /* boxes styling */
	.chart-river-ocean,
	.chart-continents{
		font-size: 1rem;
		font-family: 'Roboto Mono', monospace;
	}

</style>