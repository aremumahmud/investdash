function Currency({setCurrency}){
    return (
        <div className="currency_select">
            <select onChange={(e)=>{
               let val = e.target.value
               setCurrency(val)
            }} name="" id="">
                <option value="$">Select Currency</option>
                <option value="$">US Dollar</option>
                <option value="£">Great British Pounds</option>
                <option value="€">Euro</option>
            </select>
        </div>
    )
}

export default Currency