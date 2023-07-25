import "./App.css"
/**
 * Only if your images are in the /src/... folder
 */
import clownPicture from "./assets/images/Screenshot 2023-07-25 at 11.16.11.png"
import Card from "./components/Card"
import Container from "./components/Container"

function App() {
	// const elementsToDisplay = [<div>Hey</div>, <p>I am a P tag</p>]
	return (
		<>
			{/* {elementsToDisplay} */}
			<article className="card">
				{/* Load images from the public folder */}
				<img
					style={{ width: "100px" }}
					src="/images/Screenshot 2023-07-25 at 11.15.23.png"
					alt=""
				/>
				<h2>Name: Barnabe</h2>
				<p>Previous Job: Policeman</p>
				<ul>
					<li>Skate</li>
					<li>Swimming</li>
					<li>Joke</li>
				</ul>
			</article>
			<article className="card">
				{/* Load images from the public folder */}
				<img
					style={{ width: "100px" }}
					src="/images/Screenshot 2023-07-25 at 11.15.40.png"
					alt=""
				/>
				<h2>Name: Hector</h2>
				<p>Previous Job: Coast Guard</p>
				<ul>
					<li>Sky diving</li>
					<li>Exploring</li>
					<li>Joke</li>
				</ul>
			</article>
			<article>
				{/* Load images from the public folder */}
				<img
					style={{ width: "100px" }}
					src="/images/Screenshot 2023-07-25 at 11.15.51.png"
					alt=""
				/>
				<h2>Name: Malfoy</h2>
				<p>Previous Job: Wizard</p>
				<ul>
					<li>Pretending to cast spells</li>
					<li>Exploring</li>
					<li>Joke</li>
				</ul>
			</article>

			{/* Card */}
			<article className="card">
				{/* Picture */}
				<picture>
					<img src={clownPicture} alt="" />
				</picture>

				{/* Infos */}
				<h2>Name: Barnabe</h2>
				<h2>Previous Job: Film maker</h2>

				{/* Hobbies */}
				<ul>
					<li>Skate</li>
					<li>Swimming</li>
					<li>Joke</li>
				</ul>
			</article>

			{/* {Card({ name: "Hector", previousJob: 'KnifeSmith' })} */}
			<Container gap="2rem" wrap={true}>
				<Card
					name="Hector"
					picture="Screenshot 2023-07-25 at 11.15.51.png"
					previousJob="Diplomat"
					hobbies={[
						"Cinema",
						"Binge watching Silicon Valley",
						"Futurama",
						"Peaky Blinders",
						"Gang of London",
					]}></Card>
				<Card
					name="Toto"
					picture="Screenshot 2023-07-25 at 11.15.23.png"
					previousJob="Professional swimmer"
					hobbies={["Reading", "Contemplation", "Sky diving"]}
				/>
				<Card
					name="Toto"
					picture="Screenshot 2023-07-25 at 11.15.23.png"
					previousJob="Professional swimmer"
					hobbies={["Reading", "Contemplation", "Sky diving"]}
				/>
				<Card
					name="Toto"
					picture="Screenshot 2023-07-25 at 11.15.23.png"
					previousJob="Professional swimmer"
					hobbies={["Reading", "Contemplation", "Sky diving"]}
				/>
				<Card
					name="Toto"
					picture="Screenshot 2023-07-25 at 11.15.23.png"
					previousJob="Professional swimmer"
					hobbies={["Reading", "Contemplation", "Sky diving"]}
				/>
				<Card
					name="Toto"
					picture="Screenshot 2023-07-25 at 11.15.23.png"
					previousJob="Professional swimmer"
					hobbies={["Reading", "Contemplation", "Sky diving"]}
				/>
				<Card
					name="Toto"
					picture="Screenshot 2023-07-25 at 11.15.23.png"
					previousJob="Professional swimmer"
					hobbies={["Reading", "Contemplation", "Sky diving"]}
				/>
				<Card
					name="Toto"
					picture="Screenshot 2023-07-25 at 11.15.23.png"
					previousJob="Professional swimmer"
					hobbies={["Reading", "Contemplation", "Sky diving"]}
				/>
				<Card
					name="Toto"
					picture="Screenshot 2023-07-25 at 11.15.23.png"
					previousJob="Professional swimmer"
					hobbies={["Reading", "Contemplation", "Sky diving"]}
				/>
				<Card
					name="Toto"
					picture="Screenshot 2023-07-25 at 11.15.23.png"
					previousJob="Professional swimmer"
					hobbies={["Reading", "Contemplation", "Sky diving"]}
				/>
			</Container>
		</>
	)
}

// function Container(props) {
// 	console.log(props)
// 	// let wrap
// 	// if (props.wrap) {
// 	//   wrap = 'wrap'
// 	// } else {
// 	//   wrap = 'nowrap'
// 	// }
// 	return (
// 		<div
// 			style={{
// 				display: "flex",
// 				gap: props.gap,
// 				flexWrap: props.wrap ? "wrap" : "nowrap",
// 			}}>
// 			{props.children}
// 		</div>
// 	)
// }

export default App

// function Card(props) {
// 	console.log(props)
// 	// const name = props.name
// 	// const previousJob= props.previousJob
// 	return (
// 		<article className="Card">
// 			{/* Load images from the public folder */}

// 			{/* <picture>
// 				<img
// 					style={{ width: "100px" }}
// 					src={`/images/${props.picture}`}
// 					alt=""
// 				/>
// 			</picture> */}
// 			<Picture image={props.picture} />
// 			<Infos name={props.name} previousJob={props.previousJob} />
// 			{/* <h2>Name: Malfoy</h2> */}
// 			{/* <h2>Name: {props.name}</h2>
// 			<p>Previous Job: {props.previousJob}</p> */}
// 			<Hobbies hobbies={props.hobbies} />
// 		</article>
// 	)
// }

// function Hobbies(props) {
// 	return (
// 		<ul>
// 			{props.hobbies.map((hobby) => {
// 				return <li>{hobby}</li>
// 			})}
// 			{/* <li>{props.hobbies[0]}</li>
// 			<li>{props.hobbies[1]}</li>
// 			<li>{props.hobbies[2]}</li> */}
// 		</ul>
// 	)
// }

// function Picture(props) {
// 	return (
// 		<picture className="Picture">
// 			<img style={{ width: "100px" }} src={`/images/${props.image}`} alt="" />
// 		</picture>
// 	)
// }

// function Infos(props) {
// 	// React Fragment allow us to create a common ancestor without creating an
// 	// HTML element
// 	/**
// 	 * <> </>
// 	 */
// 	return (
// 		<div className="Infos">
// 			<h2>
// 				Name: <span>{props.name}</span>
// 			</h2>
// 			<p>Previous Job: {props.previousJob}</p>
// 		</div>
// 	)
// }
