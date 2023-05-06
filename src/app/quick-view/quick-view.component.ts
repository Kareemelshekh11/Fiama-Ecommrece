import { Component , OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-quick-view',
  templateUrl: './quick-view.component.html',
  styleUrls: ['./quick-view.component.scss']
})
export class QuickViewComponent implements OnInit{

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
