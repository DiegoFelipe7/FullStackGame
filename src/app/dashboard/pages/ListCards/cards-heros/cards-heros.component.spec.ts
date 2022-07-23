import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsHerosComponent } from './cards-heros.component';

describe('CardsHerosComponent', () => {
  let component: CardsHerosComponent;
  let fixture: ComponentFixture<CardsHerosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsHerosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsHerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
