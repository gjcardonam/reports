import Joi from "joi";

const exerciseValidator = Joi.object({
  uuid: Joi.string().required(),
  name: Joi.string().required(),
  muscleGroup: Joi.array().items(Joi.string()).required(),
  requiredEquipment: Joi.array().items(Joi.string()).required(),
  isRecommended: Joi.boolean().required(),
  duration: Joi.number().required(),
  series: Joi.array().items(
    Joi.object({
      repetitions: Joi.number().required(),
      weight: Joi.number().required(),
    })
  ).required(),
  realDuration: Joi.number().required(),
  dificulty: Joi.string().required(),
  user: Joi.string().required(),
}).unknown(true);

const idExerciseValidator = Joi.object({
  _id: Joi.string().pattern(/^[0-9a-fA-F]{24}$/, "MongoDB ObjectId"),
});

export { exerciseValidator, idExerciseValidator };
