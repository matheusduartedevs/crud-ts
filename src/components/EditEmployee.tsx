import { IEmployee } from '../types/Employee.type'
import '../styles/AddEmployee.style.css'
import { useState } from 'react'

type Props = {
    data: IEmployee,
    handleBackButton: () => void,
    handleUpdate: (data: IEmployee) => void
}

const EditEmployee = (props: Props) => {
    const { data, handleBackButton, handleUpdate } = props

    const [firstName, setFirstName] = useState(data.firstName)
    const [lastName, setLastName] = useState(data.lastName)
    const [email, setEmail] = useState(data.email)

    const handleSubmitBtn = (e: any) => {
        e.preventDefault()

        const updatedData: IEmployee = {
            id: data.id,
            firstName: firstName,
            lastName: lastName,
            email: email
        }
        handleUpdate(updatedData)
        alert('Dados alterados')
        handleBackButton()
    }

    return (
        <div className="form-container">
            <div>
                <h3>Formulário de Alterar Dados</h3>
            </div>
            <form onSubmit={handleSubmitBtn}>
                <div>
                    <label>Nome:</label>
                    <input type="text" value={firstName} onChange={(e: any) => setFirstName(e.target.value)} />
                </div>

                <div>
                    <label>Sobrenome:</label>
                    <input type="text" value={lastName} onChange={(e: any) => setLastName(e.target.value)} />
                </div>

                <div>
                    <label>E-mail:</label>
                    <input type="text" value={email} onChange={(e: any) => setEmail(e.target.value)} />
                </div>

                <div>
                    <input type="button" value="Voltar" onClick={handleBackButton} />
                    <input type="button" value="Alterar Dados" onClick={handleSubmitBtn} />
                </div>
            </form>
        </div>
    )
}

export default EditEmployee