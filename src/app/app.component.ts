import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{
  title = 'shop';

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    // this.http.get('http://swapi.dev/api/planets/1/')
    //   .subscribe(res => console.log(res));
  }
}
