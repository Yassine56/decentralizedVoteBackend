import { Router } from "express";
import { CompaignController } from "../controllers/compaigns.controller";

const router = Router();

router.get("/", CompaignController.GetAllCompaigns);
router.post("/", CompaignController.CreateCompaign);
router.patch("/:id", CompaignController.UpdateCompaign);

export default router;
