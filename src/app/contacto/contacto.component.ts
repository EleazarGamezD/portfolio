import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailService } from './service/contacto.service';
import Swal from 'sweetalert2'
import { environment } from '../environments/environment';
@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent {
  token: string | undefined;
  contactForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private emailService: EmailService
  ) {
    this.token = undefined;
    this.contactForm = this.fb.group({
      name: [null, Validators.required],
      contactEmail: [null, [Validators.required, Validators.email]],
      subject: [null, Validators.required],
      message: [null, Validators.required],
      recaptcha: [null, Validators.required],
    });
  }
  siteKey = environment.recaptcha.siteKey;
  resolved(captchaResponse: string) {
    console.debug(`Token [${this.token}] generated`);
    console.log(`Resolved captcha with response: ${captchaResponse}`);
  }
  onSubmit() {
    if (this.contactForm.valid) {
      const formData = this.contactForm.value;
      this.emailService.sendEmail(formData).subscribe(
        response => {
          console.log('Server response:', response);
          this.contactForm.reset();
          Swal.fire({
            icon: 'success',
            title: 'notification',
            text: `Email Enviado, Gracias!`,
          });
        },
        error => {
          console.error('Error sending email:', error);
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Email no enviado',
          });
        }
      );
    }
  }



}


