export default class Maestros {
    id: string | null;
    name: string;
    description: string;

    constructor(id: string | null, name: string, description: string) {
        this.id = id;
        this.name = name;
        this.description = description;
    }
}
