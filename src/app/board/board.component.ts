import { Component } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {

  title: string = "Board"
  rideshare: string = "Rideshare"
  accommodation: string = "Accommodation"
  jobs: string = "Jobs"
}
