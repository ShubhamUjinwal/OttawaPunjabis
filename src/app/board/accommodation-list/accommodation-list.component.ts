import { Component, Output, EventEmitter } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-accommodation-list',
  templateUrl: './accommodation-list.component.html',
  styleUrls: ['./accommodation-list.component.scss']
})
export class AccommodationListComponent {

  public accommodation_posts: any = [];
  @Output() accommodationPostsIndex = new EventEmitter<any>();

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.getAccommodationPosts();
  }

  getAccommodationPosts() {
    this.taskService
      .fetchAccommodationPosts()
      .subscribe((response: any) => {
        this.accommodation_posts = response
        this.accommodationPostsIndex.emit(this.accommodation_posts.length)
      })
  }
}
