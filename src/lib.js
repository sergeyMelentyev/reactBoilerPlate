import React from "react"
import text from "./data.json"
import "./stylesheets/react_styles.css"

export const name = (
	<h2 id="title"
		className="second_header">
		{text.name}
	</h2>
)

export const index = (
	<h2 id="title"
		className="second_header">
		{text.index}
	</h2>
)
