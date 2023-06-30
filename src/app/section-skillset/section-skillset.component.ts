import { Component } from '@angular/core';

@Component({
  selector: 'app-section-skillset',
  templateUrl: './section-skillset.component.html',
  styleUrls: ['./section-skillset.component.scss']
})
export class SectionSkillsetComponent {
  skillset = [
    {
      skill: 'Angular',
      icon: 'angular.svg'
    },
    {
      skill: 'TypeScript',
      icon: 'typescript.svg'
    },
    {
      skill: 'JavaScript',
      icon: 'javascript.svg'
    },
    {
      skill: 'HTML',
      icon: 'html.svg'
    },
    {
      skill: 'Scrum',
      icon: 'scrum.svg'
    },
    {
      skill: 'Firebase',
      icon: 'firebase.svg'
    },
    {
      skill: 'GIT',
      icon: 'git.svg'
    },
    {
      skill: 'CSS',
      icon: 'css.svg'
    },
    {
      skill: 'Rest-Api',
      icon: 'api.svg'
    },
    {
      skill: 'Material Design',
      icon: 'mat-design.svg'
    },
  ]
}
