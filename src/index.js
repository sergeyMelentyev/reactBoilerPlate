import React from "react"
import { render } from "react-dom"
import { name, index } from "./lib"

render(
	<h1
		id="title"
		className="header"
		style={{backgroundColor: "orange", color: "grey"}}>
		Hello, World!
	</h1>,
	document.getElementById("react-header")
)

render(
	<div>
		{name}
		{index}
	</div>,
	document.getElementById("react-body")
)
