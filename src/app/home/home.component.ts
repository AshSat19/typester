import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  gameModes: boolean;
  mainMenu: boolean;
  difficultyLevels: boolean;
  difficulty: string;

  constructor(
    // tslint:disable-next-line: variable-name
    private _commonService: CommonService,
    private router: Router
  ) { }

  ngOnInit() {
    this.gameModes = false;
    this.mainMenu = true;
    this.difficultyLevels = false;
    this.difficulty = '';
  }

  quickPlay() {
    this._commonService.quickPlay = true;
    this._commonService.accessGame = true;
    this.router.navigate(['/game']);
  }

  getDifficulty() {
    this.mainMenu = false;
    this.difficultyLevels = true;
  }

  getGameModes(difficulty: string) {
    this._commonService.difficulty = difficulty;
    this.difficultyLevels = false;
    this.gameModes = true;
  }

  pickedMode(mode: number) {
    this._commonService.chosenMode = mode;
    this._commonService.accessGame = true;
    this.router.navigate(['/game']);
  }

}
