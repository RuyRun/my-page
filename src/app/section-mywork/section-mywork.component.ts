import { Component } from '@angular/core';

@Component({
  selector: 'app-section-mywork',
  templateUrl: './section-mywork.component.html',
  styleUrls: ['./section-mywork.component.scss']
})
export class SectionMyworkComponent {
  myworks = [
    {
      name: 'Join',
      image: 'join-test.png',
      website: '#',
      github: '#',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      languages: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Firebase']
    },
    {
      name: 'Game',
      image: 'join-test.png',
      website: '#',
      github: '#',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      languages: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Firebase']
    },
    {
      name: 'Pokedex',
      image: 'join-test.png',
      website: '#',
      github: '#',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      languages: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Firebase']
    },
    {
      name: 'My Website',
      image: 'join-test.png',
      website: '#',
      github: '#',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      languages: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Firebase']
    },
  ]
}
