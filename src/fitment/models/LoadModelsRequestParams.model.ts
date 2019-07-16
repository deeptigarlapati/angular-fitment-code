export class LoadModelsRequestParams {
    public year: string;
    public make: string;
  
    constructor(year: string, make: string) {
      this.year = year;
      this.make = make;
    }
  }