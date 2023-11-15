export default async function ReservationPage({ params }) {
	// If [id] param is "new", EDITMODE is false to create new reservation
	const EDITMODE = params.id === "new" ? false : true;

	if (!EDITMODE) {
		return (
			<div className="px-4 sm:px-6 lg:px-8">
				<h1>New Reservation</h1>
			</div>
		);
	}
}
