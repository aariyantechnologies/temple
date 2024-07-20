import { Component, HostListener } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = "Sri Dakshina Ayodhya Kodandarama Temple";
  isShowTop: boolean = false;
  topPosToStartShowing = 100;
  menuText: boolean = false;
  constructor() {}
  
  @HostListener('window:scroll')
  checkScroll() {
      
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    
    if (scrollPosition >= this.topPosToStartShowing) {
      this.isShowTop = true;
    } else {
      this.isShowTop = false;
    }
  }
  scrollTo() {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
}
}