export class Registration {
    public username: string;
    public password: string;    
    
    constructor(name, password) {
      this.password = password;
      this.username = name;
    }
}