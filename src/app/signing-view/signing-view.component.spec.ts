import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigningViewComponent } from './signing-view.component';

describe('SigningViewComponent', () => {
  let component: SigningViewComponent;
  let fixture: ComponentFixture<SigningViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SigningViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SigningViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
