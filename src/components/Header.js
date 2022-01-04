import FormInput from "./Input"

const Header = ({value, onSearch})=>{
 
    return(
        <div>
            <h2>Agenda de telefono</h2>
            <FormInput label={''} value={value} setChange={onSearch} />
        </div>
    )
}

export default Header