import {Component, OnDestroy, OnInit} from '@angular/core';
import {GithubService} from '../shared/github.service';
import {ActivatedRoute, Params} from '@angular/router';
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

  constructor(private githubService: GithubService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(
      (params: Params) => {
        if (params['page'] != null) {
          this.currentPage = +params['page'];
        } else {
          this.currentPage = 1;
        }
        console.log('page: ' + this.currentPage);
        console.log('Page type: ' + typeof this.currentPage);
        if (this.repositories != null || this.repositories.length > 0) {
          this.repositories = [];
        }
        const tempRepositories: Repository[] = this.githubService.getRepositories(this.currentPage);
        if (tempRepositories != null) {
          this.isError = false;
          this.repositories = tempRepositories;
        } else {
          this.repositories = [];
          this.isError = true;
        }
      }
    );
  }

  ngOnDestroy(): void {
    this.repositories = [];
  }

}
