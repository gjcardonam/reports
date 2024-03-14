export class Serie {
    weight: number;
    repetitions: number;

    constructor(data: Partial<Serie>) {
        this.weight = data.weight!;
        this.repetitions = data.repetitions!;
    }
    
}