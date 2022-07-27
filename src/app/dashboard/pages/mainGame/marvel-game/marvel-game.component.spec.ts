import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarvelGameComponent } from './marvel-game.component';

describe('MarvelGameComponent', () => {
  let component: MarvelGameComponent;
  let fixture: ComponentFixture<MarvelGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarvelGameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarvelGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
