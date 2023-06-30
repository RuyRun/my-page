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

@NgModule({
  declarations: [
    AppComponent,
    StartSectionComponent,
    NavComponent,
    SectionAboutComponent,
    SectionSkillsetComponent,
    SectionMyworkComponent,
    WorkComponent,
    SectionContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
