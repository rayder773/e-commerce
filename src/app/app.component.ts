import {Component, OnInit} from '@angular/core';
import {CommonServices} from './shared/_services/common.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{
  title = 'shop';

  commonService: CommonServices;

  constructor(commonService: CommonServices) {
    this.commonService = commonService;
  }

  ngOnInit(): void {
    // this.http.get('http://swapi.dev/api/planets/1/')
    //   .subscribe(res => console.log(res));
  }
}
