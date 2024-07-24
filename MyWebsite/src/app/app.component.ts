import { Component, OnInit } from '@angular/core';
import { LanguageService } from './Service/language.service';
import { MetaService } from './Service/meta.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Walter Barbieri - Full Stack Web Developer';

  constructor(private meta: MetaService,
    private languageService: LanguageService) {}

    ngOnInit(): void {
      this.dynamicMetatags('app');

      this.languageService.language$.subscribe(() => {
          this.dynamicMetatags('app');
      });
    }

    dynamicMetatags(component: string) {
      this.meta.updateMetaTagsForComponents(component);
      this.meta.updateTitleForComponent(component);
  }
}
