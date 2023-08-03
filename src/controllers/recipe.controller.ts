import { Request, Response } from "express"
import response from "../utils/response"
import RecipeService from "../services/recipe.service"

class RecipeController {
    async getAllRecipes(req: Request, res: Response) {
        const result = await RecipeService.getAllRecipes()
        res.status(200).json(response.success("Success", result))
    }

    async getRecipe(req: Request, res: Response) {
        const result = await RecipeService.getRecipe(req.params.id)
        res.status(200).json(response.success("Success", result))
    }

    async addRecipe(req: Request, res: Response) {
        const result = await RecipeService.addRecipe(req.body)
        res.status(201).json(response.success("Recipe added", result))
    }

    async updateRecipe(req: Request, res: Response) {
        const result = await RecipeService.updateRecipe(req.params.id, req.body)
        res.status(200).json(response.success("Recipe updated", result))
    }

    async deleteRecipe(req: Request, res: Response) {
        const result = await RecipeService.deleteRecipe(req.params.id)
        res.status(200).json(response.success("Recipe deleted", result))
    }
}

export default new RecipeController()