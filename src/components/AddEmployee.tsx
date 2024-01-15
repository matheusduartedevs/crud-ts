import '../styles/AddEmployee.style.css'

type Props = {
  handleBackButton: () => void
}

const AddEmployee = (props: Props) => {
  const { handleBackButton } = props

  return (
    <div className="form-container">
      <div>
        <h3>Formulário de Adicionar Funcionário</h3>
      </div>
      <form>
        <div>
          <label>Nome:</label>
          <input type="text" />
        </div>

        <div>
          <label>Sobrenome:</label>
          <input type="text" />
        </div>

        <div>
          <label>E-mail:</label>
          <input type="text" />
        </div>

        <div>
          <input type="button" value="Back" onClick={handleBackButton} />
          <input type="button" value="Adicionar Funcionário" />
        </div>
      </form>
    </div>
  )
}

export default AddEmployee