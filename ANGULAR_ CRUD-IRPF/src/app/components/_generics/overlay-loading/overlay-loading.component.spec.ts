import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlayLoadingComponent } from './overlay-loading.component';

describe('OverlayLoadingComponent', () => {
  let component: OverlayLoadingComponent;
  let fixture: ComponentFixture<OverlayLoadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverlayLoadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverlayLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
