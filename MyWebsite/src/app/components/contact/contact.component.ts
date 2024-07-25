import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/Service/language.service';
import { MetaService } from 'src/app/Service/meta.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  constructor(
    private meta: MetaService,
    private languageService: LanguageService
  ) {}

  ngOnInit(): void {
    this.dynamicMetatags('contact');

    this.languageService.language$.subscribe(() => {
      this.dynamicMetatags('contact');
    });
  }
  dynamicMetatags(component: string) {
    this.meta.updateMetaTagsForComponents(component);
    this.meta.updateTitleForComponent(component);
  }
}
