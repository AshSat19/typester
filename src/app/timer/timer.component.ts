import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  @Input() time: any;

  constructor() { }

  ngOnInit() {
    function getTimeRemaining(endtime) {
      const t = Date.parse(endtime) - new Date().getTime();
      let seconds = Math.floor((t / 1000) % 60);
      if (seconds < 0) {
        seconds = 0;
      }
      let minutes = Math.floor((t / 1000 / 60) % 60);
      if (minutes < 0) {
        minutes = 0;
      }
      return {
        total: t,
        minutes,
        seconds
      };
    }

    function initializeClock(id, endtime) {
      const clock = document.getElementById(id);
      const minutesSpan = clock.querySelector('.minutes');
      const secondsSpan = clock.querySelector('.seconds');

      const timeinterval = setInterval(updateClock, 1000);

      function updateClock() {
        const t = getTimeRemaining(endtime);

        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

        if (t.total <= 0) {
          clearInterval(timeinterval);
        }
      }

      updateClock();
    }

    const deadline = new Date(new Date().getTime() + this.time * 1000);
    initializeClock('clockdiv', deadline);
  }

}
