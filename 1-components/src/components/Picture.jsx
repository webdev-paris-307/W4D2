import React from "react"

function Picture(props) {
	return (
		<picture className="Picture">
			<img style={{ width: "100px" }} src={`/images/${props.image}`} alt="" />
		</picture>
	)
}

export default Picture
