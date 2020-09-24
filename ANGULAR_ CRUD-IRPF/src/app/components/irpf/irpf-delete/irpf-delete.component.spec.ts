import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IrpfDeleteComponent } from './irpf-delete.component';

describe('IrpfDeleteComponent', () => {
  let component: IrpfDeleteComponent;
  let fixture: ComponentFixture<IrpfDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IrpfDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IrpfDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
