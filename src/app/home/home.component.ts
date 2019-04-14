import {Component, OnDestroy, OnInit} from '@angular/core';
import {GithubService} from '../shared/github.service';
import {Repository} from '../shared/repository.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  repositories: Repository[] = [];
  currentPage: number = 1;
  isError: boolean = false;

  constructor(private githubService: GithubService) {

  }

  ngOnInit() {
    this.repositories = this.githubService.getRepositories(this.currentPage);
    if (this.repositories == null) {
      this.isError = true;
    }
  }

  ngOnDestroy(): void {
    this.repositories = [];
  }

  onScroll() {
    this.currentPage += 1;
    this.repositories.concat(this.githubService.getRepositories(this.currentPage));
    if (this.repositories == null) {
      this.isError = true;
    } else {
      this.isError = false;
    }
  }

  reload() {
    this.currentPage = 1;
    this.repositories = [];
    console.log('Current Page: ' + this.currentPage);
    this.repositories = this.githubService.getRepositories(this.currentPage);
    if (this.repositories == null) {
      this.isError = true;
    } else {
      this.isError = false;
    }
  }
}
