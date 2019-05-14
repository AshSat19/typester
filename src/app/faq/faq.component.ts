import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  faqs = [
    {
      qn: '',
      // tslint:disable-next-line: max-line-length
      an: 'Typester is a game where your typing speeds are put to test. In each agme, you get 10 words, which you need to submit. Easy words hold a score of 1, Medium hlds a score of 2 and Hard hold a score of 3. You also get a timing bonus if you finish before the alotted time.'
    },
    {
      qn: 'Quick play',
      an: 'In quick play, you get a random mf words which you have to complete in 90 seconds'
    },
    {
      qn: 'game modes',
      // tslint:disable-next-line: max-line-length
      an: 'Here we get more elaborate and customisable game. You select between Easy, Medium and ard word sets, as well a choice of game durations among 30 seconds, 1 minute and 2 minutes'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
