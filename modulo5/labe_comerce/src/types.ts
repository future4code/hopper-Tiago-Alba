export type users = {
    id: string,
    name: string,
    email: string,
    password: string
}
export type products = {
    id: string,
    name: string,
    price: number,
    imageUrl: string
}
export type purchases = {
    id: string,
    userId: string,
    productId: string,
    quantity: number,
    totalPrice: number
}