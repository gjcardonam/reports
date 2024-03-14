import { Request, Response } from "express";
import { ExerciseUseCases } from "../../../application/uses_cases/ExerciseUseCases";
import { exerciseValidator, idExerciseValidator } from "../../../interfaces/validators/exercise.validator";

export class ExerciseController {
  constructor(private exerciseUseCase: ExerciseUseCases) {}

  public createExercise = async (req: Request, res: Response) => {
    try {
      const exercise = await exerciseValidator.validateAsync(req.body);
      const exerciseCreated = await this.exerciseUseCase.createExercise(exercise);
      res.status(201).json(exerciseCreated);
    } catch (error: unknown) {
      if (error instanceof Error) {
        res.status(400).json({ message: error.message });
      } else {
        res.status(500).json({ message: "An unknown error occurred." });
      }
    }
  };

  public getExercise = async (req: Request, res: Response) => {
    try {
      const { uuid } = req.params;
      const idValid = await idExerciseValidator.validateAsync({_id: uuid});
      const exercise = await this.exerciseUseCase.getExercise(idValid);
      res.status(200).json(exercise);
    } catch (error: unknown) {
      if (error instanceof Error) {
        res.status(400).json({ message: error.message });
      } else {
        res.status(500).json({ message: "An unknown error occurred." });
      }
    }
  };

  public getAllExercises = async (_req: Request, res: Response) => {
    try {
      const exercises = await this.exerciseUseCase.getAllExercises();
      res.status(200).json(exercises);
    } catch (error: unknown) {
      if (error instanceof Error) {
        res.status(400).json({ message: error.message });
      } else {
        res.status(500).json({ message: "An unknown error occurred." });
      }
    }
  };

  public updateExercise = async (req: Request, res: Response) => {
    try {
      const { uuid } = req.params;
      const idValid = await idExerciseValidator.validateAsync({_id: uuid});
      const exercise = await exerciseValidator.validateAsync(req.body);
      const exerciseUpdated = await this.exerciseUseCase.updateExercise(
        idValid,
        exercise
      );
      res.status(200).json(exerciseUpdated);
    } catch (error: unknown) {
      if (error instanceof Error) {
        res.status(400).json({ message: error.message });
      } else {
        res.status(500).json({ message: "An unknown error occurred." });
      }
    }
  };

  public deleteExercise = async (req: Request, res: Response) => {
    try {
      const { uuid } = req.params;
      const idValid = await idExerciseValidator.validateAsync({_id: uuid});
      const exerciseDeleted = await this.exerciseUseCase.deleteExercise(idValid);
      if (!exerciseDeleted) {
        return res.status(404).json({ message: "Exercise not found" });
      }
      res.status(200).json(exerciseDeleted);
    } catch (error: unknown) {
      if (error instanceof Error) {
        res.status(400).json({ message: error.message });
      } else {
        res.status(500).json({ message: "An unknown error occurred." });
      }
    }
  };
}
