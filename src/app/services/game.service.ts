import { Injectable } from '@angular/core';
import { WordModel } from '../models/word.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  wordsEasy: WordModel[] = [
    {
      word: 'cat',
      difficulty: 'easy',
      score: 1,
      taken: false
    },
    {
      word: 'bat',
      difficulty: 'easy',
      score: 1,
      taken: false
    },
    {
      word: 'tye',
      difficulty: 'easy',
      score: 1,
      taken: false
    },
    {
      word: 'few',
      difficulty: 'easy',
      score: 1,
      taken: false
    },
    {
      word: 'war',
      difficulty: 'easy',
      score: 1,
      taken: false
    },
    {
      word: 'sat',
      difficulty: 'easy',
      score: 1,
      taken: false
    },
    {
      word: 'run',
      difficulty: 'easy',
      score: 1,
      taken: false
    },
    {
      word: 'eye',
      difficulty: 'easy',
      score: 1,
      taken: false
    },
    {
      word: 'pin',
      difficulty: 'easy',
      score: 1,
      taken: false
    },
    {
      word: 'zip',
      difficulty: 'easy',
      score: 1,
      taken: false
    }
  ];

  wordsMedium: WordModel[] = [
    {
      word: 'beat',
      difficulty: 'medium',
      score: 2,
      taken: false
    },
    {
      word: 'pure',
      difficulty: 'medium',
      score: 2,
      taken: false
    },
    {
      word: 'rope',
      difficulty: 'medium',
      score: 2,
      taken: false
    },
    {
      word: 'year',
      difficulty: 'medium',
      score: 2,
      taken: false
    },
    {
      word: 'wear',
      difficulty: 'medium',
      score: 2,
      taken: false
    },
    {
      word: 'wheel',
      difficulty: 'medium',
      score: 2,
      taken: false
    },
    {
      word: 'rock',
      difficulty: 'medium',
      score: 2,
      taken: false
    },
    {
      word: 'tyre',
      difficulty: 'medium',
      score: 2,
      taken: false
    },
    {
      word: 'school',
      difficulty: 'medium',
      score: 2,
      taken: false
    },
    {
      word: 'green',
      difficulty: 'medium',
      score: 2,
      taken: false
    }
  ];

  wordsHard: WordModel[] = [
    {
      word: 'twenty',
      difficulty: 'hard',
      score: 3,
      taken: false
    },
    {
      word: 'proclaim',
      difficulty: 'hard',
      score: 3,
      taken: false
    },
    {
      word: 'fantastic',
      difficulty: 'hard',
      score: 3,
      taken: false
    },
    {
      word: 'duster',
      difficulty: 'hard',
      score: 3,
      taken: false
    },
    {
      word: 'personal',
      difficulty: 'hard',
      score: 3,
      taken: false
    },
    {
      word: 'gradual',
      difficulty: 'hard',
      score: 3,
      taken: false
    },
    {
      word: 'region',
      difficulty: 'hard',
      score: 3,
      taken: false
    },
    {
      word: 'medium',
      difficulty: 'hard',
      score: 3,
      taken: false
    },
    {
      word: 'proper',
      difficulty: 'hard',
      score: 3,
      taken: false
    },
    {
      word: 'vertigo',
      difficulty: 'hard',
      score: 3,
      taken: false
    }
  ];

  constructor(
    private http: HttpClient
  ) { }

  getWords(difficulty: string) {
    switch (difficulty) {
      case 'easy':
        return this.wordsEasy;
        break;
      case 'medium':
        return this.wordsMedium;
        break;
      case 'hard':
        return this.wordsHard;
        break;
    }
  }
}
