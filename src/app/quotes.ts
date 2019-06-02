export class Quotes {
    constructor(
      public id: number,
      public author: string,
      public description: string,
      public submittedBy: string,
      public setDate: Date,
      public upVote: number,
      public dnVote: number ) {

  }

}
