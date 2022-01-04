import DisplayItem from "./DisplayItem"

const Display = ({contacts}) => {
    return (
        <div>
            <h2>Numeros</h2>
            {contacts
                ? <ul>
                    {contacts.map(contact =>
                        <DisplayItem key={contact.name} item={contact}/>
                    )}
                </ul>
                : 'No se encontro contactos'

            }
        </div>
    )
}

export default Display
