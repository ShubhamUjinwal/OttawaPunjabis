import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  public rideshare_index: any = 0;
  public accommodation_index: any = 0;
  public jobs_index: any = 0;

  ngOnInit() {

  }

  title: string = "Board"
  rideshare: string = "Rideshare"
  accommodation: string = "Accommodation"
  jobs: string = "Jobs"

  onRideshareDataAdded(eventData: any) {
    this.rideshare_index = eventData
  }

  onAccommodationDataAdded(eventData: any) {
    this.accommodation_index = eventData
  }

  onJobsDataAdded(eventData: any) {
    this.jobs_index = eventData
  }
  
}
