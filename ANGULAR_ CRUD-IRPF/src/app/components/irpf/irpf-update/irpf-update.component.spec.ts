import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IrpfUpdateComponent } from './irpf-update.component';

describe('IrpfUpdateComponent', () => {
  let component: IrpfUpdateComponent;
  let fixture: ComponentFixture<IrpfUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IrpfUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IrpfUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
