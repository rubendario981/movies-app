export class Movie{
  constructor(
    public id: number,
    public original_language: string,
    public title: string,
    public name: string,
    public overview: string,
    public vote_average: string,
    public vote_count: string,
    public poster_path: string,
    public backdrop_pat: string,
    public release_date?: string,
    public first_air_date?: string
  ){}
}