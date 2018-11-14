function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor(t / 1000) % 60;
  var minutes = Math.floor(t / 1000 / 60) % 60;
  var hours = Math.floor(t / 1000 / 60 / 60) % 24;
  var days = Math.floor(t / 1000 / 60 / 60 / 24);
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}
  
function initializeClock(id) {
  const clock = $(id);
  clock.each((i, el) => {
    const item = $(el);
    const endtime = item.data('deadline');
    let daysSpan = item.find('[data-end-day]');
    let hoursSpan = item.find('[data-end-hours]');
    let minutesSpan = item.find('[data-end-minutes]');
    let secondsSpan = item.find('[data-end-seconds]');
  
    function updateClock() {
      let t = getTimeRemaining(endtime);
  
      daysSpan.html(t.days);
      hoursSpan.html(('0' + t.hours).slice(-2));
      minutesSpan.html(('0' + t.minutes).slice(-2));
      secondsSpan.html(('0' + t.seconds).slice(-2));
  
      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }
  
    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
  });
}
// var deadline = $('[data-deadline]').data('deadline');
// var deadline=$('[data-deadline]').data(); //for Ukraine
// var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000); // for endless timer
initializeClock('[data-deadline]');
