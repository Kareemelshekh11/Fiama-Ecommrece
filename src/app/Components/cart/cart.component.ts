import { Component , OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  ngOnInit(): void {
    $(".cart-plus-minus").prepend('<div class="dec qtybutton">-</div>');
    $(".cart-plus-minus").append('<div class="inc qtybutton">+</div>');
    $(".qtybutton").on("click", function(){
      var $button = $(this);
      var oldValue:any = $button.parent().find("input").val();
      if ($button.text() == "+") {
          var newVal = parseFloat(oldValue) + 1;
      } 
      else {
          if (oldValue > 0) {
              var newVal = parseFloat(oldValue) - 1;
          } 
          else {
              newVal = 0;
          }
      }
      $button.parent().find("input").val(newVal);
    });
  }
}
