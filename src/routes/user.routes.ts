import { Router } from "express";
import { getRepository } from "typeorm";
import { User } from "../models/User";

const userRouter = Router();

userRouter.post("/", async (request, response) => {
  try {
    const repository = getRepository(User);
    const data = await repository.save(request.body);

    return response.status(201).json(data);
  } catch (error) {
    console.log("err.message: >> ", error);
  }
});

userRouter.get("/", async (request, response) => {
  try {
    const repository = getRepository(User);
    const data = await repository.find();

    return response.json(data);
  } catch (error) {
    console.log("err.message: >> ", error);
  }
});

export { userRouter };
