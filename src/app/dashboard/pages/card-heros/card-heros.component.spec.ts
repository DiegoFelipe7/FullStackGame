import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardHerosComponent } from './card-heros.component';

describe('CardHerosComponent', () => {
  let component: CardHerosComponent;
  let fixture: ComponentFixture<CardHerosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardHerosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardHerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
