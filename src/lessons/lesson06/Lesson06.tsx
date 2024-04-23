function Lesson06(){

    let userName:string = "Tom";
    const message: string = `Hallo, ${userName}`;

    userName = "2";
    userName = 1+2+"2";
    console.log(userName);

    let userAge: number = 36.7;
    
    let isAdmin: boolean = true;

    let epmtyVar: null = null;
    let exapmleUnd:undefined = undefined;
    const colors: string[] = ["red", "gren", "black"];

    const fruits: [string, number,string] = ["apple", 3, "grape"];
    
    const showMesage = ():void =>{
        console.log("Hi");
    }
    showMesage();

    const showName = (age:number, firstName:string = "Tom",):void => {
        console.log(`Hello ${firstName}, ${age}`);
    }
    showName( 34);

    const showNameMessage = (firstName:string ,age:number):string => {
        return `Hello ${firstName}, ${age}`;
    }
    console.log(showNameMessage("Bob", 23));

    const showNameMessageArr = (firstName:string, age:number):[string,number] => {
        const userData:[string,number] = [firstName, age];
        return userData;
    }
    console.log(showNameMessageArr("Boby", 73));

    let city:any = 23;
    city = "Berlin";

    interface User {
        name: string;
        age: number;
    }
    const userData: User = {name: 'Mary', age: 12, job: "developer"}
    interface User {
        job :string;
    }

    interface Admin extends User {
        isAdmin: boolean;
    }
    const adminData: Admin = {
        name: 'John', age: 34, job: "developer", isAdmin: false
    }

    const usersData = [
        {name:"Mary", job: "developer"},
        {name:"Tom", job: "developer"},
        {name:"Fred", job: "manager"},
    ]

    //type

    type Animal = {
        name:string,
        weight?: number //не обязательный параметр
    }
    const animal: Animal = {
        name:'Lion',
        weight: 200
    }

    type NewAnimal = Animal & {country:string}

    const newAnimal: NewAnimal = {
        name:'Zebra',
        weight: 150,
        country: "Afrika"
    }
    type CustomType = string | number;
    let number: CustomType = 32;
    number = "Number";


    return <div>{message}</div>
}
export default Lesson06;