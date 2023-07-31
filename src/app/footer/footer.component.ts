import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ImpressumComponent } from '../impressum/impressum.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  constructor(public dialog: MatDialog) { }
  openDialog(): void {
    this.dialog.open(ImpressumComponent, {});
  }

  public navigateToSection(section: string) {
    window.location.hash = '';
    window.location.hash = section;
  }
}
