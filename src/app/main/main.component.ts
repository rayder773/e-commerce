import { Component, OnInit } from '@angular/core';
import {CommonServices} from '../shared/_services/common.services';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  constructor(
    public commonService: CommonServices
  ) {}

  ngOnInit(): void {
  }
}
