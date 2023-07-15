import { Component } from '@angular/core';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent {
  title: string = "Looking For";
  date: string = "12 July 2023";
  from: string = "Ottawa";
  to: string = "Toronto"
  price: number = 50;
  contact_id: string = "shubhamujinwal";
  

}
