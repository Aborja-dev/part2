const Display = ({contacts}) => {
    return (
        <div>
            <h2>Numeros</h2>
            {contacts
                ? <ul>
                    {contacts.map(contact =>
                        <li key={contact.name}>{contact.name} <strong>{contact.number}</strong></li>
                    )}
                </ul>
                : 'No se encontro contacto'

            }
        </div>
    )
}

export default Display
