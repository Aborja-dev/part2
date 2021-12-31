import React, { useState, useEffect } from 'react'
import Services from './appServices'

import Form  from './components/Form'
import  Display  from './components/Display'
import Header from './components/Header'

const Agenda = ()=>{

  const [contacts, setContacts] = useState([])
  const [newSearch, setNewSearch] = useState('')

  const hookInit = ()=>{
    getContacts()
  }

  const getContacts = ()=>{
    Services.getAll().then(data=>setContacts(data))
  }

  useEffect(hookInit, [])

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
