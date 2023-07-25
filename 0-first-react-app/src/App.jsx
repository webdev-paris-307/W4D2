import "./App.css"

function App() {
	const doggo = "Iro"

	const getRandomColor = () => {
		return `hsl(${Math.random() * 360}, 50%, 75%)`
	}

	return (
		<>
			<h1>Hello world !</h1>
			<p>Hello {doggo}</p>

			<ul>
				<li>
					Booleans: {true} {false}
				</li>
				<li>{["hey", 2, "poum", 4]}</li>
				<li>{JSON.stringify({ name: "toto", age: 24 })}</li>
				<li>{0} 0</li>
			</ul>

			<section style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
				<div
					className="card"
					style={{
						height: "50px",
						backgroundColor: getRandomColor(),
						width: "50px",
					}}></div>
				<div
					className="card"
					style={{
						height: "50px",
						backgroundColor: getRandomColor(),
						width: "50px",
					}}></div>
				<div
					className="card"
					style={{
						height: "50px",
						backgroundColor: getRandomColor(),
						width: "50px",
					}}></div>
				<div
					className="card"
					style={{
						height: "50px",
						backgroundColor: getRandomColor(),
						width: "50px",
					}}></div>
			</section>
		</>
	)
}

export default App
