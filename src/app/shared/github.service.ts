import {Repository} from './repository.model';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Data} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable()
export class GithubService {


  repositories: Repository[] = new Array();

  constructor(private http: HttpClient) {
  }

  getRepositories(nbPages: number): Repository[] {
    const desiredDate = new Date(Date.now());
    console.log(desiredDate);
    desiredDate.setDate(desiredDate.getDay() - 30);
    const day: string = ('0' + desiredDate.getDay().toString()).slice(-2);
    const month: string = ('0' + desiredDate.getMonth().toString()).slice(-2);
    const GITHUB_URL = 'https://api.github.com/search/repositories?q=created:>' + desiredDate.getFullYear() + '-' + month + '-' + day + '&sort=stars&order=desc&page'+nbPages;
    console.log('URL: ' + GITHUB_URL);
    this.http.get(GITHUB_URL).subscribe(
      (data: Data) => {
        let repositories: Repository[];
        data.items.forEach(
          (item: Data) => {
            let tempRepository: Repository = new Repository(
              item.id,
              item.owner.login,
              item.description,
              item.stargazers_count,
              item.open_issues_count,
              item.name,
              item.owner.avatar_url);
            this.repositories.push(tempRepository);
          }
        );
      },
      (error: Error) => {
        console.log('Error: ' + error.message);
        this.repositories = new Array();
      },
      () => {
        console.log('Data retrieved completed process!');
      }
    );
    return this.repositories;
  }

}
