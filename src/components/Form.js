import React, { useState } from 'react'

const Form = ({submitForm}) => {
    const [newName, setNewName] = useState('')
    const [newNumber, setNumber] = useState('')

    const createNewContact = ()=>{
        const newContact = {
          name: newName,
          number: newNumber
        }
        return newContact
      }
      
    const submit = (e)=>{
        e.preventDefault()
        submitForm(createNewContact())
    }
    return (
        <div>
            <form onSubmit={submit}>
                <div>
                    <label>Nombre</label>
                    <input onChange={(e) => setNewName(e.target.value)} value={newName} />
                </div>
                <div>
                    <label>Numero</label>
                    <input onChange={(e) => setNumber(e.target.value)} value={newNumber} />
                </div>
                <div>
                    <button type='submit'>Agregar</button>
                </div>
            </form>
        </div>
    )
}

export default Form
