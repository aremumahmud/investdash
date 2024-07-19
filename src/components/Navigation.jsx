import { FaBarsProgress, FaBell, FaGlobe, FaMoneyBill, FaPerson, FaX } from 'react-icons/fa6'
import { useAuth } from '../hooks/AuthProvider';
import logo from '../images/Daniel_Gallego__1_-removebg-preview.png'
import TranslateDropdown from './transdrop';

function Navigation ({page , setPage, closenav}){

    const auth = useAuth();
    

    let wrapclose = (func)=>{
        if(window.innerWidth <= 768){
            func()
            closenav()
            return
        }

        func()
    }

    return <div className="navigation" >
<div className="nav_head">
    <div className="avatar"><img src={logo} alt="" /></div>
    <div className="notify me" onClick={closenav}><FaX /></div>
</div>
<div className="nav_menu">
    <ul>
        <li onClick={()=>wrapclose(()=>setPage('overview'))} className={page === 'overview' && 'active'}><FaGlobe /> Overview</li>
        <li onClick={()=>wrapclose(()=>setPage('transactions'))} className={page === 'transactions' && 'active'}><FaMoneyBill />Transactions</li>
        <li onClick={()=>wrapclose(()=>setPage('plans'))} className={page === 'plans' && 'active'}><FaBarsProgress /> Plans</li>
        <li onClick={()=>wrapclose(()=>setPage('payment'))} className={page === 'payment' && 'active'}><FaPerson/> Payment </li>
        <TranslateDropdown />
    </ul>
</div>

<div className="user">
    <div className="avatar round_me" data-no-translate>MA</div>
    <div className="user_info">
        <p  data-no-translate>{auth.user?.username?.split('@')[0]}</p>
        <p>User Joined: {new Date(auth.user?.dateJoined).getFullYear()}</p>
    </div>
</div>
    </div>
}

export default Navigation