import { Component, OnInit, Input } from '@angular/core';
import { Rideshare } from '../rideshare.model';

@Component({
  selector: 'app-rideshare-item',
  templateUrl: './rideshare-item.component.html',
  styleUrls: ['./rideshare-item.component.scss']
})
export class RideshareItemComponent implements OnInit{
 
  @Input() rideshare_post!: Rideshare;
  @Input() color_index!: number;

  bg_colors = [
    ['#ffafbd', '#ffc3a0'],
    ['#2193b0', '#6dd5ed'],
    ['#cc2b5e', '#753a88'],
    ['#ee9ca7', '#ffdde1'],
    ['#42275a', '#734b6d'],
    ['#bdc3c7', '#2c3e50'],
    ['#de6262', '#ffb88c'],
    ['#06beb6', '#48b1bf'],
    ['#eb3349', '#f45c43'],
    ['#dd5e89', '#f7bb97']
  ]
  color = '#dd5e89'

  constructor() {}

  ngOnInit(): void {
    console.log(this.getRandomColor());
  }

  getRandomColor() {
    var getRandomColorIndex =  this.bg_colors[this.color_index % this.bg_colors.length]
    return {'background': "linear-gradient(to right,"+ getRandomColorIndex[0]+","+ getRandomColorIndex[1] +")"}
  }
}
