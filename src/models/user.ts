export class User {
  name?: string;
  tag?: string;
  enrollment?: number;
  created_at: Date;

  constructor(){
    this.created_at = new Date();
  }
}

