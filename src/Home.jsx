import React from "react";
import "./Home.css";
import{Route,BrowserRouter as Router,Routes}from 'react-router-dom';
import { Component } from "react";
import {Link} from "react-router-dom";

export default function Home(){
    return(
        <div className="scroll-smooth">
        <section className="h-screen bg-gradient-to-br from-black via-[#130E22] to-[#2E2050] text-white flex flex-col justify-center items-center text-center px-6 relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/10 blur-3xl rounded-full"></div>
                 <h1 className="max-w-6xl text-center text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
                         Healing Through Indian Classical Music
                 </h1><br/><br/>
                 <p className="text-lg md:text-2xl max-w-4xl mb-8 text-center text-gray-200">
                     Explore raags, discover wellness insights,
                     and begin your journey through Naad.

                 </p><br/>
                 <a href="/raag">
                    <button className="bg-[#D4AF37] text-black px-8 py-4 rounded-full hover:bg-[#C49B2E] hover:scale-110 transition">
                        EXPLORE</button>
                 </a>
        </section>
      </div>
    );
}
       
     
        
        
       
        
