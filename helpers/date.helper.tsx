export function formatDate(date: string): string {
    const [year, month, day] = date.split('-');

    return `${day}.${month}.${year}`;
}

export function timestampToDate(timestamp: number, isFull?: boolean): string {
    const date = new Date(timestamp * 1000);

    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: isFull ? '2-digit' : undefined,
        minute: isFull ? '2-digit' : undefined,
        hour12: false,
        timeZone: 'Europe/Moscow',
    };

    const formattedDate = date.toLocaleString('ru-RU', options);

    return formattedDate;
}

export function getMonthAndYear(timestamp: number): number[] {
    const date = new Date(timestamp * 1000);
    const month = date.getMonth();
    const year = date.getFullYear();

    return [month, year];
}
