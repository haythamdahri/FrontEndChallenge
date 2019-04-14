export class Repository {
  constructor(
              public id: number,
              public name: string,
              public description: string,
              public stars: number,
              public issues: number,
              public username: string,
              public avatar: string,
              public lastUpdate: string) {}
}
