import { useState } from 'react'
import { IEmployee, PageEnum, exampleEmployeeList } from '../types/Employee.type'
import EmployeeList from './EmployeeList'
import AddEmployee from './AddEmployee'
import '../styles/Home.style.css'

const Home = () => {
    const [employeeList, setEmployeeList] = useState(exampleEmployeeList as IEmployee[])
    const [shownPage, setShownPage] = useState(PageEnum.list)

    const handleAddEmployeeClick = () => {
        setShownPage(PageEnum.add)
    }

    const showListPage = () => {
        setShownPage(PageEnum.list)
    }

    const addEmployee = (data: IEmployee) => {
        setEmployeeList([...employeeList, data])
    }

    return (
        <>
            <header>
                <h1>React + Typescript CRUD</h1>
            </header>

            <section>
                {shownPage === PageEnum.list && (
                    <>
                        <input 
                            type="button" 
                            value="Adicionar Funcionário" 
                            onClick={handleAddEmployeeClick}
                            className='add-employee-btn'
                            />
                        <EmployeeList list={employeeList} />
                    </>
                )}

                {shownPage === PageEnum.add && <AddEmployee handleSubmit={addEmployee} handleBackButton={showListPage} />}
            </section>
        </>
    )
}

export default Home