export function formatDate(date: string): string {
	const parsedDate = new Date(date);

	// Opciones para el formato de fecha y hora
	const dateOptions: Intl.DateTimeFormatOptions = { day: "2-digit", month: "2-digit", year: "2-digit" };
	const timeOptions: Intl.DateTimeFormatOptions = { hour: "2-digit", minute: "2-digit", hour12: false };

	const formattedDate = parsedDate.toLocaleDateString("es-ES", dateOptions); // Formato de fecha
	const formattedTime = parsedDate.toLocaleTimeString("es-ES", timeOptions); // Formato de hora

	return `${formattedDate} - ${formattedTime}`;
}
