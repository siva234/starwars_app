import React from "react";
import styles from "./SideDisplay.module.css";

function SideDisplay({ displayData }) {
	return (
		<>
			{displayData?.title ? (
				<div>
					<h1>{displayData.title}</h1>
					<p className={styles.desc_para}>
						{displayData.opening_crawl}
						<br />
						<br />
						Directed by: {displayData.director}
						<br />
						<br />
						Produced by: {displayData.producer}
						<br />
						<br />
						Releaased on: {displayData.release_date}
					</p>
				</div>
			) : (
				<div>No movie Selected</div>
			)}
		</>
	);
}

export default SideDisplay;
