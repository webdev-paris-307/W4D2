import React from "react"

function Hobbies(props) {
	return (
		<ul>
			{props.hobbies.map((hobby) => {
				return <li>{hobby}</li>
			})}
			{/* <li>{props.hobbies[0]}</li>
			<li>{props.hobbies[1]}</li>
			<li>{props.hobbies[2]}</li> */}
		</ul>
	)
}

export default Hobbies
