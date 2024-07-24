import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/Service/language.service';
import { MetaService } from 'src/app/Service/meta.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private meta: MetaService,
    private languageService: LanguageService) { }

  ngOnInit(): void {
    this.dynamicMetatags('home');

      this.languageService.language$.subscribe(() => {
          this.dynamicMetatags('home');
      });
  }

  dynamicMetatags(component: string) {
    this.meta.updateMetaTagsForComponents(component);
    this.meta.updateTitleForComponent(component);
}

}
