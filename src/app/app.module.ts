import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartSectionComponent } from './start-section/start-section.component';
import { NavComponent } from './nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SectionAboutComponent } from './section-about/section-about.component';
import { SectionSkillsetComponent } from './section-skillset/section-skillset.component';
import { SectionMyworkComponent } from './section-mywork/section-mywork.component';
import { WorkComponent } from './work/work.component';
import { SectionContactComponent } from './section-contact/section-contact.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { SendMailDialogComponent } from './send-mail-dialog/send-mail-dialog.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { ImpressumComponent } from './impressum/impressum.component';

@NgModule({
  declarations: [
    AppComponent,
    StartSectionComponent,
    NavComponent,
    SectionAboutComponent,
    SectionSkillsetComponent,
    SectionMyworkComponent,
    WorkComponent,
    SectionContactComponent,
    FooterComponent,
    SendMailDialogComponent,
    ImpressumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    MatDialogModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
