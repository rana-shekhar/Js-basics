

const clock = document.getElementById('clock');


setInterval(function () {
    let date = new Date();

    // Get the current weekday (0-6, where 0 is Sunday and 6 is Saturday)
    const weekdays = [
        'Sunday 🌞',
        'Monday 💼',
        'Tuesday 📚',
        'Wednesday 🧘',
        'Thursday 🍕',
        'Friday 🎉',
        'Saturday 🏖️']
    const weekday = weekdays[date.getDay()];

    // Get the time in the format HH:MM:SS
    const time = date.toLocaleTimeString();

    // Display the weekday and time
    clock.innerHTML = `${weekday}  ${time}`;
}, 1000);


