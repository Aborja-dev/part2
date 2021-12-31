import React, { useState } from 'react'

const contactList = [
  { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
]

const Agenda = ()=>{

  const [contacts, setContacts] = useState(contactList)
  const [newName, setNewName] = useState('')
  const [newNumber, setNumber] = useState('')
  const [newSearch, setNewSearch] = useState('')


  const addContact =(e)=>{
    e.preventDefault()
    const newContact = createNewContact()
    searchContact(newContact)
      ?errorAlert(`El nombre ${newName} ya existe`)
      :setContacts(contacts.concat(newContact))
  }
  const searchName = (searchValue)=>{
    const filteredList = contacts.filter( c=>c.name.includes(searchValue))
    return filteredList.length === 0
      ?null
      :filteredList
  }
  const createNewContact = ()=>{
    const newContact = {
      name: newName,
      number: newNumber
    }
    return newContact
  }
  const searchContact = (contact)=>{
    const finded = contacts.findIndex(c=>c.name === contact.name )
    return finded === -1
      ?false
      :finded
  }
  const errorAlert = (message)=>{
    console.warn(message)
    alert(message)
  }

  const filteredContact = searchName(newSearch)
  return(
    <div>
      <h2>Agenda de telefono</h2>
      <input value={newSearch} onChange={(e)=>setNewSearch(e.target.value)}/>
      <form onSubmit={addContact}>
        <div>
          <label>Nombre</label><input onChange={(e)=>setNewName(e.target.value)} value={newName}/>
        </div>
        <div>
          <label>Numero</label><input onChange={(e)=>setNumber(e.target.value)} value={newNumber}/>
        </div>
        <div>
          <button type='submit'>Agregar</button>
        </div>
      </form>
      <h2>Numeros</h2>
      { filteredContact
        ?<ul>
        { filteredContact.map(contact=>
          <li key={contact.name}>{contact.name} <strong>{contact.number}</strong></li>
          )}
      </ul>
      :'No se encontro contacto'

      }
    </div>
  )
}

export default Agenda
