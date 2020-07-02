import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixturesTableComponent } from './fixtures-table.component';

describe('FixturesTableComponent', () => {
  let component: FixturesTableComponent;
  let fixture: ComponentFixture<FixturesTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FixturesTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixturesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
