import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  settingsForm: FormGroup;
  quickPlayDuration = 0;

  constructor(
    // tslint:disable-next-line: variable-name
    private _commonService: CommonService
  ) { }

  ngOnInit() {
    this.quickPlayDuration = this._commonService.quickPlayDuration;
    this.settingsForm = new FormGroup({
      quickPlayTime: new FormControl(null, [])
    });
  }

}
