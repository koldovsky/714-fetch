(function() {

    const clockContainer = document.querySelector('.clock-container');

    function updateClock() {
        clockContainer.innerText = new Date().toLocaleTimeString();
    }

    setInterval(updateClock, 1000);

})();