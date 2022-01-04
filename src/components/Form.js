import React, { useState } from 'react'
import FormInput from './Input'

const Form = ({submitForm}) => {
    const [newName, setNewName] =  useState('')
    const [newNumber, setNewNumber]  = useState('')

    const createNewContact = ()=>{
        const newContact = {
          name: newName,
          number: newNumber
        }
        console.info(newContact)
        return newContact
      }
      
    const submit = (e)=>{
        e.preventDefault()
        submitForm(createNewContact())
    }
    return (
        <div>
            <form onSubmit={submit}>
                <FormInput label={'Nombre'} value={newName} setChange={setNewName} />
                <FormInput label={'Numero'} value={newNumber} setChange={setNewNumber} />
                <div>
                    <button type='submit'>Agregar</button>
                </div>
            </form>
        </div>
    )
}

export default Form
