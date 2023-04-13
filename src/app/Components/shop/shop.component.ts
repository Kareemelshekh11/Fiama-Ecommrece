import { Component , OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  
  formatLabel(value: number): string {
    if (value >= 50) {
      return value + '$';
    }

    return `${value}`;
  }

  selects= [
    {value: 'Sort by popularity', viewValue: 'Popularity'},
    {value: 'Sort by new arrivals', viewValue: 'New arrivals'},
    {value: 'Sort by price: low to high', viewValue: 'Low to high'},
    {value: 'Sort by price: high to low', viewValue: 'High to low'},
  ];

  ngOnInit(): void {
    

    const btn1 = document.querySelector("#btn1") as HTMLElement;
    const btn2 = document.querySelector("#btn2") as HTMLElement;
    const divgrid = document.querySelector("#liton_product_grid") as HTMLElement;
    const divlist = document.querySelector("#liton_product_list") as HTMLElement;

    
    btn1.onclick = function(){
      btn1?.classList.add("active");
      btn2?.classList.remove("active");
      divgrid?.classList.add("active","show");
      divlist?.classList.remove("active","show");
    }

    btn2.onclick = function(){
      btn2?.classList.add("active");
      btn1?.classList.remove("active");
      divlist?.classList.add("active","show");
      divgrid?.classList.remove("active","show");
    }

   
  }
}
