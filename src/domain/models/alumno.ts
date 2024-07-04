export default class Alumno {
    id: string | null;  
    name: string;
    email: string;
    password: string;

    constructor(id: string | null, name: string, email: string, password: string) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
    }
}
