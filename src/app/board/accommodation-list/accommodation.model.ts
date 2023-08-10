export class Accommodation {
  public post_type: string;
  public date: string;
  public area: string;
  public type: string;
  public setting: string;
  public price: number;
  public contact_type: string;
  public username: string;

  constructor(post_type: string, date: string, area: string, type: string, setting: string, price: number, contact_type: string, username: string) {
    this.post_type = post_type;
    this.date = date;
    this.area = area;
    this.type = type;
    this.setting = setting;
    this.price = price;
    this.contact_type = contact_type;
    this.username = username
  }
}