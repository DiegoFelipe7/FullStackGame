import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsInGameComponent } from './cards-in-game.component';

describe('CardsInGameComponent', () => {
  let component: CardsInGameComponent;
  let fixture: ComponentFixture<CardsInGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsInGameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsInGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
