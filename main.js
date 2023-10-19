// const app = Vue.createApp({
//   data() {
//     return {
//         responseData: null, // Initialiseer het met een standaardwaarde
//       };
//     }
// })

const app = Vue.createApp({
    data() {
        // definieer welke data uit de api je precies zou willen kunnen weergeven
        return {
            responseData: {
              totals: {
                debris_extracted_total: null,
                debris_extracted_last_30d: null,
              },
              months: [
                {
                year: "2023",
                month: "1",
                debris_extracted: null
                },
                {
                year: "2023",
                month: "2",
                debris_extracted: null
                },
                {
                year: "2023",
                month: "3",
                debris_extracted: null
                },
                {
                year: "2023",
                month: "4",
                debris_extracted: null
                },
                {
                year: "2023",
                month: "5",
                debris_extracted: null
                },
                {
                year: "2023",
                month: "6",
                debris_extracted: null
                },
                {
                year: "2023",
                month: "7",
                debris_extracted: null
                },
                {
                year: "2023",
                month: "8",
                debris_extracted: null
                },
                {
                year: "2023",
                month: "9",
                debris_extracted: null
                },
                {
                year: "2023",
                month: "10",
                debris_extracted: null
                }
                ],
            },
          };
    },
    // gebruik mounted om ervoor te zorgen dat de vue app is gemonteerd voordat je de responseData-eigenschap instelt
    mounted() {
      // Een voorbeeld van het ophalen van gegevens met Fetch
      fetch('https://fdnd-toc-api.netlify.app/total')
        .then(response => response.json())
        .then(data => {
          // Verwerk de gegevens hier
          this.responseData = data;
        })
        .catch(error => {
          // Behandel eventuele fouten
        });
    },
  });
  