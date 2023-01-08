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
    const navDiv = document.getElementById('navbar'); //stala z przypisaną wartością diva o id 'navbar'
    const loginBtn = document.getElementById('login_btn'); //stala z przypisaną wartością przycisku logowania
    const footDiv = document.getElementById('footer'); //stala z przypisaną wartością diva o id 'footer'
    const optionsDiv = document.getElementById('aside'); //stala z przypisaną wartością diva o id 'aside'
    const contentDiv = document.getElementById('content'); //stala z przypisaną wartością diva o id 'content'

    if (this.themeStatus) {
      //if sprawdzający czy zmienna themeStatus jest prawdziwa
      this.themeStatus = false;
      this.themeSymbol = '☾';

      navDiv.style.backgroundColor = 'cornflowerblue';
      navDiv.style.color = 'black';

      themeBtn.style.backgroundColor = 'antiquewhite';
      themeBtn.style.color = 'black';

      loginBtn.style.backgroundColor = 'antiquewhite';
      loginBtn.style.color = 'black';

      footDiv.style.backgroundColor = 'cornflowerblue';
      footDiv.style.color = 'black';

      optionsDiv.style.backgroundColor = '#60a6bc';
      optionsDiv.style.color = 'black';

      contentDiv.style.backgroundColor = '#24468e';
      contentDiv.style.color = 'black';
    } else {
      //else w którym polecenia będą wykonywane, gdy zmienna themeStatus będzie faszywa
      this.themeStatus = true;
      this.themeSymbol = '☼';

      navDiv.style.backgroundColor = 'dimgray';
      navDiv.style.color = 'white';

      themeBtn.style.backgroundColor = 'gray';
      themeBtn.style.color = ' white';

      loginBtn.style.backgroundColor = 'gray';
      loginBtn.style.color = 'white';

      footDiv.style.backgroundColor = 'dimgray';
      footDiv.style.color = 'white';

      optionsDiv.style.backgroundColor = '#666464';
      optionsDiv.style.color = 'white';

      contentDiv.style.backgroundColor = '#434343';
      contentDiv.style.color = 'black';
    }
  }
  onLogIn() {
    alert('Panel logowania w budowie, prosimy o cierpliwośc :)');
  }
}
