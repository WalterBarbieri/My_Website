import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  private offset: number = 216;

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('click', ['$event'])
  onClick(event: Event) {
    const target = event.target as HTMLAnchorElement;
    if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
      event.preventDefault();
      const element = document.querySelector(target.getAttribute('href')!);
      if (element) {
        const offsetTop = element.getBoundingClientRect().top + window.scrollY - this.offset;
        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
      }
    }
  }

}
