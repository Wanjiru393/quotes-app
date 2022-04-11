export class Quote {
    id: number;
    quote:string;
    author: string;
    name: string;
    upvotes: number;
    downvotes: number;
    // newDate!: Date;
  datePosted: Date;
  

    constructor(id:number, quote: string, author: string,name: string, datePosted:Date,upvotes: number, downvotes: number){
        this.id=id;
        this.quote=quote;
        this.author=author;
        this.name=name;
        this.upvotes=upvotes;
        this.downvotes=downvotes;
        this.datePosted= datePosted;

      }
    }

