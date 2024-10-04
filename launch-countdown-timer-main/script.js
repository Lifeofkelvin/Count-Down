document.addEventListener("DOMContentLoaded", (event) => {
  // Set the date we're counting down to
  const countDownDate = new Date("august 13, 2025 15:37:25").getTime();

  // Update the count down every 1 second
  const x = setInterval(function () {
    // Get today's date and time
    const now = new Date().getTime();

    // Find the distance between now and the count down date
    const distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Flip the cards
    flipCard("days", days);
    flipCard("hours", hours);
    flipCard("minutes", minutes);
    flipCard("seconds", seconds);

    // If the count down is over, write some text
    if (distance < 0) {
      clearInterval(x);
      document.querySelector(".counter").innerHTML = "EXPIRED";
    }
  }, 1000);
});

function flipCard(id, newValue) {
  const topElement = document.getElementById(id + "-top");
  const downElement = document.getElementById(id + "-down");
  const boxElement = document.getElementById(id);
  const currentValue = parseInt(boxElement.innerHTML, 10);
  if (currentValue !== newValue) {
    topElement.classList.add("flip-top");
    downElement.classList.add("flip-down");

    setTimeout(() => {
      boxElement.innerHTML = newValue < 10 ? "0" + newValue : newValue;
      topElement.classList.remove("flip-top");
      downElement.classList.remove("flip-down");
    }, 300); // Match the animation duration
  }
}
