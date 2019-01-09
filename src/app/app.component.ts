import { Component } from '@angular/core';
import { RequestService } from './request.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [RequestService]
})
export class AppComponent {
  repositories: any = [];
  constructor(private requestService: RequestService) {}
  search(searchString) {
    this.requestService.getReposBySearchString(searchString).subscribe(res => {
      if (res && res.items) {
        this.repositories = res.items;
      }
    });
  }
}
