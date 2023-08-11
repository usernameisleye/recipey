import db from "../db"
import { error } from "../utils"
import { RowDataPacket, ResultSetHeader } from "mysql2"

class RecipeService {
    check = (recipe: RowDataPacket[]) => {
        if(recipe.length === 0) throw new error("Recipe not in record")
    }
    stringify = (d: string[]) => {
        return JSON.stringify(d)
    }

    async getAllRecipes() {
        const [rows] = await db.query("SELECT * FROM recipes")        
        return rows
    }

    async getRecipe(id: string | number) {
        const [rows] = await db.execute<RowDataPacket[]>("SELECT * FROM recipes WHERE id = ?", [id])
        this.check(rows)
        return rows
    }

    async addRecipe(data) { 
        const { name, ingredients, instructions, tags, nutrition_facts } = data
        
        const query = `INSERT INTO recipes(
            name, 
            ingredients, 
            instructions, 
            tags, 
            nutrition_facts) 
            VALUES(?, ?, ?, ?, ?)`
        const values = [name, this.stringify(ingredients), this.stringify(instructions), tags, this.stringify(nutrition_facts)]

        const [{ insertId }] = await db.execute<ResultSetHeader>(query, values)
        return this.getRecipe(insertId)
    }

    async updateRecipe(id: string, data) {}

    async deleteRecipe(id: string) {}
}

export default new RecipeService()