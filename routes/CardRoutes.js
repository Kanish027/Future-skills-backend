import express from "express";
import {
  CreateCard,
  GetAllCards,
  GetSpecificCard,
} from "../controllers/CardController.js";

const router = express.Router();

router.post("/card/new", CreateCard);

router.get("/cards", GetAllCards);

router.get("/card/:id", GetSpecificCard);

export default router;
