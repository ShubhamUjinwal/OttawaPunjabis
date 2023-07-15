export class Rideshare {
  public post_type: string;
  public from: string;
  public to: string;
  public available_on: string;
  public price: number;
  public contact: string;

  constructor(post_type: string, from: string, to: string, date: string, price: number, contact: string) {
    this.post_type = post_type;
    this.from = from;
    this.to = to;
    this.available_on = date;
    this.price = price;
    this.contact = contact;
  }
}