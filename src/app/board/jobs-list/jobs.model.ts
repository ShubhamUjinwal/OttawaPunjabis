export class Jobs {
  public post_type: string;
  public date: string;
  public type: string;
  public location: string;
  public description: string;
  public contact_type: string;
  public username: string;

  constructor(post_type: string, date: string, type: string, location: string, description: string, contact_type: string, username: string) {
    this.post_type = post_type;
    this.date = date;
    this.type = type;
    this.location = location;
    this.description = description;
    this.contact_type = contact_type;
    this.username = username;
  }
}