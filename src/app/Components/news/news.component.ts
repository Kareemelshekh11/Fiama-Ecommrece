import { Component } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent {
  imgblog1="assets/images/blog1.jpg";
  imgblog2="assets/images/blog2.jpg";
  imgblog3="assets/images/blog3.jpg";
  imgblog4="assets/images/blog4.jpg";
  imgblog5="assets/images/blog5.jpg";
  imgblog6="assets/images/blog6.jpg";
  imgblog7="assets/images/blog7.jpg";
  imgblog8="assets/images/blog8.jpg";
  imgblog9="assets/images/blog9.jpg";

  slides=[
    {Image:this.imgblog1},
    {Image:this.imgblog2},
    {Image:this.imgblog3},
    {Image:this.imgblog4},
    {Image:this.imgblog5},
    {Image:this.imgblog6},
    {Image:this.imgblog7},
    {Image:this.imgblog8},
    {Image:this.imgblog9},
    {Image:this.imgblog5},
  ]

  Recents=[
    {Image:this.imgblog1},
    {Image:this.imgblog2},
    {Image:this.imgblog3},
    {Image:this.imgblog4},
  ]
}
