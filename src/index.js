const { render } = ReactDOM;

render(
	<h1
		id="title"
		className="header"
		style={{backgroundColor: "orange", color: "grey"}}>
		Hello, World!
	</h1>,
	document.getElementById("react-container")
)
