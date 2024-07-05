import logo from '../images/Daniel_Gallego__1_-removebg-preview.png'

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
            <div style={{
                border: '1px solid black'
            }} id="google_translate_element"></div>
        </div>
    )
}

export default Header