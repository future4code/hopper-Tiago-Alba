
type User = {
    id: number,
    name: string,
    email: string,
    type: string,
    age: number
}

enum ACESS {
    admim = "ADMIN",
    nomal = "NORMAL"
}

export const users :  User[]  = [
    {
        id: 1,
        name: "Alice",
        email: "alice@email.com",
        type: ACESS.admim,
        age: 12
    },
    {
        id: 2,
        name: "Bob",
        email: "bob@email.com",
        type: ACESS.nomal,
        age: 36
    },
    {
        id: 3,
        name: "Coragem",
        email: "coragem@email.com",
        type: ACESS.nomal,
        age: 21
    },
    {
        id: 4,
        name: "Dory",
        email: "dory@email.com",
        type: ACESS.nomal,
        age: 17
    },
    {
        id: 5,
        name: "Elsa",
        email: "elsa@email.com",
        type:ACESS.admim,
        age: 17
    },
    {
        id: 6,
        name: "Fred",
        email: "fred@email.com",
        type:ACESS.admim,
        age: 60
    }
]