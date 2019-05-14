import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  quickPlay = false;
  gameModes = [
    {
      id: '1',
      mode: '30 seconds',
      time: 30
    },
    {
      id: '2',
      mode: '1 minutes',
      time: 60
    },
    {
      id: '3',
      mode: '2 minutes',
      time: 120
    }
  ];
  chosenMode = 0;
  difficulty = '';
  accessGame = false;
  quickPlayDuration = 90;

  constructor() { }
}
