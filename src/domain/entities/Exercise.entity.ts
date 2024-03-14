import { v4 as uuidv4 } from 'uuid';
import { Serie } from '../value_objects/Serie.value';

export class ExerciseEntity {
  uuid: string;
  name: string;
  muscleGroup: string[];
  requiredEquipment: string[];
  isRecommended: boolean;
  duration: number;
  series: Serie[];
  realDuration: number;
  dificulty: String;
  user: string;

  constructor(data: Partial<ExerciseEntity>) {
    this.uuid = uuidv4();
    this.name = data.name!;
    this.muscleGroup = data.muscleGroup!;
    this.requiredEquipment = data.requiredEquipment!;
    this.isRecommended = data.isRecommended !== undefined ? data.isRecommended : false;
    this.duration = data.duration!;
    this.series = data.series!;
    this.realDuration = data.realDuration!;
    this.dificulty = data.dificulty!;
    this.user = data.user!;
  }

}
