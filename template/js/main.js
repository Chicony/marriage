window.onload = function() {
    loadMap('#mapContainer');

    let countDownDate = new Date("Sep 10, 2022 11:15:00").getTime();
    let x = setInterval(function() {
        let now = new Date().getTime();

        let distance = countDownDate - now;

        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("timer").innerHTML =
        `<div class="box">
          <div class="number">${days}</div>
          <div class="text">дни</div>
        </div>
        <div class="box">
          <div class="number">${hours}</div>
          <div class="text">часы</div>
        </div>
        <div class="box">
          <div class="number">${minutes}</div>
          <div class="text">мин</div>
        </div>
        <div class="box">
          <div class="number">${seconds}</div>
          <div class="text">сек</div>
        </div>`;

        if (distance < 0) {
            clearInterval(x);
            document.getElementById("timer").innerHTML =
                `<div class="box">
                  <div class="number">0</div>
                  <div class="text">дни</div>
                </div>
                <div class="box">
                  <div class="number">0</div>
                  <div class="text">часы</div>
                </div>
                <div class="box">
                  <div class="number">0</div>
                  <div class="text">мин</div>
                </div>
                <div class="box">
                  <div class="number">0</div>
                  <div class="text">сек</div>
                </div>`;
        }
    }, 1000);
};

function loadMap(mapContainerSelector) {
    let mapContainer = $(mapContainerSelector);
    setTimeout(function () {
        mapContainer.html(mapContainer.data('map'));
        mapContainer.children('.preloader').hide();
    }, 2000);
}