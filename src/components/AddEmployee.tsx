import { useState } from 'react'
import { IEmployee } from '../types/Employee.type'
import '../styles/AddEmployee.style.css'

type Props = {
  handleBackButton: () => void
  handleSubmit: (data: IEmployee) => void
}

const AddEmployee = (props: Props) => {
  const { handleBackButton, handleSubmit } = props

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmitBtn = (e: any) => {
    e.preventDefault()

    const data: IEmployee = {
      id: new Date().toJSON().toString(),
      firstName: firstName,
      lastName: lastName,
      email: email
    }
    handleSubmit(data)
    alert('Funcionário adicionado!')
    handleBackButton()
  }

  return (
    <div className="form-container">
      <div>
        <h3>Formulário de Adicionar Funcionário</h3>
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
          <input type="button" value="Back" onClick={handleBackButton} />
          <input type="button" value="Adicionar Funcionário" onClick={handleSubmitBtn} />
        </div>
      </form>
    </div>
  )
}

export default AddEmployee