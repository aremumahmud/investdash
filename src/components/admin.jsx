import { useEffect, useState } from "react"
import AdminCard from "./adminCard"
import fetchUsers from "../libs/getUsers"

function Admin(){

    let [user , setUsers] = useState([])
    useEffect(()=>{
          fetchUsers().then(res=>{
            if(!res.error){
                setUsers(res)
            }
          })
    } , [])


    return (
        <div className="admin">
            <div className="title_">
                Admin Sector
            </div>
            <div className="gridme">
               {
                user.map(c=>{
                    return <AdminCard savings={c.currentSavingsAmount * 5} balance={c.currentAmount || 0} locked={c.locked} id={c._id} username={c.username} />
                })
               }
            </div>

        </div>
    )
}


export default Admin