// scroll.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  private activeSectionSubject = new BehaviorSubject<string>('');

  setActiveSection(section: string) {
    this.activeSectionSubject.next(section);
  }

  getActiveSection(): Observable<string> {
    return this.activeSectionSubject.asObservable();
  }
}
