import '../styles/EmployeeList.style.css'
import { IEmployee } from '../types/Employee.type'

type Props = {
  list: IEmployee[]
}

const EmployeeList = (props: Props) => {
  const { list } = props

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Actions</th>
          </tr>
          {list.map((employee) => {
            console.log(employee)
            return (
              <tr key={employee.id}>
                <td>${employee.firstName} ${employee.lastName}</td>
                <td>{employee.email}</td>
                <td>
                  <div>
                    <input type="button" value="View" />
                    <input type="button" value="Edit" />
                    <input type="button" value="Delete" />
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