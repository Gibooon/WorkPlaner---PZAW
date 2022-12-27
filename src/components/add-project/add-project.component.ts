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
    let cont, Name, Color: string;
    let Data: Date;
    cont = document.getElementById('content');
    Name = document.getElementById('name');
    //Color = document.getElementById('color');
    //Data = document.getElementById('date');
    cont.innerHTML = +Name.value;
  }
}
