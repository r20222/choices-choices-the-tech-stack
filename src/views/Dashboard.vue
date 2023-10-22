<script>
import TrashGraph from '../components/TrashGraph.vue'
import ChartContinents from '../components/ChartContinents.vue'
import ChartRiverOcean from '../components/ChartRiverOcean.vue'



// Je moet de componenten die je wilt gebruiken hieronder in de export default zetten:
export default {
  components: {
    TrashGraph,
    ChartContinents,
    ChartRiverOcean
  },
  // ... de rest van je componentdefinities
}
</script>

<template>
  <main>
    <h3>Dashboard</h3>
    <TrashGraph/>
    <ChartContinents/>
    <ChartRiverOcean/>

    
  </main>
</template>
