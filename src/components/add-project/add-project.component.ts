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
    const cont = document.getElementById('content');
    const Name = document.getElementById('name') as HTMLInputElement;
    const Color = document.getElementById('color') as HTMLInputElement;
    const Data = document.getElementById('date') as HTMLInputElement;
    const Desc = document.getElementById('description') as HTMLInputElement;
    cont.innerHTML += `<div  class="projects" style='height:100%; width:25%; background-color:${Color.value}; border:2px black solid;'>
      Nazwa projektu: ${Name.value}
      <hr>
      Deadline: ${Data.value}
      <hr>
      Opis: ${Desc.value}
      </div>`;
  }
}
