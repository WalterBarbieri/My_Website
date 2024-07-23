import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/Service/language.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit, AfterViewInit {

  isOpen: boolean = false;

  isLargeScreen!: boolean;

  selectedLanguage!: string;

  constructor(private elementRef: ElementRef, private languageService: LanguageService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.languageService.language$.subscribe(language => {
      this.selectedLanguage = language;
    });

    document.addEventListener('click', this.onClickOutside.bind(this))

    this.checkScreenSize();


  }
  ngAfterViewInit(): void {
    this.selectedLanguage = this.languageService.getLanguage();
    this.cdr.detectChanges();


  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.checkScreenSize();
  }

  private checkScreenSize(): void {
    this.isLargeScreen = window.innerWidth >= 992;
  }
  onLanguageChange(event: Event): void {
    const language = (event.target as HTMLSelectElement).value;
    this.languageService.setLanguage(language);
  }

  toggleHamburgerMenu(){
    if (window.innerWidth <= 991) {
        this.isOpen = !this.isOpen;
    }
    if (!this.isOpen) {
        document.querySelector('.navbar-collapse.show')?.classList.remove('show');
        const dropdownMenu = document.querySelector('.dropdown-menu.show');
      if (dropdownMenu) {
        dropdownMenu.classList.remove('show');
      }
    }

  }

  onClickOutside(event: Event) {
    if(!this.elementRef.nativeElement.contains(event.target)){
        if(this.isOpen) {
            this.toggleHamburgerMenu();
        }
    }
  }
}
