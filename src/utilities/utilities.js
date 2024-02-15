const currentTime = new Date();

// Function to format timestamp according to different expressions
export function formatTimestamp(timestamp) {
    const diff = currentTime - timestamp;

    // 1 hour ago
    if (diff < 3600000) { // 1 hour in milliseconds
        return timestamp.toISOString();
    }

    // Yesterday
    const yesterday = new Date(currentTime);
    yesterday.setDate(currentTime.getDate() - 1);
    if (timestamp.toDateString() === yesterday.toDateString()) {
        return "Yesterday";
    }

    // Specific date format: Weekday, Month Day, Year
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return timestamp.toLocaleDateString('en-US', options);
}


// functions to format header time

export function formatHeaderTime() {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return currentTime.toLocaleDateString('en-US', options);
}