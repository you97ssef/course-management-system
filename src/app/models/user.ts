export interface User {
    email: string;
    password: string;
    firstname: string;
    lastname: string;
    birthday: Date;
    role: string; // can be a student or a instructor
}