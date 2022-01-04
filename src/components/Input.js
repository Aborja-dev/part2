const FormInput = ({label, setChange, value}) => {
    const valueState = value
    return (
        <div>
            <label>{label}</label>
            <input onChange={(e) => {
                setChange(e.target.value)
            }} value={valueState} />
        </div>
    )
}

export default FormInput