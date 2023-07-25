import React from "react"
import Picture from "./Picture"
import Infos from "./Infos"
import Hobbies from "./Hobbies"

function Card(props) {
	console.log(props)
	// const name = props.name
	// const previousJob= props.previousJob
	return (
		<article className="Card">
			{/* Load images from the public folder */}

			{/* <picture>
				<img
					style={{ width: "100px" }}
					src={`/images/${props.picture}`}
					alt=""
				/>
			</picture> */}
			<Picture image={props.picture} />
			<Infos name={props.name} previousJob={props.previousJob} />
			{/* <h2>Name: Malfoy</h2> */}
			{/* <h2>Name: {props.name}</h2>
			<p>Previous Job: {props.previousJob}</p> */}
			<Hobbies hobbies={props.hobbies} />
		</article>
	)
}

export default Card
