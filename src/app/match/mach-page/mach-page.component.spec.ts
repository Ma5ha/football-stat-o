import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MachPageComponent } from './mach-page.component';

describe('MachPageComponent', () => {
  let component: MachPageComponent;
  let fixture: ComponentFixture<MachPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MachPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MachPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
