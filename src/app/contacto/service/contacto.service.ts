/* eslint-disable @typescript-eslint/no-explicit-any */

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private apiUrl = 'https://mailer-pf.vercel.app/send'; // Reemplaza con tu URL de endpoint

  constructor(private http: HttpClient) { }

  sendEmail(data: any): Observable<any> {
    try {
      return this.http.post<any>(this.apiUrl, data);

    } catch (error) {
      console.error('Error en la solicitud HTTP:', error);
      throw error;
    }
  }
}

