import '../styles/EmployeeList.style.css'
import { IEmployee } from '../types/Employee.type'

type Props = {
  list: IEmployee[]
  handleDelete: (data: IEmployee) => void
}

const EmployeeList = (props: Props) => {
  const { list, handleDelete } = props

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
                    <input type="button" value="View" />
                    <input type="button" value="Edit" />
                    <input type="button" value="Delete" onClick={() => handleDelete(employee)} />
                  </div>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default EmployeeList