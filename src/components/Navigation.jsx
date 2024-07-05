import { FaBarsProgress, FaBell, FaGlobe, FaMoneyBill, FaPerson } from 'react-icons/fa6'
import { useAuth } from '../hooks/AuthProvider';
import logo from '../images/Daniel_Gallego__1_-removebg-preview.png'

function Navigation ({page , setPage}){

    const auth = useAuth();


    return <div className="navigation">
<div className="nav_head">
    <div className="avatar"><img src={logo} alt="" /></div>
    <div className="notify"><FaBell /></div>
</div>
<div className="nav_menu">
    <ul>
        <li onClick={()=>setPage('overview')} className={page === 'overview' && 'active'}><FaGlobe /> Overview</li>
        <li onClick={()=>setPage('transactions')} className={page === 'transactions' && 'active'}><FaMoneyBill />Transactions</li>
        <li onClick={()=>setPage('plans')} className={page === 'plans' && 'active'}><FaBarsProgress /> Plans</li>
        <li onClick={()=>setPage('payment')} className={page === 'payment' && 'active'}><FaPerson/> Payment </li>
        <div id="google_translate_element"></div>
    </ul>
</div>

<div className="user">
    <div className="avatar round_me">MA</div>
    <div className="user_info">
        {console.log(auth.user)}
        <p>{auth.user?.username?.split('@')[0]}</p>
        <p>User Joined: {new Date(auth.user?.dateJoined).getFullYear()}</p>
    </div>
</div>
    </div>
}

export default Navigation