import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IrpfReadComponent } from './irpf-read.component';

describe('IrpfReadComponent', () => {
  let component: IrpfReadComponent;
  let fixture: ComponentFixture<IrpfReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IrpfReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IrpfReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
