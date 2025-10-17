import express from "express";
import { getUsers, createUser, getUserById, updateUser, createBookDemo } from "../controllers/userController.js";

const router = express.Router();

router.get("/", getUsers);
router.post("/", createUser);
router.post("/book-demo", createBookDemo);
router.get("/:id", getUserById);
router.put("/:id", updateUser);

export default router;
