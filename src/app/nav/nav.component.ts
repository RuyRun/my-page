import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  linkItems = [
    {
      name: 'About Me',
      section: 'about',
      class: ''
    },
    {
      name: 'Skillset',
      section: 'skillset',
      class: ''
    },
    {
      name: 'My Work',
      section: 'myWork',
      class: ''
    },
  ]
  selectedLink: string | null = null;
  open:boolean =false
  public navigateToSection(section: string) {
    this.selectedLink = section;
    console.log(this.selectedLink);
    
    window.location.hash = '';
    window.location.hash = section;
  }

  openMenu() {
    this.open = !this.open
  }

  setActiveClass() {

  }
}
