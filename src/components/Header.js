const Header = ({value, onSearch})=>{
 
    return(
        <div>
            <h2>Agenda de telefono</h2>
            <input value={value} onChange={(e)=>onSearch(e.target.value)}/>
        </div>
    )
}

export default Header