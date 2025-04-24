import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDirectionsComponent } from './project-directions.component';

describe('ProjectDirectionsComponent', () => {
  let component: ProjectDirectionsComponent;
  let fixture: ComponentFixture<ProjectDirectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectDirectionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectDirectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
