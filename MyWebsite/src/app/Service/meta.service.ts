import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from './language.service';

@Injectable({
  providedIn: 'root',
})
export class MetaService {
  constructor(
    private meta: Meta,
    private translate: TranslateService,
    private titleService: Title,
    private languageService: LanguageService
  ) {}

  updateMetaTagsForComponents(component: string) {
    this.translate
      .get([
        `meta.${component}.description`,
        `meta.${component}.keywords`,
        `meta.${component}.author`,
        `meta.${component}.ogTitle`,
        `meta.${component}.ogDescription`,
        `meta.${component}.ogImage`,
        `meta.${component}.ogUrl`,
        `meta.${component}.ogType`,
        `meta.${component}.twitterCard`,
        `meta.${component}.twitterTitle`,
        `meta.${component}.twitterDescription`,
        `meta.${component}.twitterImage`,
      ])
      .subscribe((translations) => {
        this.meta.updateTag({
          name: 'description',
          content: translations[`meta.${component}.description`],
        });
        this.meta.updateTag({
          name: 'keywords',
          content: translations[`meta.${component}.keywords`],
        });
        this.meta.updateTag({
          name: 'author',
          content: translations[`meta.${component}.author`],
        });
        this.meta.updateTag({
          property: 'og:title',
          content: translations[`meta.${component}.ogTitle`],
        });
        this.meta.updateTag({
          property: 'og:description',
          content: translations[`meta.${component}.ogDescription`],
        });
        this.meta.updateTag({
          property: 'og:image',
          content: translations[`meta.${component}.ogImage`],
        });
        this.meta.updateTag({
          property: 'og:url',
          content: translations[`meta.${component}.ogUrl`],
        });
        this.meta.updateTag({
          property: 'og:type',
          content: translations[`meta.${component}.ogType`],
        });
        this.meta.updateTag({
          name: 'twitter:card',
          content: translations[`meta.${component}.twitterCard`],
        });
        this.meta.updateTag({
          property: 'twitter:title',
          content: translations[`meta.${component}.twitterTitle`],
        });
        this.meta.updateTag({
          property: 'twitter:description',
          content: translations[`meta.${component}.twitterDescription`],
        });
        this.meta.updateTag({
          property: 'twitter:image',
          content: translations[`meta.${component}.twitterImage`],
        });
      });
  }
  updateTitleForComponent(component: string): void {
    this.languageService
      .getTranslatedTitleForComponent(component)
      .subscribe((translatedTitle) => {
        this.titleService.setTitle(translatedTitle);
      });
  }
}
