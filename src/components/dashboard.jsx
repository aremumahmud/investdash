import { useEffect, useState } from "react"
import '../css/dashboard.css'
import Navigation from "./Navigation"
import Section from "./Section"
import { useAuth } from "../hooks/AuthProvider";
import fetchUserData from "../libs/fetchUserData";
import Modal from "./modal";
import Plans from "./plans";
import TransactionRecord from "./transactionRecord";
import Payment from "./payment";

function Dashboard (){

    const [ currency , setCurrency] = useState('$')
    let [page , setPage] =  useState('overview')
    const auth = useAuth();

    let [navWidth , setNavWindth] = useState("15%")
    let [messages, setMessages] = useState(auth.user?.messages || []);
    let [username, setUsername] = useState(auth.user?.messages || "");
    let [Locked, setLocked] = useState(auth.user?.locked || false)
  
    let [errorModal, setErrorModal] = useState(false);
    let [modalText, setModaltext] = useState("");
    let [link, setLink] = useState("/");
    let [linktext, setLinktext] = useState("");

    let [nav  , setnav] = useState(true)
   
  useEffect(() => {
    if (!auth.user) {
      fetchUserData()
        .then((res) => {
            console.log(res)
          if (res.error) {
            setErrorModal(true);
            if (res.geniune) {ss
              setLink("/");
              setLinktext("Click to Reload Page");
              return setModaltext(res.error);
            }
            setLink("/login");
            setLinktext("Click here to Login");
            setModaltext(
              "Your Access Token has expired or has been compromised, you will have to login to access your dashboard"
            );
            return;
          }

          auth.setUserData(res.userData);
          setMessages(res.userData.transactions);
          setUsername(res.userData.username);
          setLocked(res.userData.locked)
        })
        .catch((err) => {
          setLink(window.location);
          setLinktext("Click to Reload Page");
          setErrorModal(true);
          setModaltext(err.message);
        });
    }

  
  }, [auth]);


  useEffect(()=>{
    if(window.innerWidth <= 768){
      setnav(false)
     }

   let ev= window.addEventListener('resize', (e)=>{
     let width =  e.target.innerWidth
     if(width <= 768){
      setnav(false)
     }
    })

   
    return window.removeEventListener('resize', ev)
  }, [])
    return (
        <>
        {errorModal && (
        <Modal
          setErrorModal={setErrorModal}
     
          link={link}
          linktext={linktext}
          text={modalText}
        />
      )}
       {Locked && (
        <Modal
          setErrorModal={setErrorModal}
        
          linktext={"Close"}
          text={'Sorry Your Trading Account has been locked, for more info please contact our customer support'}
        />
      )}
         <div className="dashboard">
            <div className="nav_section" style={{width:navWidth , display:nav?'block':'none'}}>
               <Navigation show={nav} closenav={()=>setnav(!nav)} page={page} setPage={setPage} />
            </div>
            <div className="other_section" style={{marginLeft: navWidth}}>
              {
                page === 'overview' && <Section setnav={setnav} />
              }
              {
                page === 'plans' && <Plans setnav={setnav}  setPage={setPage} currency={currency} setCurrency={setCurrency} />
              } {
                page === 'transactions' && <TransactionRecord  setnav={setnav}  />
              }
              {
                page === 'payment' && <Payment  setnav={setnav}  currency={currency} setCurrency={setCurrency} />
              }
            </div>
        </div>
        </>
       
    )
}

export default Dashboard