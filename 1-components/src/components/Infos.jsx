import React from "react"

function Infos(props) {
	// React Fragment allow us to create a common ancestor without creating an
	// HTML element
	/**
	 * <> </>
	 */
	return (
		<div className="Infos">
			<h2>
				Name: <span>{props.name}</span>
			</h2>
			<p>Previous Job: {props.previousJob}</p>
		</div>
	)
}

export default Infos
