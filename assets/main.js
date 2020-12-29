const lastTime = 1609171523000;

setInterval(function () {
  let timeNow = new Date();
  let interval = Math.round(new Date(Date.now() - lastTime) / 1000);
  let timeNowReadable = `${timeNow.toLocaleString("en-US", {
    weekday: "short"
  })}, ${timeNow.toLocaleString("en-US", {
    day: "2-digit"
  })} ${timeNow.toLocaleString("en-US", {
    month: "short"
  })} ${timeNow.toLocaleString("en-US", {
    year: "numeric"
  })} ${timeNow.toLocaleString("en-US", {
    hour: "2-digit",
    hour12: false
  })}:${timeNow.toLocaleString("en-US", {
    minute: "2-digit"
  })}:${addZero(
    Number(
      timeNow.toLocaleString("en-US", {
        second: "2-digit"
      })
    )
  )}`;
  document.querySelector(".now p").innerHTML = timeNowReadable;

  let daysElapsed = Math.floor(interval / 86400);
  interval -= daysElapsed * 86400;
  let hoursElapsed = Math.floor(interval / 3600);
  interval -= hoursElapsed * 3600;
  let minutesElapsed = Math.floor(interval / 60);
  interval -= minutesElapsed * 60;
  document.querySelector(
    ".days"
  ).innerHTML = `${daysElapsed} <span>days</span>`;
  document.querySelector(".hours").innerHTML = `${addZero(
    hoursElapsed
  )} <span>hours</span>`;
  document.querySelector(".minutes").innerHTML = `${addZero(
    minutesElapsed
  )} <span>minutes</span>`;
  document.querySelector(".seconds").innerHTML = `${addZero(
    interval
  )} <span>seconds</span>`;
}, 1000);

function addZero(num) {
  return num > 9 ? num : "0" + num;
}
