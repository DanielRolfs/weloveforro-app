import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanceMenueComponent } from './dance-menue.component';

describe('DanceMenueComponent', () => {
  let component: DanceMenueComponent;
  let fixture: ComponentFixture<DanceMenueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DanceMenueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DanceMenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
