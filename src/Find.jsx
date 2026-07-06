import React from "react";
export default function Find(){
    return(
            <div className="bg-black text-white">
         
        <section className="h-screen bg-gradient-to-br from-black via-[#130E22] to-[#2E2050] text-white flex flex-col justify-center items-center text-center px-6 relative overflow-hidden">
                 <h1 className="text-5xl md:text-7xl font-bold mb-6">
                         What's Your Mood Today?
                 </h1><br/><br/>
                 <ul>
                        <li>
                           <button className="bg-yellow-400 text-black px-8 py-4 rounded-full hover:scale-110 transition">
                           Stressed</button>
                        
                        </li><br/>
                        <li>
                            
                            <button className="bg-yellow-400 text-black px-8 py-4 rounded-full hover:scale-110 transition">
                             Mental Fatigue</button>
                            
                        </li>
                        
                 
                 </ul>
                
        </section>
</div>
    );
}
