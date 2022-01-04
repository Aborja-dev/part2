const DisplayItem = ({key, item })=>{
    return (
        <div>
            <li key={key}>{item.name} <strong>{item.number}</strong></li>
        </div>
    )
}

export default DisplayItem