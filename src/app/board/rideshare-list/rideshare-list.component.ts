import { Component, OnInit } from '@angular/core';
import { Rideshare } from './rideshare.model';

@Component({
  selector: 'app-rideshare-list',
  templateUrl: './rideshare-list.component.html',
  styleUrls: ['./rideshare-list.component.scss']
})
export class RideshareListComponent implements OnInit {
  rideshare_posts: Rideshare[] = [
    new Rideshare('Offering', 'Ottawa', 'Toronto', '25 July 2023', 50, 'shubhamujinwal'),
    new Rideshare('Looking For', 'Brampton', 'Montreal', '16 July 2023', 40, 'skkukurock'),
    new Rideshare('Looking For', 'Mississauga', 'Oshawa', '18 July 2023', 60, 'abcd_1234'),
    new Rideshare('Offering', 'Hamilton', 'Ottawa', '20 July 2023', 30, 'abcd_1234'),
    new Rideshare('Looking For', 'Niagara Falls', 'Ottawa', '20 July 2023', 30, 'abcd_1234'),
    new Rideshare('Looking For', 'Niagara Falls', 'Ottawa', '20 July 2023', 30, 'abcd_1234'),
    new Rideshare('Looking For', 'Niagara Falls', 'Ottawa', '20 July 2023', 30, 'abcd_1234')
  ];

  constructor() {
    this.rideshare_posts.sort((a, b) => {
      if (a.available_on < b.available_on) return -1;
      else if (a.available_on > b.available_on) return 1;
      else return 0
    });
  }

  ngOnInit() {}
}
