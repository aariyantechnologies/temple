import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import lgZoom from 'lightgallery/plugins/zoom';
import { BeforeSlideDetail } from 'lightgallery/lg-events';

@Component({
  selector: 'app-political',
  templateUrl: './political.component.html',
  styleUrls: ['./political.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PoliticalComponent implements OnInit {

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



