import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import lgZoom from 'lightgallery/plugins/zoom';
import { BeforeSlideDetail } from 'lightgallery/lg-events';

@Component({
  selector: 'app-inauguration-pics',
  templateUrl: './inauguration-pics.component.html',
  styleUrls: ['./inauguration-pics.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class InaugurationPicsComponent implements OnInit {

  settings = {
    counter: false,
    plugins: [lgZoom]
  };
  onBeforeSlide = (detail: BeforeSlideDetail): void => {
    const { index, prevIndex } = detail;
    console.log(index, prevIndex);
  };

  constructor() { }

  ngOnInit(): void {
  }

}


