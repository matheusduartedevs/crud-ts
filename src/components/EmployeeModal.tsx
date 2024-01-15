import { IEmployee } from '../types/Employee.type'
import '../styles/EmployeeModal.style.css'

type Props = {
  onClose: () => void
  data: IEmployee
}

const EmployeeModal = (props: Props) => {
  const { onClose, data } = props

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h3>Dados do Funcionário</h3>
        <div>
          <div>
            <p>Nome: {data.firstName}</p>
          </div>
          <div>
            <p>Sobrenome: {data.lastName}</p>
          </div>
          <div>
            <p>E-mail: {data.email}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmployeeModal