import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { GameService } from '../services/game.service';
import { WordModel } from '../models/word.model';
import { CommonService } from '../services/common.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-game-screen',
  templateUrl: './game-screen.component.html',
  styleUrls: ['./game-screen.component.css']
})
export class GameScreenComponent implements OnInit, OnDestroy {
  words: WordModel[] = [];
  currentWord: string;
  answerForm: FormGroup;
  score: number;
  gameOn: boolean;
  gameOver: boolean;
  gameDone: boolean;
  gameTime: number;
  counter: number;
  startTime: number;
  endTime: number;
  remainingTime: number;
  subScore: number;

  constructor(
    // tslint:disable-next-line: variable-name
    private _gameService: GameService,
    // tslint:disable-next-line: variable-name
    private _commonService: CommonService,
    private router: Router
  ) { }

  showWord() {
    this.resetSubScores();
    if (this.counter >= this.words.length) {
      this.gameDone = true;
      this.gameOn = false;
      this.endTime = (new Date()).getTime();
      this.remainingTime = Math.floor(this.gameTime - ((this.endTime - this.startTime) / 1000));
    } else {
      this.answerForm.reset();
      document.getElementById('answer').focus();
      const rand = Math.floor(Math.random() * ((this.words.length) - 0) + 0);
      if (this.words[rand].taken) {
        this.showWord();
      } else {
        this.currentWord = this.words[rand].word;
        this.words[rand].taken = true;
        this.counter += 1;
        switch (this.words[rand].difficulty) {
          case 'easy':
            this.subScore = 1;
            break;
          case 'medium':
            this.subScore = 2;
            break;
          case 'hard':
            this.subScore = 3;
            break;
        }
      }
    }
  }

  checkAnswer() {
    if (this.answerForm.value.answer === this.currentWord) {
      this.score += this.subScore;
    }
    this.showWord();
  }

  resetSubScores() {
    this.subScore = 0;
  }

  done() {
    this._commonService.quickPlay = false;
    this._commonService.chosenMode = 0;
    this._commonService.difficulty = '';
    this.score = 0;
    this.subScore = 0;
    this.gameTime = 0;
    this.startTime = 0;
    this.endTime = 0;
    this.remainingTime = 0;
    this.counter = 0;
    this.currentWord = '';

    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.words.length; i++) {
      if (this.words[i].taken) {
        this.words[i].taken = false;
      }
    }

    this._commonService.accessGame = false;
    this.router.navigate(['/']);
  }

  ngOnInit() {
    if (!this._commonService.accessGame) {
      this.router.navigate(['/']);
    }

    this.currentWord = '';
    this.score = 0;
    this.gameOn = true;
    this.gameOver = false;
    this.gameDone = false;
    this.gameTime = 10;
    this.counter = 0;
    this.startTime = 0;
    this.endTime = 0;
    this.remainingTime = 0;
    this.subScore = 0;

    if (this._commonService.quickPlay) {
      this.words = this.words.concat(this._gameService.wordsEasy.slice(0, 4));
      this.words = this.words.concat(this._gameService.wordsMedium.slice(0, 4));
      this.words = this.words.concat(this._gameService.wordsHard.slice(0, 2));
      this.gameTime = this._commonService.quickPlayDuration;
      this.startTime = (new Date()).getTime();
      this.answerForm = new FormGroup(
        {answer: new FormControl(
          null, Validators.required
        )}
      );
      this.showWord();
      setTimeout(() => {
        this.gameOver = false;
        this.remainingTime = 0;
      }, this.gameTime * 1000);
    } else {
      this.words = this._gameService.getWords(this._commonService.difficulty);
      this.gameTime = this._commonService.gameModes[this._commonService.chosenMode].time;
      this.startTime = (new Date()).getTime();
      this.answerForm = new FormGroup(
        {answer: new FormControl(
          null, Validators.required
        )}
      );
      this.showWord();
      setTimeout(() => {
        this.gameOver = false;
        this.remainingTime = 0;
      }, this.gameTime * 1000);
    }
  }

  ngOnDestroy() {}

}
