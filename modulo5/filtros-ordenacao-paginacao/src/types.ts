export type recipe = {
   id: string
   title: string
   description: string
   userId: string
   createdAt: number
}

export type user = {
   id: string
   name: string
   email: string
   password: string
   recipes?: recipe[]
}
enum TYPES {
   TEACHER = "Teacher",
   OPERATIONS = "Operations",
   CX = "CX"
}

export type users = {
   id: number,
   name: string,
   email: string,
   type : TYPES
}