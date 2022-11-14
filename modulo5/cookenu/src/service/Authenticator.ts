import * as jwt from "jsonwebtoken"


export class Authenticator {
    public generateToken = (id: string): string => {

        const token = jwt.sign(
            { id },
            process.env.JWT_KEY as string,
            { expiresIn: "5min" }
        )
        return token
    }
    getTokenData = (token: string): string => {
        try {
            const payload  = jwt.verify(token, process.env.JWT_KEY as string) 
        return payload as string
        } catch (error:any) {
            throw new Error("Usuario não Autorizado! ou expirou a sessão!")
        }
        
    }
}