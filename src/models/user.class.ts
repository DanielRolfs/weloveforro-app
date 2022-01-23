export class User {
    firstName: string;
    lastName: string;
    email: string;
    organisation: string;
    city: string;
    movements: number;
    focus: string;
    levels: string;

    constructor(obj?: any) {
        this.firstName = obj ? obj.firstName : '';
        this.lastName = obj ? obj.lastName : '';
        this.email = obj ? obj.email : '';
        this.organisation = obj ? obj.organisation : '';
        this.city = obj ? obj.city : '';
        this.movements = obj ? obj.movements : '';
        this.focus = obj ? obj.focus : '';
        this.levels = obj ? obj.levels : '';
    }

    public toJSon() {
        return{
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        organisation: this.organisation,
        city: this.city,
        movements: this.movements,
        focus: this.focus,
        levels: this.levels,
        };
    }
}