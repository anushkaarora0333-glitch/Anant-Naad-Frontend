import Home from "./Home";
import Raag from "./Raag";
import Riyaz from "./Riyaz";
import Find from "./Find";
import Roots from "./Roots";
import LearnMore from "./LearnMore";
import { Component } from "react";
import Navbar from "./Navbar"

import{Route,BrowserRouter as Router,Routes}from 'react-router-dom';
export default function DefRoute(){
    
        return(
            <div>
                <Router>
                    
                    <Navbar/>


                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/raag" element={<Raag/>}/>
                        <Route path="/riyaz" element={<Riyaz/>}/>
                         <Route path="/find" element={<Find/>}/>
                         <Route path="/roots" element={<Roots/>}/>
                         <Route path="/raag/:id" element={<LearnMore/>} />
                    </Routes>
                </Router>
            </div>
        );
    
}
