import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TacticBoardComponent } from './tactic-board.component';

describe('TacticBoardComponent', () => {
  let component: TacticBoardComponent;
  let fixture: ComponentFixture<TacticBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TacticBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TacticBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
