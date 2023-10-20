<script>
// import TheWelcome from '../components/TheWelcome.vue'
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
    
    <TrashGraph/>
    <ChartContinents/>
    <ChartRiverOcean/>

    <h3>Dashboard</h3>
  </main>
</template>
