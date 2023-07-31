import { Component } from '@angular/core';

@Component({
  selector: 'app-start-section',
  templateUrl: './start-section.component.html',
  styleUrls: ['./start-section.component.scss']
})
export class StartSectionComponent {
  public navigateToSection(section: string) {
    window.location.hash = '';
    window.location.hash = section;
  }
}
