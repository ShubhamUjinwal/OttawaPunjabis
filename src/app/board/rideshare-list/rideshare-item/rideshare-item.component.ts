import { Component, OnInit, Input } from '@angular/core';
import { Rideshare } from '../rideshare.model';

@Component({
  selector: 'app-rideshare-item',
  templateUrl: './rideshare-item.component.html',
  styleUrls: ['./rideshare-item.component.scss']
})
export class RideshareItemComponent implements OnInit{
 
  @Input() rideshare_post!: Rideshare;

  constructor() {}

  ngOnInit(): void {
    
  }
}
