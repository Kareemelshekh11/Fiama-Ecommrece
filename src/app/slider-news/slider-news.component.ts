import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-slider-news',
  templateUrl: './slider-news.component.html',
  styleUrls: ['./slider-news.component.scss']
})
export class SliderNewsComponent {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    margin:35,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 2
      },
      940: {
        items: 3
      }
    },
  }

  imgblog1="assets/images/blog1.jpg";
  imgblog2="assets/images/blog2.jpg";
  imgblog3="assets/images/blog3.jpg";
  imgblog4="assets/images/blog4.jpg";
  imgblog5="assets/images/blog5.jpg";

  slides=[
    {Image:this.imgblog1},
    {Image:this.imgblog2},
    {Image:this.imgblog3},
    {Image:this.imgblog4},
    {Image:this.imgblog5},
  ]
}
