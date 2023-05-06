import { Component } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {

  selects= [
    {value: 'Australia', viewValue: 'Australia'},
    {value: 'Canada', viewValue: 'Canada'},
    {value: 'China', viewValue: 'China'},
    {value: 'Morocco', viewValue: 'Morocco'},
    {value: 'Saudi Arabia', viewValue: 'Saudi Arabia'},
    {value: 'United Kingdom (UK)', viewValue: 'United Kingdom (UK)'},
    {value: 'United States (US)', viewValue: 'United States (US)'},
  ];
}
