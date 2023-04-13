import { Component } from '@angular/core';

@Component({
  selector: 'app-google-location',
  templateUrl: './google-location.component.html',
  styleUrls: ['./google-location.component.scss']
})
export class GoogleLocationComponent {
  selects= [
    {value: 'Sort by popularity', viewValue: 'Popularity'},
    {value: 'Sort by new arrivals', viewValue: 'New arrivals'},
    {value: 'Sort by price: low to high', viewValue: 'Low to high'},
    {value: 'Sort by price: high to low', viewValue: 'High to low'},
  ];
}
