import { useState } from 'react'
import { IEmployee, exampleEmployeeList } from '../types/Employee.type'
import '../styles/Home.style.css'
import EmployeeList from './EmployeeList'

const Home = () => {
    const [employeeList, setEmployeeList] = useState(exampleEmployeeList as IEmployee[])

    return (
        <>
            <header>
                <h1>React + Typescript CRUD</h1>
            </header>

            <section>
                <input type="button" value="Adicionar Funcionário" />
                <EmployeeList list={employeeList} />
            </section>
        </>
    )
}

export default Home