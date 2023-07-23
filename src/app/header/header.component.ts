import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private router: Router) { }

  title: string = "ttawaPunjabis"

  toHome() {
    document.getElementById('home')?.scrollIntoView()
  }

  toBoard() {
    document.getElementById('board')?.scrollIntoView()
  }

  toContactUs() {
    document.getElementById('contact_us')?.scrollIntoView()
  }

  toFollowUs() {
    document.getElementById('follow_us')?.scrollIntoView()
  }

  toCreatePost() {
    this.router.navigate(['/create-post'])
  }

}
