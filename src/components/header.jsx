import logo from '../images/Daniel_Gallego__1_-removebg-preview.png'
import GoogleTranslate from './tans'
import TranslateDropdown from './transdrop'

function Header(){
    return (
        <div style={{
            padding:'1.5rem',
            display:'flex'
            ,alignItems:'center',
            justifyContent:'space-between'
        }} className="header">
           <img style={{
            width:"8%"
           }} src={logo} alt="" />
           <TranslateDropdown />
        </div>
    )
}

export default Header