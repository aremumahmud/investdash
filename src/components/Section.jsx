import { FaBars } from "react-icons/fa6"
import { useAuth } from "../hooks/AuthProvider"
import Card from "./card"
import Transaction from "./transaction"

function Section({setnav}){

    const auth = useAuth()

    return (
        <div className="section">
            <div className="section_wrap">
                 <div className="section_head">
                <FaBars onClick={()=>setnav(d=>!d)} className="hamb" />    
                Welcome Back, {auth.user?.username?.split('@')[0]}
            </div>

            <div className="investment_cards">
                <Card multi={1} name={auth.user?.username?.split('@')[0]} amount={auth.user?.currentAmount || 0}  currency={auth.user?.currentSavingsCurrency || '$'} type={"Balance"}/>
                <Card name={auth.user?.username?.split('@')[0]} amount={auth.user?.currentSavingsAmount || 0}  currency={auth.user?.currentSavingsCurrency || '$'} type={auth.user?.currentSavingsType || 'No Savings Yet'} />
            </div>

            <div className="recent_transactions">
                <p className="title">Recent Transactions</p>
                <br /><br />
                <div>
                   {
                    auth.user?.transactions.map(tra => <Transaction currency={tra.TransactionCurrency} amount={tra.TransactionAmount} date={tra.TransactionDate.slice(0,10)} />)
                   }
                </div>
            </div>
            </div>
           
        </div>
    )
}
export default Section