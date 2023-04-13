import { Component , OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-shop-details',
  templateUrl: './shop-details.component.html',
  styleUrls: ['./shop-details.component.scss'],
  
})
export class ShopDetailsComponent implements OnInit{

  constructor(){}

  config: SwiperOptions = {
    direction: "vertical",
    slidesPerView:4
  };

  ngOnInit(): void {


    const Img1 = document.querySelector("#img1") as HTMLElement;
    const Img2 = document.querySelector("#img2") as HTMLElement;
    const Img3 = document.querySelector("#img3") as HTMLElement;
    const Img4 = document.querySelector("#img4") as HTMLElement;
    const Img5 = document.querySelector("#img5") as HTMLElement;
    const Img6 = document.querySelector("#img6") as HTMLElement;
    const Img7 = document.querySelector("#img7") as HTMLElement;
    const ImgL1 = document.querySelector("#imgl1") as HTMLElement;
    const ImgL2 = document.querySelector("#imgl2") as HTMLElement;
    const ImgL3 = document.querySelector("#imgl3") as HTMLElement;
    const ImgL4 = document.querySelector("#imgl4") as HTMLElement;
    const ImgL5 = document.querySelector("#imgl5") as HTMLElement;
    const ImgL6 = document.querySelector("#imgl6") as HTMLElement;
    const ImgL7 = document.querySelector("#imgl7") as HTMLElement;
    

    
    Img1.onclick = function(){
      ImgL1?.classList.add("active","show");
      ImgL2?.classList.remove("active","show");
      ImgL3?.classList.remove("active","show");
      ImgL4?.classList.remove("active","show");
      ImgL5?.classList.remove("active","show");
      ImgL6?.classList.remove("active","show");
      ImgL7?.classList.remove("active","show");
    }

    Img2.onclick = function(){
      ImgL1?.classList.remove("active","show");
      ImgL2?.classList.add("active","show");
      ImgL3?.classList.remove("active","show");
      ImgL4?.classList.remove("active","show");
      ImgL5?.classList.remove("active","show");
      ImgL6?.classList.remove("active","show");
      ImgL7?.classList.remove("active","show");
    }

    Img3.onclick = function(){
      ImgL1?.classList.remove("active","show");
      ImgL2?.classList.remove("active","show");
      ImgL3?.classList.add("active","show");
      ImgL4?.classList.remove("active","show");
      ImgL5?.classList.remove("active","show");
      ImgL6?.classList.remove("active","show");
      ImgL7?.classList.remove("active","show");
    }

    Img4.onclick = function(){
      ImgL1?.classList.remove("active","show");
      ImgL2?.classList.remove("active","show");
      ImgL3?.classList.remove("active","show");
      ImgL4?.classList.add("active","show");
      ImgL5?.classList.remove("active","show");
      ImgL6?.classList.remove("active","show");
      ImgL7?.classList.remove("active","show");
    }

    Img5.onclick = function(){
      ImgL1?.classList.remove("active","show");
      ImgL2?.classList.remove("active","show");
      ImgL3?.classList.remove("active","show");
      ImgL4?.classList.remove("active","show");
      ImgL5?.classList.add("active","show");
      ImgL6?.classList.remove("active","show");
      ImgL7?.classList.remove("active","show");
    }

    Img6.onclick = function(){
      ImgL1?.classList.remove("active","show");
      ImgL2?.classList.remove("active","show");
      ImgL3?.classList.remove("active","show");
      ImgL4?.classList.remove("active","show");
      ImgL5?.classList.remove("active","show");
      ImgL6?.classList.add("active","show");
      ImgL7?.classList.remove("active","show");
    }

    Img7.onclick = function(){
      ImgL1?.classList.remove("active","show");
      ImgL2?.classList.remove("active","show");
      ImgL3?.classList.remove("active","show");
      ImgL4?.classList.remove("active","show");
      ImgL5?.classList.remove("active","show");
      ImgL6?.classList.remove("active","show");
      ImgL7?.classList.add("active","show");
    }

    
  }

}
