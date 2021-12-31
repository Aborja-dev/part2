import React, { useState } from 'react'


import Form  from './components/Form'
import  Display  from './components/Display'
import Header from './components/Header'



const contactList = [
  { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
]

const Agenda = ()=>{

  const [contacts, setContacts] = useState(contactList)
  const [newSearch, setNewSearch] = useState('')

  const addContact =(contact)=>{
    const newContact = contact
    searchContact(newContact)
      ?errorAlert(`El nombre ${contact.name} ya existe`)
      :setContacts(contacts.concat(newContact))
  }
  const filterContacts = (searchValue)=>{
    const filteredList = contacts.filter( c=>c.name.includes(searchValue))
    return filteredList.length === 0
      ?null
      :filteredList
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

  const filteredContact = filterContacts(newSearch)
  return(
    <div>
      <Header value={newSearch} onSearch={setNewSearch}/>
      <Form submitForm={addContact} />
      <Display contacts={filteredContact} />
    </div>
  )
}

export default Agenda
