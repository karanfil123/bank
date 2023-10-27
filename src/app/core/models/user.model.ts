export class User {
    id: number = 0;
    userName: string = '';
    fullName: string = '';
    email: string = '';
    phone: string = '';
    tc: string = '';
    address: string = '';
    userType: UserType = 0;
  
}

export enum UserType {
    Admin,
    Customer,
    Personnel
}
