import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SendMailDialogComponent } from '../send-mail-dialog/send-mail-dialog.component';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-section-contact',
  templateUrl: './section-contact.component.html',
  styleUrls: ['./section-contact.component.scss']
})
export class SectionContactComponent {
  constructor(public dialog: MatDialog, private httpClient: HttpClient) { }
  @ViewChild('nameField') nameField!: ElementRef;
  @ViewChild('emailField') emailField!: ElementRef;
  @ViewChild('messageField') messageField!: ElementRef;
  @ViewChild('nameFieldBox') nameFieldBox!: any;
  async sendMail() {
    let nameField = this.nameField.nativeElement;
    let emailField = this.emailField.nativeElement;
    let messageField = this.messageField.nativeElement;

    // nameField.disabled = true;
    nameField.value = '';
    let fd = new FormData();
    fd.append('name', nameField.value + ' Mail: ' + emailField.value);
    fd.append('message', messageField.value);
    this.sendMethod(fd)
  }
  openDialog(status:boolean) {
    const dialogRef = this.dialog.open(SendMailDialogComponent, {
      data: {
        status: status,
      }
    });

    dialogRef.afterClosed().subscribe(() => {
      this.clearInputFields()
    });
  }
  clearInputFields() {
    this.nameField.nativeElement.value = '';
    this.emailField.nativeElement.value = '';
    this.messageField.nativeElement.value = '';
  }

  async sendMethod(fd: FormData) {
    try {
      const response = await fetch('https://kevin-wyatt.developerakademie.net/send_mail/send_mail.php', {
        method: 'POST',
        body: fd
      });

      if (!response.ok) {
        throw new Error('Fehler beim Senden der Anfrage');
      }
      this.openDialog(true);

    } catch (error) {
      this.openDialog(false);
    }
  }

}
