import { Injectable } from '@angular/core';
import { Subject, tap } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor (private apiService: ApiService) { }

  private _refreshPosts$ = new Subject<void>();

  get refreshPosts$() {
    return this._refreshPosts$;
  }


  fetchPosts() {
    return this.apiService.get('rideshare')
  }

  fetchRidesharePosts() {
    return this.apiService.get('rideshare')
  }

  fetchAccommodationPosts() {
    return this.apiService.get('accommodation')
  }

  fetchJobsPosts() {
    return this.apiService.get('jobs')
  }

  createRidesharePost(data: any) {
    return this.apiService
      .post('rideshare', data)
      .pipe(
        tap(() => {
          this._refreshPosts$.next()
        })
      )
  }

  createJobsPost(data: any) {
    return this.apiService
      .post('jobs', data)
      .pipe(
        tap(() => {
          this._refreshPosts$.next()
        })
      )
  }

  createAccommodationPost(data: any) {
    return this.apiService
      .post('accommodation', data)
      .pipe(
        tap(() => {
          this._refreshPosts$.next()
        })
      )
  }
}