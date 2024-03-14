import { IExerciseRepository } from "../../../domain/repositories/IExercise.repository";
import { ExerciseEntity } from "../../../domain/entities/Exercise.entity";

const MOCK_RUTINA : ExerciseEntity = {
    uuid: "1",
    name: "Rutina de pecho",
    muscleGroup: ["Pecho"],
    requiredEquipment: ["Banco"],
    isRecommended: true,
    duration: 60,
    series: [
        {
            repetitions: 10,
            weight: 50
        },
        {
            repetitions: 10,
            weight: 50
        },
        {
            repetitions: 10,
            weight: 50
        }
    ],
    realDuration: 60,
    dificulty: "Alta",
    user: "1"
}
class MockRepository implements IExerciseRepository {
    
    async save(exercise: ExerciseEntity): Promise<ExerciseEntity> {
        return MOCK_RUTINA;
    }

    async delete(id: string): Promise<boolean> {
        return true;
    }

    async getById(id: string): Promise<ExerciseEntity | null> {
        return MOCK_RUTINA;
    }

    async getAll(): Promise<ExerciseEntity[] | null> {
        return [MOCK_RUTINA,MOCK_RUTINA,MOCK_RUTINA];
    }

    async update(id:string, exercise: ExerciseEntity): Promise<ExerciseEntity | null> {
        return MOCK_RUTINA;
    }
    
}

export { MockRepository }