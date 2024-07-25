import { useRef } from "react"
import Addfunds from "../libs/add_funds"
import LockUser from "../libs/lock_user"
import Removefunds from "../libs/removefunds"

function AdminCard({username, id ,locked, balance , savings}){
    let input = useRef()
    const maybeLock = ()=>{
        LockUser(id).then(res=>{
            location.reload()
        }).catch(err=>{
            window.alert('an unexpected error occred')
        })
    }
    

    const addfunds=()=>{
        Addfunds(input.current.value , id).then(res=>{
            location.reload()
        }).catch(err=>{
            window.alert('an unexpected error occred')
        })
    }

    const removefunds=()=>{
        let conf = window.confirm('Are you sure you wanna remove clients funds?')
        if(!conf) return
        Removefunds(0 , id).then(res=>{
            location.reload()
        }).catch(err=>{
            window.alert('an unexpected error occred')
        })
    }
    return (
        <div className="admin_card">
            <div>
                <p>User: <span>{username}</span></p>
            </div>
            <div>
                <p>Balance: <span>{balance}</span></p>
            </div>
            <div>
                <p>Savings Balance: <span>{savings}</span></p>
            </div>
            <div className="flexit">
                <input ref={input} type="number" />
                <button onClick={addfunds}>Add Funds</button>
            </div>
            <div className="flexit">
                <button onClick={removefunds}>Remove Funds</button>
            </div>
            <div>
                <button onClick={maybeLock}>{!locked?"Lock Account":"Unlock Account"}</button>
            </div>
        </div>
    )
}

export default AdminCard