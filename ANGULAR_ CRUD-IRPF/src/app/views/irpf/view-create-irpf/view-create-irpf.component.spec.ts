import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCreateIrpfComponent } from './view-create-irpf.component';

describe('ViewCreateIrpfComponent', () => {
  let component: ViewCreateIrpfComponent;
  let fixture: ComponentFixture<ViewCreateIrpfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCreateIrpfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCreateIrpfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
