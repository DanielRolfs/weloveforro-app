export class User {
    firstName: string;
    lastName: string;
    email: string;
    style: string;
    language: string;
    organisation: string;
    city: string;
    focus: string;
    levels: string;

    constructor(obj?: any) {
        this.firstName = obj ? obj.firstName : '';
        this.lastName = obj ? obj.lastName : '';
        this.email = obj ? obj.email : '';
        this.style = obj ? obj.style : '';
        this.language = obj ? obj.language : '';
        this.organisation = obj ? obj.organisation : '';
        this.city = obj ? obj.city : '';
        this.focus = obj ? obj.focus : '';
        this.levels = obj ? obj.levels : '';
    }

    public toJSon() {
        return{
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        style:  this.style,
        language: this.language,
        organisation: this.organisation,
        city: this.city,
        focus: this.focus,
        levels: this.levels
        };
    }
}