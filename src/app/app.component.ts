import {Component, OnInit} from '@angular/core';
import {CommonServices} from './shared/_services/common.services';
import {UiStyleToggleService} from './shared/_services/ui-style-toggle.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{
  title = 'shop';

  constructor(
    public commonService: CommonServices,
    private uiStyleToggleService: UiStyleToggleService
  ) {}

  ngOnInit(): void {
    // this.http.get('http://swapi.dev/api/planets/1/')
    //   .subscribe(res => console.log(res));
  }

  // toggleTheme() {
  //   this.uiStyleToggleService.toggle();
  // }
}
