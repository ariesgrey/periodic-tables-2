export default async function ReservationPage({ params }) {
	// If [id] param is "new", EDITMODE is false to create new table
	const EDITMODE = params.id === "new" ? false : true;

	if (!EDITMODE) {
		return (
			<div className="px-4 sm:px-6 lg:px-8">
				<h1>New Table</h1>
			</div>
		);
	}
}
