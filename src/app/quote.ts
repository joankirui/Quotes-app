export class Quote {
    showAuthor: boolean;
    upvotes!: number;
    constructor(public id: number,public name: string,public author: string,public personSubmitted: string,public dateCreated:Date){
        this.showAuthor=false;
        this.upvotes=0;
        
    }


}
