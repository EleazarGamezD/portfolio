import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailerComponent } from './mailer.component';

describe('MailerComponent', () => {
  let component: MailerComponent;
  let fixture: ComponentFixture<MailerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MailerComponent]
    });
    fixture = TestBed.createComponent(MailerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
