import { Component } from '@angular/core';

@Component({
  selector: 'app-rideshare-list',
  templateUrl: './rideshare-list.component.html',
  styleUrls: ['./rideshare-list.component.scss']
})
export class RideshareListComponent {
  rideshare_posts = [];

  constructor() {}

  ngOnInit() {}
}
