import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  themeStatus = false; //false - light theme ; true - dark theme
  themeSymbol = '☾';

  constructor() {}

  ngOnInit() {}

  onChangeTheme() {
    //funkcja zmieniająca motyw strony  (wersja wstępna)
    const themeBtn = document.getElementById('light_dark_theme_btn'); //staa z przypisaną wartością przycisku motywu
    const nav = document.getElementById('navbar'); //stala z przypisaną wartością diva o id navbar
    const loginBtn = document.getElementById('login_btn'); //stala z przypisaną wartością przycisku logowania

    if (this.themeStatus) {
      //if sprawdzający czy zmienna themeStatus jest prawdziwa
      this.themeStatus = false;
      this.themeSymbol = '☾';

      nav.style.backgroundColor = 'limegreen';
      nav.style.color = 'black';

      themeBtn.style.backgroundColor = 'antiquewhite';
      themeBtn.style.color = 'black';

      loginBtn.style.backgroundColor = 'antiquewhite';
      loginBtn.style.color = 'black';
    } else {
      //else w którym polecenia będą wykonywane, gdy zmienna themeStatus będzie faszywa
      this.themeStatus = true;
      this.themeSymbol = '☼';

      nav.style.backgroundColor = 'dimgray';
      nav.style.color = 'white';

      themeBtn.style.backgroundColor = 'gray';
      themeBtn.style.color = ' white';

      loginBtn.style.backgroundColor = 'gray';
      loginBtn.style.color = 'white';
    }
  }
}
