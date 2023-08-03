import { Router } from "express"
import RecipeController from "../controllers/recipe.controller"

const router = Router()

router.get("/", RecipeController.getAllRecipes)

router.get("/:id", RecipeController.getRecipe)

router.post("/", RecipeController.addRecipe)

router.patch("/:id", RecipeController.updateRecipe)

router.delete("/:id", RecipeController.deleteRecipe)

export default router