import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForroMainComponent } from './forro-main.component';

describe('ForroMainComponent', () => {
  let component: ForroMainComponent;
  let fixture: ComponentFixture<ForroMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForroMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForroMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
