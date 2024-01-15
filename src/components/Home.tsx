import { useState } from 'react'
import { IEmployee, PageEnum, exampleEmployeeList } from '../types/Employee.type'
import EmployeeList from './EmployeeList'
import AddEmployee from './AddEmployee'
import '../styles/Home.style.css'
import EditEmployee from './EditEmployee'

const Home = () => {
    const [employeeList, setEmployeeList] = useState(exampleEmployeeList as IEmployee[])
    const [shownPage, setShownPage] = useState(PageEnum.list)
    const [dataToEdit, setDataToEdit] = useState({} as IEmployee)

    const handleAddEmployeeClick = () => {
        setShownPage(PageEnum.add)
    }

    const showListPage = () => {
        setShownPage(PageEnum.list)
    }

    const addEmployee = (data: IEmployee) => {
        setEmployeeList([...employeeList, data])
    }

    const deleteEmployee = (data: IEmployee) => {
        const index = employeeList.indexOf(data)
        const tempList = [...employeeList]
        tempList.splice(index, 1)
        setEmployeeList(tempList)
    }

    const editEmployee = (data: IEmployee) => {
        setShownPage(PageEnum.edit)
        setDataToEdit(data)
    }

    const updateData = (data: IEmployee) => {
        const filteredData = employeeList.filter(x => x.id === data.id)[0]
        const index = employeeList.indexOf(filteredData)
        const tempData = [...employeeList]
        tempData[index] = data
        setEmployeeList(tempData)
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
                        <EmployeeList list={employeeList} handleDelete={deleteEmployee} handleEdit={editEmployee} />
                    </>
                )}

                {shownPage === PageEnum.add &&
                    <AddEmployee handleSubmit={addEmployee} handleBackButton={showListPage} />
                }
                {shownPage === PageEnum.edit && (
                    <EditEmployee
                        data={dataToEdit}
                        handleBackButton={showListPage}
                        handleUpdate={updateData}
                    />
                )}
            </section>
        </>
    )
}

export default Home