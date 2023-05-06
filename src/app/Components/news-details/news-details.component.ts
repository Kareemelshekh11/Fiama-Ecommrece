import { Component } from '@angular/core';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.scss']
})
export class NewsDetailsComponent {
  imgblog1="assets/images/blog1.jpg";
  imgblog2="assets/images/blog2.jpg";
  imgblog3="assets/images/blog3.jpg";
  imgblog4="assets/images/blog4.jpg";

  Recents=[
    {Image:this.imgblog1},
    {Image:this.imgblog2},
    {Image:this.imgblog3},
    {Image:this.imgblog4},
  ]
}
