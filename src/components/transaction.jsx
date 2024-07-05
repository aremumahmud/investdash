import { FaArrowDown, FaHandDots, FaMoneyBill1 } from "react-icons/fa6"

function Transaction({currency , amount, date}){
    return (
        <div className="transaction">
            <div className="info_wrap">

               <div className="status">
    <FaMoneyBill1 /><div className="what">
    <FaArrowDown />
</div>
</div>
<div className="transaction_info">
    <p className="title">
        {
            `${currency}${amount} to ${currency}${Number(amount)*5}`
        }
    </p>
    <p className="sub">Invested by you, {date}</p>
</div> 
            </div>

<div className="transaction_amount">
    <p>{currency}{amount}</p>
</div>

        </div>
    )
}


export default Transaction