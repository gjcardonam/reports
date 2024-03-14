import { IExerciseRepository } from "../../../domain/repositories/IExercise.repository";
import { ExerciseEntity } from "../../../domain/entities/Exercise.entity";
import { ExerciseModel } from "../models/exercise.scheme";

export class MongoRepository implements IExerciseRepository {

    async save(exerciseIn: ExerciseEntity): Promise<ExerciseEntity> {
        const createdExercise = await ExerciseModel.create(exerciseIn);
        return createdExercise.toObject();
    }

    async delete(id: string): Promise<boolean> {
        const deletedExercise = await ExerciseModel.findByIdAndDelete(id);
        return deletedExercise ? true : false;
    }

    async getById(id: string): Promise<ExerciseEntity | null> {
        const exercise = await ExerciseModel.findById(id);
        return exercise as ExerciseEntity | null;
    }

    async getAll(): Promise<ExerciseEntity[] | null> {
        const exercises = await ExerciseModel.find();
        return exercises.map(exercise => exercise.toObject());
    }

    async update(id:string, exercise: ExerciseEntity): Promise<ExerciseEntity | null> {
        const updatedExercise = await ExerciseModel.findByIdAndUpdate(id, exercise, { new: true });
        return updatedExercise as ExerciseEntity | null;
    }

}