import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpBusinessOwnerComponent } from './sign-up-business-owner.component';

describe('SignUpBusinessOwnerComponent', () => {
  let component: SignUpBusinessOwnerComponent;
  let fixture: ComponentFixture<SignUpBusinessOwnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignUpBusinessOwnerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignUpBusinessOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
