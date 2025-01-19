import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealnavComponent } from './mealnav.component';

describe('MealnavComponent', () => {
  let component: MealnavComponent;
  let fixture: ComponentFixture<MealnavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MealnavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MealnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
