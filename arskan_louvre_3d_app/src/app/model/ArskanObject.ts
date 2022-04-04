export class ArskanObject {
  public name?: string;
  public description?: string;
  public picture?: string;
  public silo_id?: string;
  public _id?: string;
  public isCurrentlyUpdated: boolean = false;

  constructor(args: any) {
    this.name = args.name;
    this.description = args.description;
    this.picture = args.picture;
    this.silo_id = args.silo_id;
    this._id = args._id;
  }
}
