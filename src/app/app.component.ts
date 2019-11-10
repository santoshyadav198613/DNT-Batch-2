import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {
  title = 'ecommerceapp';
  role = 'Users';

  ngDoCheck() {
    console.log('check event is called');
  }
}
