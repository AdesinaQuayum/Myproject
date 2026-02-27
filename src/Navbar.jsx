import React from 'react'
import Suitman from "./assets/Suitman.jpg"
import Logo from "./assets/Component/Logo.png"
import Background from "./assets/Background.png"

function Navbar() {
    const Navitems = ['home', 'about', 'contact', 'service']

    return (

        <>
        
             <div className="">
                <img src={Background} alt="" />
                <div className='flex gap-10 list-none'>
                <img src={Logo} alt="" />
                {Navitems.map((item, zanku) => (
                    <li key={zanku}>{item}</li>
                ))}
                <button className='border'>contact me</button>
                </div>
            

                
            </div>
               


        </>
    )
}

export default Navbar
