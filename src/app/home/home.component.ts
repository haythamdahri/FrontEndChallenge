import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GithubService} from '../shared/github.service';
import {Data} from '@angular/router';
import {Observable} from 'rxjs';
import {Repository} from '../shared/repository.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  repositories: Repository[];
  currentPage: number = 1;


  constructor(private githubService: GithubService) { }

  ngOnInit() {
    this.repositories = this.githubService.getRepositories(1);
  }

}
