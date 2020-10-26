import BaseEntity from "../BaseEntity";

export default class Compaign extends BaseEntity {
  public title: string;
  public description: string;
  public organizer: string;
  public rounds: number;
  public options: {
    label: string;
    votes: number;
    addedBy: string;
    voters: string[];
  }[];

  constructor(entityValues: Partial<Compaign>) {
    super(entityValues);
    Object.assign(this, entityValues);
  }
}
