export class Course{
    private cId:number;
    private cName:string;
    private cInstrcutor:string;
    constructor(cId:number, cName:string, cInstructor:string){
        this.cId = cId;
        this.cName = cName;
        this.cInstrcutor = cInstructor;
    }

    getId():number{
        return this.cId
    }

    getName():string{
        return this.cName
    }

    getInstructor():string{
        return this.cInstrcutor
    }

    display():string{
        return this.cName+" Course ("+this.cId+") "+"is taught by, "+this.cInstrcutor
    }

}