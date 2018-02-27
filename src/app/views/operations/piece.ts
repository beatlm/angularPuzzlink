export class Piece {
    public _id: string;
  public amount: number = 0;
  public description: string = "";
  public kind: string;

  constructor() {
    this._id = new Date().getTime().toString();
  }
}
