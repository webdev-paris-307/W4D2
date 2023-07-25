import React from "react"

function Container(props) {
	console.log(props)
	// let wrap
	// if (props.wrap) {
	//   wrap = 'wrap'
	// } else {
	//   wrap = 'nowrap'
	// }
	return (
		<div
			style={{
				display: "flex",
				gap: props.gap,
				flexWrap: props.wrap ? "wrap" : "nowrap",
			}}>
			{props.children}
		</div>
	)
}

export default Container
