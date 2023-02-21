export class Movie{
  constructor(
    public id: number,
    public original_language: string,
    public title: string,
    public overview: string,
    public vote_average: string,
    public vote_count: string,
    public release_date: string,
    public poster_path: string,
    public backdrop_pat: string
  ){}
}