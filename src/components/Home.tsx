import { useState } from 'react'
import { IEmployee, exampleEmployeeList } from '../types/Employee.type'
import './Home.style.css'

const Home = () => {
    const [employeeList, setEmployeeList] = useState(exampleEmployeeList as IEmployee[])

    return (
        <>
            <header>
                <h1>React + Typescript CRUD</h1>
            </header>

            <section>
                <div>Content</div>
            </section>
        </>
    )
}

export default Home