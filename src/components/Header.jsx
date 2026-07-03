import React, { useContext } from 'react'
import { ThemeContaxt } from '../context/ThemeProvider'

function Header() {
    const context = useContext(ThemeContaxt);
    return (
            <header
                className={` border  py-6 ${context.theme === "light" ? "" : "bg-black text-white"}`}
            >
                <nav className='flex justify-between container mx-auto px-6'>

                    <ul className='flex gap-5'>
                        <li>
                            Home
                        </li>
                        <li>
                            Home
                        </li>
                        <li>
                            Home
                        </li>
                    </ul>

                        <button onClick={() => context.toggleTheme()}>
                            {context.theme === "light" ? "Qora" : "Oq"}
                        </button>
                    
                </nav>
            </header>
      
    );
}

export default Header