// Here all the forms entities are shown with there value
export class User {
    constructor(
        public name:string,
        public email:string,
        public phone:number,
        public topic:string,
        public timePreference:string,
        public subscribe:boolean,


    ){}
}
