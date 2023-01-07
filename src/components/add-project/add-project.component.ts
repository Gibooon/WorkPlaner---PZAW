import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css'],
})
export class AddProjectComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  onAddProject() {
    //funkcja dodająca projekt
    const cont = document.getElementById('content');
    const name = document.getElementById('name') as HTMLInputElement;
    const color = document.getElementById('color') as HTMLInputElement;
    const data = document.getElementById('date') as HTMLInputElement;
    const desc = document.getElementById('description') as HTMLInputElement;
    cont.innerHTML += `<div  class="projects" style='height:99.5%; width:25%; background-color:${color.value}; border:2px black solid;'>
      Nazwa projektu: ${name.value}
      <hr style='font-weight:bold;'>
      Deadline: ${data.value}
      <hr style='font-weight:bold;'>
      Opis: ${desc.value}
      </div>`;
  }
}