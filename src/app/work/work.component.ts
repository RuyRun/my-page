import { Component, Input, OnInit } from '@angular/core';
import { Works } from '../interfaces/works';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})

export class WorkComponent implements OnInit {
  ngOnInit(): void {

  }
  @Input() work!:Works;
  @Input() swapItems: boolean = false;
}
