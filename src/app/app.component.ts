import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { CommonService } from './services/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'typester';

  constructor(
    // tslint:disable-next-line: variable-name
    private _commonService: CommonService,
    private router: Router
  ) {}

  ngOnInit() {
    // this.router.events
    // .subscribe(event => {
    //   if (event instanceof NavigationEnd && this._commonService.gamePlayed) {
    //     this._commonService.quickPlay = false;
    //     this._commonService.chosenMode = 0;
    //     this._commonService.difficulty = '';
    //   }
    // });
  }
}
