import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  onAddProject() {
    const options = document.getElementById('aside');
    options.innerHTML += "<input type='text'>";
  }
}
