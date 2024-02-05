
function Form( {handleName, name}) {
  return (
        <form action="">
            <label htmlFor="name">Pon tu nombre</label>
            <input type="text" id="name" value={name} onChange={(event) => handleName(event.target.value)}/>
        </form>
  )
}

export default Form