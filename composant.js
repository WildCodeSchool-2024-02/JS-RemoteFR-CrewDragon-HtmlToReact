function BestTeam() {
	return (
		<div>
			<h1 className="toutou">Bonjour le CrewDragon 🐉</h1>
			<h2>je suis un sous titre</h2>
		</div>
	);
}

function AllBest() {
	return (
		<div>
			<BestTeam />
			<BestTeam />
			<BestTeam />
			<BestTeam />
			<BestTeam />
		</div>
	);
}

ReactDOM.render(<AllBest />, document.getElementById("root"));
