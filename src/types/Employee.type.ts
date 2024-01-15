export interface IEmployee {
    id: string
    firstName: string
    lastName: string
    email: string
}

export const exampleEmployeeList: IEmployee[] = [
    {
        id: new Date().toJSON().toString(),
        firstName: 'Teste',
        lastName: 'Teste2',
        email: 'teste@gmail.com'
    }
]

export enum PageEnum {
    list,
    add
}