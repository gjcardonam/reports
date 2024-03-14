import { ExerciseEntity } from "../entities/Exercise.entity";

export interface IExerciseRepository {
    save(exercise: ExerciseEntity): Promise<ExerciseEntity | null>;
    delete(_id: string): Promise<boolean | null>;
    getById(_id: string): Promise<ExerciseEntity | null>;
    getAll(): Promise<ExerciseEntity[] | null>;
    update(_id: string, exercise: ExerciseEntity): Promise<ExerciseEntity | null>;
}
