import '../css/card2.css'
function InvestmentCard ({
    currency ,
    init,
    setPage
}){
    return (
        <div className="inv_card">
      <div className="content">
        <div className="price">{currency||'$'}{init||100} - {currency||'$'}{init*5 || 500}</div>
        <div className="description">Invest {currency||'$'}{init||100} and get {currency||'$'}{init*5|| 500} within the span of three days!</div>
      </div>
        <button onClick={()=>setPage('payment')}>
         Invest
        </button>
  </div>
    )
}


export default InvestmentCard