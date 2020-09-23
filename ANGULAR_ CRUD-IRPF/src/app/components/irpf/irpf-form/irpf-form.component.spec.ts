import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IrpfFormComponent } from './irpf-form.component';

describe('IrpfFormComponent', () => {
  let component: IrpfFormComponent;
  let fixture: ComponentFixture<IrpfFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IrpfFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IrpfFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
