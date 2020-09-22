import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewIrpfsComponent } from './view-irpfs.component';

describe('ViewIrpfsComponent', () => {
  let component: ViewIrpfsComponent;
  let fixture: ComponentFixture<ViewIrpfsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewIrpfsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewIrpfsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
