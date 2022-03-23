import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent {
  user: any;

  constructor(private http: HttpClient) {
    this.http.get('https://randomuser.me/api').subscribe((res: any) => {
      this.user = res.results[0];
      console.log(this.user);
    });
  }
}
