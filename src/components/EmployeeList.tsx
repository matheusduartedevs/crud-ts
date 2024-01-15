import { useState } from 'react'
import { IEmployee } from '../types/Employee.type'
import EmployeeModal from './EmployeeModal'
import '../styles/EmployeeList.style.css'

type Props = {
  list: IEmployee[]
  handleDelete: (data: IEmployee) => void
}

const EmployeeList = (props: Props) => {
  const [showModal, setShowModal] = useState(false)
  const [dataToShow, setDataToShow] = useState(null as IEmployee | null)
  const { list, handleDelete } = props

  const openModal = (data: IEmployee) => {
    setShowModal(true) 
    setDataToShow(data)
  }

  const closeModal = () => setShowModal(false)

  return (
    <div>
      <article>
        <h3>Lista de Funcionários</h3>
      </article>
      <table>
        <tbody>
          <tr>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Actions</th>
          </tr>
          {list.map((employee) => {
            return (
              <tr key={employee.id}>
                <td>{employee.firstName} {employee.lastName}</td>
                <td>{employee.email}</td>
                <td>
                  <div>
                    <input type="button" value="View" onClick={() => openModal(employee)} />
                    <input type="button" value="Edit" />
                    <input type="button" value="Delete" onClick={() => handleDelete(employee)} />
                  </div>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
      {showModal && dataToShow !== null && <EmployeeModal onClose={closeModal} data={dataToShow} /> }
    </div>
  )
}

export default EmployeeList