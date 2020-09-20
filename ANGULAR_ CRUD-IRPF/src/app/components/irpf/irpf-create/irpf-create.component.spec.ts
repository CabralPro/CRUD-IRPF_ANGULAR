import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IrpfCreateComponent } from './irpf-create.component';

describe('IrpfCreateComponent', () => {
  let component: IrpfCreateComponent;
  let fixture: ComponentFixture<IrpfCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IrpfCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IrpfCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
