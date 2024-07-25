import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private validLanguages = ['it', 'en'];
  private currentLanguageSubject = new BehaviorSubject<string>('en');
  public language$: Observable<string> =
    this.currentLanguageSubject.asObservable();

  constructor(private translate: TranslateService) {
    const storedLanguage = this.getLanguage();
    this.translate.setDefaultLang(storedLanguage);
    this.translate.use(storedLanguage);
    this.currentLanguageSubject.next(storedLanguage);
  }

  setLanguage(language: string) {
    if (this.validLanguages.includes(language)) {
      localStorage.setItem('appLanguage', language);
      this.translate.use(language);
      this.currentLanguageSubject.next(language);
    }
  }

  getLanguage(): string {
    const storedLanguage = localStorage.getItem('appLanguage');
    if (storedLanguage && this.validLanguages.includes(storedLanguage)) {
      return storedLanguage;
    }
    return 'en';
  }

  getTranslatedTitleForComponent(component: string): Observable<string> {
    return this.translate.get(`title.${component}`);
}
}
