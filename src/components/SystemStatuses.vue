<template>
    <section class="panel share">
			<h2>System statuses</h2>
			<table>
				<tr>
					<td class="green">
                        In operation
					</td>
					<td>
						10 interceptors
					</td>
				</tr>

				<tr>
					<td class="green">
                        Harvesting
					</td>
					<td>
						1 ocean system
					</td>
				</tr>

				<tr>
					<td class="blue">
                        Installed for testing
					</td>
					<td>
						1 interceptor
					</td>
				</tr>

				<tr>
					<td class="gray">
                        Planned
					</td>
					<td>
						1 interceptor
					</td>
				</tr>

				<tr>
					<td class="gray">
                        Contract signed
					</td>
					<td>
						1 interceptor
					</td>
				</tr>
			</table>
		</section>
</template>

<style>

    tr {
        height: 2.5rem;
        }
    th{
        text-align: start;
    }

    /* Dots */
    tr > td.green:first-child::before{
        content:" ";
        display: inline-block; 
        width: 1rem; 
        height: 1rem;
        animation: pulse-green 2s infinite;
        background: rgb(132, 206, 95);
		box-shadow: 0 0 0 0 rgb(132, 206, 95);
        border-radius: 50%;
        z-index: -1;
    }
    tr > td.blue:first-child::before{
        content:" ";
        display: inline-block; 
        width: 1rem; 
        height: 1rem;
        animation: pulse-blue 2s infinite;
        background: var(--lightBlue);
		box-shadow: 0 0 0 0 var(--lightBlue);
        border-radius: 50%;
        z-index: -1;
    }
    tr > td.gray:first-child::before{
        content:" ";
        display: inline-block; 
        width: 1rem; 
        height: 1rem;
        animation: pulse-gray 2s infinite;
        background: rgb(176, 176, 176);
        box-shadow: 0 0 0 0 rgb(176, 176, 176);
        border-radius: 50%;
        z-index: -1;
    }

    /* animaties */
	@keyframes pulse-green {
		0% {
			transform: scale(0.95);
			box-shadow: 0 0 0 0 rgb(132, 206, 95);
		}

		70% {
			transform: scale(1);
			box-shadow: 0 0 0 5px rgba(255, 82, 82, 0);
		}

		100% {
			transform: scale(0.95);
			box-shadow: 0 0 0 0 rgba(255, 82, 82, 0);
		}
	}

	@keyframes pulse-blue {
		0% {
			transform: scale(0.95);
			box-shadow: 0 0 0 0 var(--lightBlue);
		}

		70% {
			transform: scale(1);
			box-shadow: 0 0 0 5px rgba(255, 82, 82, 0);
		}

		100% {
			transform: scale(0.95);
			box-shadow: 0 0 0 0 rgba(255, 82, 82, 0);
		}
	}

	@keyframes pulse-gray {
		0% {
			transform: scale(0.95);
			box-shadow: 0 0 0 0 rgb(176, 176, 176);
		}

		70% {
			transform: scale(1);
			box-shadow: 0 0 0 5px rgba(255, 82, 82, 0);
		}

		100% {
			transform: scale(0.95);
			box-shadow: 0 0 0 0 rgba(255, 82, 82, 0);
		}
	}		
</style>