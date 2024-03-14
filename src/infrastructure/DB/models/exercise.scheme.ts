import { Schema, model } from "mongoose";

const SerieScheme = new Schema({
    weight: { type: Number, required: true },
    repetitions: { type: Number, required: true }
});

const ExerciseScheme = new Schema({
    uuid: { type: String, required: true },
    name: { type: String, required: true },
    muscleGroup: { type: Array, required: true },
    requiredEquipment: { type: Array, required: true },
    isRecommended: { type: Boolean, required: true },
    duration: { type: Number, required: true },
    series: { type: [SerieScheme], required: true },
    realDuration: { type: Number, required: true },
    dificulty: { type: String, required : true },
    user: { type: String, required: true }
});

const ExerciseModel = model('exerciseReports', ExerciseScheme);

export { ExerciseModel };