<script>
// import TheWelcome from '../components/TheWelcome.vue'
import TrashGraph from '../components/TrashGraph.vue'

// Je moet de componenten die je wilt gebruiken hieronder in de export default zetten:
export default {
  components: {
    TrashGraph
  },
  // ... de rest van je componentdefinities
}
</script>

<template>
  <main>
    
    <TrashGraph/>

    <h3>Dashboard</h3>
  </main>
</template>
