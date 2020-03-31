export class Quote {
    viewDetails: boolean;
    constructor(
    public quote:string,
    public name:string,
    public auther:string,
    ){
        this.viewDetails = false;
      }
}
