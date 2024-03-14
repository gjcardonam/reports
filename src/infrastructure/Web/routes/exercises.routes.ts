import { Router } from 'express';
import { ExerciseController } from '../controllers/exercise.controllers';
import { ExerciseUseCases } from '../../../application/uses_cases/ExerciseUseCases';
import { MongoRepository } from '../../DB/repository/Mongo.respository';
import { MockRepository } from '../../DB/repository/Mock.repository';
import { IExerciseRepository } from '../../../domain/repositories/IExercise.repository';

const router = Router();

const repository: IExerciseRepository = process.env.MOCK === 'true' ? new MockRepository() : new MongoRepository();
const exerciseUseCases = new ExerciseUseCases(repository);
const exerciseController = new ExerciseController(exerciseUseCases);

router.get('/exercise/:uuid', exerciseController.getExercise);
router.get('/exercises/', exerciseController.getAllExercises);
router.post('/exercise/', exerciseController.createExercise);
router.put('/exercise/:uuid', exerciseController.updateExercise);
router.delete('/exercise/:uuid', exerciseController.deleteExercise);
router.get('/', (req, res) => { res.send('Hello World!') });

export { router };