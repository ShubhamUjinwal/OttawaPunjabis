export class Rideshare {
  public post_type: string;
  public from: string;
  public to: string;
  public date: string;
  public price: number;
  public username: string;

  constructor(post_type: string, from: string, to: string, date: string, price: number, contact: string) {
    this.post_type = post_type;
    this.from = from;
    this.to = to;
    this.date = date;
    this.price = price;
    this.username = contact;
  }
}