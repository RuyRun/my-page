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
      image: '/work/join.png',
      website: 'https://join.kevinwyatt.de',
      github: 'https://github.com/RuyRun/Join',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      languages: ['JavaScript', 'HTML', 'CSS']
    },
    {
      name: 'Alien-Zapper',
      image: '/work/alien-zapper.png',
      website: 'https://alien-zapper.kevinwyatt.de/',
      github: 'https://github.com/RuyRun/JSGame',
      description: 'The objective of the game is to shoot down as many aliens as possible. Control your character and use your weapon to fight against approaching aliens and collect points. Be careful not to get hit by the aliens, as it will result in a loss of life. Try to achieve a high score before your health runs out.',
      languages: ['JavaScript', 'HTML', 'CSS']
    },
    {
      name: 'Pokedex',
      image: '/work/pokedex.png',
      website: 'http://pokedex.kevinwyatt.de/',
      github: 'https://github.com/RuyRun/pokedex',
      description: 'The Pokédex is an electronic device that provides information about various species of Pokémon and their characteristics.',
      languages: ['JavaScript', 'HTML', 'CSS']
    },
    {
      name: 'My Website',
      image: '/work/myWebseite.png',
      website: 'https://www.kevinwyatt.de/',
      github: 'https://github.com/RuyRun/my-page',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      languages: ['Angular', 'TypeScript', 'HTML', 'SCSS']
    },
  ]
}
