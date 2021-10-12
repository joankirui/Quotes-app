export class Quote {
  public showPerson!: boolean;
  constructor(public id: number,public name: string,public author: string,public person: string,public upvotes:number,public downvotes:number, public dateCreated: Date){
    this.showPerson!=false;

  }
}



