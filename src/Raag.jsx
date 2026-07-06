import React,{useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function Raag() {
  const navigate = useNavigate();
  const [raags, setRaags] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/raags")
        .then(res => {
            console.log(res.data);
            setRaags(res.data);
        })
        .catch(err => {
            console.log(err);
        });
}, []);

return ( 
   
<div className="min-h-screen bg-gradient-to-br from-black via-[#130E22] to-[#2E2050] text-white">


  {/* Hero */}
  <section className="py-24 flex flex-col items-center">
    <h1 className="text-5xl md:text-7xl font-bold mb-8">
      Explore Raags
    </h1>

    <input
      type="text"
      placeholder="Search Raag..."
     className="w-80 px-5 py-3 rounded-full text-white bg-white/10 border border-yellow-500/20 outline-none placeholder-zinc-400 focus:border-yellow-400/50 transition"
    />
  </section>

   {/* Cards */}
    <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 pb-16">

      {raags.map((raag) => (
          <div
               key={raag.ID}
               className="relative overflow-hidden rounded-3xl border border-yellow-500/20 bg-[#140E22]/85 p-6 backdrop-blur-sm hover:border-yellow-400/50 transition-all duration-300"
                >
               <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 via-transparent to-transparent" />

                <div className="relative z-10">
                 <h2 className="text-3xl font-bold mb-4">
                      {raag.name}
                  </h2>

                <p className="text-zinc-300">
                    <span className="font-semibold text-white">
                        Time:
                     </span>{" "}
                                {raag.time}
                </p>

                <p className="text-zinc-300 mt-2">
                     <span className="font-semibold text-white">
                         Mood:
                       </span>{" "}
                        {raag.mood}
                 </p>

                  <button
                    className="mt-6 bg-yellow-400 text-black px-5 py-2 rounded-full font-medium hover:scale-105 transition"
                     onClick={() => navigate(`/raag/${raag.ID}`)}
                      >
                      Learn More
                    </button>
               </div>
          </div>
         ))}

      </section>
    </div>
    );
}

