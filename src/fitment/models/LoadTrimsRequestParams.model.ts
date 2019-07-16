export class LoadTrimsRequestParams {
    public year: string;
    public make: string;
    public model:string
  
    constructor(year: string, make: string, model: string) {
      this.year = year;
      this.make = make;
      this.model = model;
    }
  }