import { useEffect, useState } from "react";
import { useAuth } from "../hooks/AuthProvider";
import InvestmentCard from "./InvestmentCard";
import Currency from "./currency";
import { FaBars } from "react-icons/fa6";

function Plans({currency , setCurrency , setPage , setnav}) {
  const auth = useAuth();
  let plans = [1,2,3,4,5,6,7,8]
  
  useEffect(()=>{
    setCurrency('$')
} , [])
  return (
    <div className="plans section">
      {/* <div className="section_wrap">
                 <div className="section_head">
                Welcome Back, {auth.user?.username?.split('@')[0]}
            </div> */}

      <div className="section_wrap">
        <div className="section_head">
        <FaBars onClick={()=>setnav(d=>!d)} className="hamb" />  
          Our Investment Plans</div>
      </div>

      <Currency setCurrency={setCurrency} />
<div className="inv_wrap">
    <div className="investment_plans">
       {
         plans.map(plan => <InvestmentCard setPage={setPage} init={plan*100} currency={currency} />)
       }
      </div>
</div>
    
    </div>
  );
}

export default Plans;
