import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenreSideBarComponent } from './genre-side-bar.component';

describe('GenreSideBarComponent', () => {
  let component: GenreSideBarComponent;
  let fixture: ComponentFixture<GenreSideBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenreSideBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenreSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
