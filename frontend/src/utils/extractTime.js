export function extractTime(dateString) {
	const date = new Date(dateString);
	let hours = padZero(date.getHours());
	const minutes = padZero(date.getMinutes());

    // Determine AM or PM
	const ampm = hours >= 12 ? 'PM' : 'AM';

	// Convert hours to 12-hour format
	hours = hours % 12 || 12;

	// Pad with leading zero if needed
	hours = padZero(hours);
    
	return `${hours}:${minutes} ${ampm}`;
}

// Helper function to pad single-digit numbers with a leading zero
function padZero(number) {
	return number.toString().padStart(2, "0");
}