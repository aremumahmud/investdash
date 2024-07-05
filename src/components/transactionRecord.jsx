import { useAuth } from "../hooks/AuthProvider"
import Currency from "./currency"
import Transaction from "./transaction"

function TransactionRecord (){

    const auth = useAuth()
    return (
        <div className="transactions_record section">
<div className="section_wrap">
        <div className="section_head">Your Transaction Records</div>
      </div>
      <Currency  />
      <div className="transacions_list section_wrap">
      {
                    auth.user?.transactions.map(tra => <Transaction currency={tra.TransactionCurrency} amount={tra.TransactionAmount} date={tra.TransactionDate.slice(0,10)} />)
                   }
      </div>

        </div>
    )
}

export default TransactionRecord