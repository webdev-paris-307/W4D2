// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
// getInstruction("mashedPotatoes", 0, (step1) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 1, (step2) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 2, (step3) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 3, (step4) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 4, (step5) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
//   document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
// }, (error) => console.log(error));

// Iteration 1 - using callbacks
// ...
const mashedPotatoesElement = document.querySelector("#mashedPotatoes")

getInstruction(
	"mashedPotatoes",
	0,
	(step) => {
		mashedPotatoesElement.innerHTML += `<li>${step}</li>`

		getInstruction(
			"mashedPotatoes",
			1,
			(step) => {
				mashedPotatoesElement.innerHTML += `<li>${step}</li>`

				getInstruction(
					"mashedPotatoes",
					2,
					(step) => {
						mashedPotatoesElement.innerHTML += `<li>${step}</li>`
						getInstruction(
							"mashedPotatoes",
							3,
							(step) => {
								mashedPotatoesElement.innerHTML += `<li>${step}</li>`
								getInstruction(
									"mashedPotatoes",
									4,
									(step) => {
										mashedPotatoesElement.innerHTML += `<li>${step}</li>`
										document
											.getElementById("mashedPotatoesImg")
											.removeAttribute("hidden")
									},
									(error) => {
										console.log(error)
									}
								)
							},
							(error) => {
								console.log(error)
							}
						)
					},
					(error) => {
						console.log(error)
					}
				)
			},
			(error) => {
				console.log(error)
			}
		)
	},
	(error) => {
		console.log(error)
	}
)

// Iteration 2 - using promises
// ...
const steakElement = document.getElementById("steak")

obtainInstruction("steak", 0)
	.then((step) => {
		steakElement.innerHTML += `<li>${step}</li>`
		return obtainInstruction("steak", 1)
	})
	.then((step) => {
		steakElement.innerHTML += `<li>${step}</li>`
		return obtainInstruction("steak", 2)
	})
	.then((step) => {
		steakElement.innerHTML += `<li>${step}</li>`
		return obtainInstruction("steak", 3)
	})
	.then((step) => {
		steakElement.innerHTML += `<li>${step}</li>`
		return obtainInstruction("steak", 4)
	})
	.then((step) => {
		steakElement.innerHTML += `<li>${step}</li>`
		return obtainInstruction("steak", 5)
	})
	.then((step) => {
		steakElement.innerHTML += `<li>${step}</li>`
	})
	.catch((error) => console.error(error))
	.finally(() => {
		steakElement.innerHTML += "<li>Steak is ready !</li>"
	})

// Iteration 3 using async/await
// ...

async function makeBrocco() {
	const broccoElement = document.getElementById("broccoli")
	try {
		for (let i = 0; i < broccoli.length; i++) {
			broccoElement.innerHTML += `<li>${await obtainInstruction(
				"broccoli",
				i
			)}</li>`
		}
		// broccoElement.innerHTML += `<li>${await obtainInstruction(
		// 	"broccoli",
		// 	1
		// )}</li>`
		// broccoElement.innerHTML += `<li>${await obtainInstruction(
		// 	"broccoli",
		// 	2
		// )}</li>`
		// broccoElement.innerHTML += `<li>${await obtainInstruction(
		// 	"broccoli",
		// 	3
		// )}</li>`
		// broccoElement.innerHTML += `<li>${await obtainInstruction(
		// 	"broccoli",
		// 	4
		// )}</li>`
		// broccoElement.innerHTML += `<li>${await obtainInstruction(
		// 	"broccoli",
		// 	5
		// )}</li>`

		// const step2 = await obtainInstruction('broccoli', 1)
		// broccoElement.innerHTML += `<li>${step2}</li>`
	} catch (error) {
		console.error(error)
	}
}
makeBrocco()

// Bonus 2 - Promise all
// ...

const arrayOfPromises = [
	obtainInstruction("brusselsSprouts", 0),
	obtainInstruction("brusselsSprouts", 1),
	obtainInstruction("brusselsSprouts", 2),
	obtainInstruction("brusselsSprouts", 3),
	obtainInstruction("brusselsSprouts", 4),
	obtainInstruction("brusselsSprouts", 5),
	obtainInstruction("brusselsSprouts", 6),
]
const brusselsSproutsElement = document.getElementById("brusselsSprouts")

Promise.all(arrayOfPromises)
	.then((data) => {
		console.log(data)
		for (const instruction of data) {
			brusselsSproutsElement.innerHTML += `<li>${instruction}</li>`
		}
	})
	.catch((error) => console.error(error))

// console.log(
// 	`%cFlorian is logged in`,
// 	"display: inline-block ; border: 3px solid red ; border-radius: 7px ; " +
// 		"padding: 10px ; margin: 20px ;"
// )

// Array.prototype.myAsyncForEach = async function (callback) {

//   for (let i = 0; i < this.length; i++) {
//      await callback(this[i], i, this)
//   }

// }
