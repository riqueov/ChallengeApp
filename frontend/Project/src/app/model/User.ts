import { ProductModel } from "./Product"

export class UserModel{

  public idUser: number
  public name: string
  public email: string
  public password: string
  public product: ProductModel[]
}