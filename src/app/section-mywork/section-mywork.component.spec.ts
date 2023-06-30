import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionMyworkComponent } from './section-mywork.component';

describe('SectionMyworkComponent', () => {
  let component: SectionMyworkComponent;
  let fixture: ComponentFixture<SectionMyworkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionMyworkComponent]
    });
    fixture = TestBed.createComponent(SectionMyworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
