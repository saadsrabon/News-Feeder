const currentTime = new Date();

// Function to format timestamp according to different expressions
export function formatTimestamp(timestamp) {
    // Parse the timestamp string into a Date object
    const date = new Date(timestamp);

    const currentTime = new Date();
    const diff = currentTime - date;

    // 1 hour ago
    if (diff < 3600000) { // 1 hour in milliseconds
        return date.toISOString();
    }

    // Yesterday
    const yesterday = new Date(currentTime);
    yesterday.setDate(currentTime.getDate() - 1);
    if (date.toDateString() === yesterday.toDateString()) {
        return "Yesterday";
    }

    // Specific date format: Weekday, Month Day, Year
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}


// functions to format header time

export function formatHeaderTime() {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return currentTime.toLocaleDateString('en-US', options);
}