import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionSkillsetComponent } from './section-skillset.component';

describe('SectionSkillsetComponent', () => {
  let component: SectionSkillsetComponent;
  let fixture: ComponentFixture<SectionSkillsetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionSkillsetComponent]
    });
    fixture = TestBed.createComponent(SectionSkillsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
