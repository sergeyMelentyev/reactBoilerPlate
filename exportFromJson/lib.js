import React from "react"
import text from "./data.json"

export const name = (
	<h2 id="title"
		className="header"
		style={{backgroundColor: "grey"}}>
		{text.name}
	</h2>
)

export const index = (
	<h2 id="title"
		className="header"
		style={{backgroundColor: "grey"}}>
		{text.index}
	</h2>
)
