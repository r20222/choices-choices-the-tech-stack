app.component('trash-graph', {
    props: {
       debris_extracted_total: {
        type: Number,
        required: true
    }
    // debris_extracted_month: {
    //         type: Number,
    //         required:true
    //     }
    },
    template: 
    /*html*/
    `  
    <h2>Trash collected over time</h2>
    <p>In kilogram</p>
    
    <p>{{ debris_extracted_total }}</p>
    
    <canvas id="line-chart" width="400" height="200" />`,
})






{/* <p>{{ responseData.totals.debris_extracted_last_30d }}</p> */}



// month: {
//     type: Number,
//     required:true
// },
// year: {
//     type: Number,
//     required:true
// },
// debris_extracted_month: {
//     type: Number,
//     required:true
// }




// {/* <style>
// 	:root {
// 		--darkBlue: #143653;
// 		--lightBlue: #5cc8de;
// 		--whiteColor: #ffffff;
// 		--lightGray: #f7f7f7;
// 		--accentGray: rgb(228, 228, 228);
// 		--textColor: #143653;
// 		--boxShadow: rgba(128, 128, 128, 0.132);
// 		--color: rgb(212, 212, 212);
// 		--textSize: 1.2rem;
// 		--iconSize: 2rem;
// 	}

// 	/* Als darkmode de standaard instelling is */
// 	@media (prefers-color-scheme: dark) {
// 		:root {
// 			--darkBlue: #ffffff;
// 			--lightBlue: #5cc8de;
// 			--whiteColor: #143653;
// 			--lightGray: #0d2437;
// 			--accentGray: rgb(228, 228, 228);
// 			--textColor: #ffffff;
// 			--boxShadow: rgba(128, 128, 128, 0);
// 			--color: rgb(212, 212, 212);
// 			--textSize: 1.2rem;
// 			--iconSize: 2rem;
// 		}
// 	}
// </style> */}