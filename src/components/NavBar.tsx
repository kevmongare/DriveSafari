// components/NavBar.tsx
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Menu from "../data/Main/Menu"
import Button from "./Button"

const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);
    const navigate = useNavigate();
    
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className={`fixed shadow-2xl flex justify-between items-center px-8 top-0 left-0 w-full z-50 transition-all duration-300 ${
            scrolled ? 'bg-white shadow-md py-4 text-gray-700' : 'bg-black/50 text-white py-4'
        }`}>
            <div 
                className="cursor-pointer"
                onClick={() => navigate('/')}
            >
                <h1 className="text-3xl font-bold">Drive-<span className="text-[#d39b53]">Safari</span></h1>
            </div>

            <ul className="flex space-x-8 font-extralight">
                {Menu.map((item, index) => (
                    <li 
                        key={index} 
                        className="flex hover:text-[#d39b53] transition-colors cursor-pointer"
                        onClick={() => navigate(item.path || '/')}
                    >
                        {item.name}
                    </li>
                ))}
            </ul>

            <Button 
                variant={scrolled ? "primary" : "secondary"} 
                onClick={() => navigate('/register')}
            >
                Register
            </Button>
        </section>
    )
}

export default NavBar