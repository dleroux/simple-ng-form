import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.html',
  styles: [
    require('normalize.css/normalize.css'),
    require('./typography.css')
  ]
})
export class AppComponent {
  title = 'app works!';
}
