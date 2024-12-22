import {Router} from "express"

import { signUp, signIn } from "../controllers/userController.js"

const userRouter = Router()

userRouter.post("/signIn", signIn)
userRouter.post("/signUp", signUp)

export {userRouter}

