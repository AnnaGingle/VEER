import React from "react";
import Card from "../components/card";
import "../styles/grid.css";

//icons
import zip from "../assets/icons/Zip.svg";

//documents
import cc from "../assets/zips/Client Critique .zip";
import lc from "../assets/zips/Lauren Critique.zip";

function Critique() {
	return (
		<div>
			<h1>Critique</h1>
			<hr />
			<div className="grid-container">
				{/* Client Critique */}
				<Card title="Client Critique" icon={zip} doc={cc} />

				{/* Lauren Critique */}
				<Card title="Lauren Critique" icon={zip} doc={lc} />

				{/* Final Presentation Critique */}
			</div>
		</div>
	);
}

export default Critique;
