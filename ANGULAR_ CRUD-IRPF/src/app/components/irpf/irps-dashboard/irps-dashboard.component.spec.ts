import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IrpsDashboardComponent } from './irps-dashboard.component';

describe('IrpsDashboardComponent', () => {
  let component: IrpsDashboardComponent;
  let fixture: ComponentFixture<IrpsDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IrpsDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IrpsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
