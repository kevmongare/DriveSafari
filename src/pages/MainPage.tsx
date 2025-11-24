// pages/MainPage.tsx
import NavBar from "../components/NavBar"
import Hero from "../data/Main/Hero"
import Why from "./components/Why"
import GetStarted from "./components/getStarted"
import Button from "../components/Button"
import { useNavigate } from "react-router-dom"

const MainPage = () => {
    const navigate = useNavigate()

    return (
        <>
            <section className="bg-[url('/BG1.jpg')] bg-center bg-cover min-h-screen bg-fixed">
                <div className="bg-gradient-to-r from-black/90 to-transparent min-h-screen bg-fixed">
                    <NavBar />
                    
                    <div className="min-h-screen flex flex-col justify-center px-4 mx-25 space-y-4 pt-16">
                        <h1 className="text-white font-bold text-6xl max-w-2xl">
                            {Hero.HeroMessage1}
                        </h1>

                        <h2 className="text-white font-extralight mt-4 text-xl">
                            {Hero.HeroMessage2}
                        </h2>
                        <div className="flex space-x-4 items-center">
                            <Button 
                                variant="secondary" 
                                onClick={() => navigate('/register')}
                            >
                                Register as a guide
                            </Button>
                            <button 
                                onClick={() => navigate('/register-fleet')}
                                className="text-white underline hover:text-[#d39b53] transition-colors"
                            >
                                Register Fleet
                            </button>
                        </div>
                    </div>
                    {/* <Why/> */}
                    <GetStarted/>
                </div>
            </section>
        </>
    )
}

export default MainPage