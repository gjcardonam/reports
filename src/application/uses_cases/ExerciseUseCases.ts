import { IExerciseRepository } from "../../domain/repositories/IExercise.repository";
import { ExerciseEntity } from "../../domain/entities/Exercise.entity";

export class ExerciseUseCases {
    constructor(private exerciseRepository: IExerciseRepository) {}

    public getExercise = async (id: string) => {
        const exercise = await this.exerciseRepository.getById(id);
        return exercise;
    }

    public createExercise = async (exerciseData: Partial<ExerciseEntity>) => {
        const exercise = new ExerciseEntity(exerciseData);
        const createdExercise = await this.exerciseRepository.save(exercise);
        return createdExercise;
    }

    public deleteExercise = async (id: string) => {
        const deletedExercise = await this.exerciseRepository.delete(id);
        return deletedExercise;
    }

    public updateExercise = async (id:string, exerciseData: Partial<ExerciseEntity>) => {
        const exercise = new ExerciseEntity(exerciseData);
        const updatedExercise = await this.exerciseRepository.update(id, exercise);
        return updatedExercise;
    }

    public getAllExercises = async () => {
        const exercises = await this.exerciseRepository.getAll();
        return exercises;
    }
}