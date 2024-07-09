import { useEffect, useRef, useState } from "react"
import Currency from "./currency"
import Make_payment from "../libs/make_payment"
import { FaBars } from "react-icons/fa6"

function Payment({currency , setCurrency, setnav}){

    let form = useRef()
    let [isDisables , disable] = useState(false)


const handleSubmit = (e)=>{
    e.preventDefault()

    const formData = new FormData(form.current);
    const jsonData = {};

    formData.forEach((value, key) => {
      jsonData[key] = value;
    });


    jsonData.currency = currency

    // window.alert(JSON.stringify(jsonData))

    Make_payment(jsonData).then(res=>{
        disable(false)
        console.log(483)
       if(res.error){
        return  alert(res.error)
       }

       window.open('/dashboard') 
    }).catch(err=>{
        disable(false)
        window.alert('an unexpected error has occured')
    })

}


useEffect(()=>{
    setCurrency('$')
} , [])
    let plans = [1,2,3,4,5,6,7,8]
    return (
        <div className="payments section">
<div className="section_wrap">
        <div className="section_head"> <FaBars onClick={()=>setnav(d=>!d)} className="hamb" />  Investment Plan Form</div>
      </div>
      <Currency setCurrency={setCurrency}  />
  <div className="section_wrap investment_form">
    {/* <p className="inv_title">Investment Plan Form</p> */}
    <form ref={form} action="" onSubmit={handleSubmit}>
        <br />
        <div className="subsection">
            <label htmlFor="">Investment Plan</label>
            <select name="amount" id="" required>
            {
         plans.map(plan =><option value={plan*100}>
            Invest {currency||'$'}{plan*100 ||100} and get {currency||'$'}{plan*500|| 500} within the span of three days!
         </option>)
       }
                
            </select>
        </div>
        <div className="subsection">
            <label htmlFor="">Send to BTC adress below</label>
            <input  type="text" value={'1MrMKt6JDpPHkgCpgNh58hufLHmr6PFehe'} disabled  required/>
        </div>
        <div className="subsection">
            <label htmlFor="">Enter transacton ID</label>
            <input name="btc_id" type="text" required/>
        </div>
        <div className="subsection">
           <button onClick={()=>disable(true)} style={isDisables?{color:"#ccc"}:{}}>Initialize Investment</button>
        </div>
    </form>
  </div>

        </div>

      
    )
}

export default Payment