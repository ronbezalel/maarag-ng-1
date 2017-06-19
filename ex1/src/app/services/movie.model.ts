export class Movie {
    id: number;
    name: string;
    views: number;
    description: string;

    constructor(id: number, name: string, views: number, description: string){
        this.id = id;
        this.name = name;
        this.views = views;
        this.description = description;
    }
}