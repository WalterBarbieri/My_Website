import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/Service/language.service';
import { MetaService } from 'src/app/Service/meta.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit {
  constructor(
    private meta: MetaService,
    private languageService: LanguageService
  ) {}

  ngOnInit(): void {
    this.dynamicMetatags('portfolio');

    this.languageService.language$.subscribe(() => {
      this.dynamicMetatags('portfolio');
    });
  }

  dynamicMetatags(component: string) {
    this.meta.updateMetaTagsForComponents(component);
    this.meta.updateTitleForComponent(component);
  }
}
