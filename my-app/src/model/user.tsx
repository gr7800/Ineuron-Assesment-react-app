export interface User {
    firstName: number;
    lastName: string;
    phone: boolean
    age: any
}

export interface IEmployeeList extends User {
    dateCreated: any
}