import { Request, Response } from "express"
import { users } from "../../types"
import { connection } from "../../data/connections"

export async function getUsers(request: Request, response: Response): Promise<void> {

    const users: users[] = await connection.raw(`
    SELECT * FROM labecommerce_users
    `)

    response.send(users[0])
}