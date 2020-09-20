import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterIrpfComponent } from './register-irpf.component';

describe('RegisterIrpfComponent', () => {
  let component: RegisterIrpfComponent;
  let fixture: ComponentFixture<RegisterIrpfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterIrpfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterIrpfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
