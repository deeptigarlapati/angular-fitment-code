export class LoadOptionsRequestParams {
  public year: string;
  public make: string;
  public model: string;
  public trim: string;

  constructor(year: string, make: string, model: string, trim: string) {
    this.year = year;
    this.make = make;
    this.trim = trim;
    this.model = model;
  }
}