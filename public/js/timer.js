(function () {
    let updateInterval;
    function iterate() {
        updateInterval?clearInterval(updateInterval):null;
        fetch('/deadline')
            .then(response => response.json())
            .then(data => {
                 updateInterval = setInterval(function () {
                    const countDown = data.deadline, now = new Date().getTime(), distance = countDown - now;

                    document.getElementById("days").innerText = Math.floor(distance / (day));
                    document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour));
                    document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute));
                    document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

                    // do something later when the date is reached
                    if (distance < 0) {
                        document.getElementById("headline").innerText = "Time is out!";
                        document.getElementById("countdown").style.display = "none";

                        clearInterval(requestInterval);
                        clearInterval(updateInterval);
                    }
                }, 0);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;
    iterate();
    let requestInterval = setInterval(iterate, 300000)
}());