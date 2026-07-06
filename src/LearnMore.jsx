import React,{useState,useEffect} from "react";
import { useParams,useNavigate } from "react-router-dom";
import axios from "axios";
export default function LearnMore(){
    const navigate=useNavigate();
    const [raag, setRaag] = useState(null);
    const {id}=useParams();
       useEffect(() => {
        axios.get(`http://localhost:3000/raag/${id}`)
            .then(res => {
                setRaag(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, [id]);
     if (!raag) return (
        <div className="min-h-screen bg-gradient-to-br from-black via-[#130E22] to-[#2E2050] text-white flex items-center justify-center">
            <p className="text-2xl text-zinc-400 animate-pulse">Loading...</p>
        </div>
    );
    return(
        <div className="min-h-screen bg-gradient-to-br from-black via-[#130E22] to-[#2E2050] text-white">
        {/* Hero */}
            <section className="relative py-28 flex flex-col items-center justify-center text-center px-6 overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/10 blur-3xl rounded-full" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500/10 blur-3xl rounded-full" />
                <p className="text-yellow-400 text-sm font-semibold tracking-widest uppercase mb-4">Raag Explorer</p>
                <h1 className="text-5xl md:text-7xl font-bold mb-6">{raag.name}</h1>
                <div className="flex gap-4 flex-wrap justify-center">
                    <span className="bg-yellow-400/10 border border-yellow-400/30 text-yellow-300 px-4 py-1.5 rounded-full text-sm">{raag.mood}</span>
                    <span className="bg-purple-400/10 border border-purple-400/30 text-purple-300 px-4 py-1.5 rounded-full text-sm">{raag.time}</span>
                </div>
            </section>
           {/* Detail Cards */}
            <section className="max-w-5xl mx-auto px-6 pb-20 grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Thaat */}
                <div className="relative overflow-hidden rounded-3xl border border-yellow-500/20 bg-[#140E22]/85 p-6 backdrop-blur-sm">
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 via-transparent to-transparent" />
                    <div className="relative z-10">
                        <p className="text-yellow-400 text-xs font-semibold tracking-widest uppercase mb-2">Thaat</p>
                        <p className="text-2xl font-bold">{raag.thaat}</p>
                    </div>
                </div>

                {/* Vadi & Samvadi */}
                <div className="relative overflow-hidden rounded-3xl border border-yellow-500/20 bg-[#140E22]/85 p-6 backdrop-blur-sm">
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 via-transparent to-transparent" />
                    <div className="relative z-10 flex gap-8">
                        <div>
                            <p className="text-yellow-400 text-xs font-semibold tracking-widest uppercase mb-2">Vaadi</p>
                            <p className="text-2xl font-bold">{raag.vaadi}</p>
                        </div>
                        <div>
                            <p className="text-yellow-400 text-xs font-semibold tracking-widest uppercase mb-2">Samvaadi</p>
                            <p className="text-2xl font-bold">{raag.samvaadi}</p>
                        </div>
                    </div>
                </div>

                {/* Aaroh */}
                <div className="relative overflow-hidden rounded-3xl border border-yellow-500/20 bg-[#140E22]/85 p-6 backdrop-blur-sm">
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 via-transparent to-transparent" />
                    <div className="relative z-10">
                        <p className="text-yellow-400 text-xs font-semibold tracking-widest uppercase mb-2">Aaroh</p>
                        <p className="text-xl font-medium tracking-wide">{raag.aaroh}</p>
                    </div>
                </div>

                {/* Avroh */}
                <div className="relative overflow-hidden rounded-3xl border border-yellow-500/20 bg-[#140E22]/85 p-6 backdrop-blur-sm">
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 via-transparent to-transparent" />
                    <div className="relative z-10">
                        <p className="text-yellow-400 text-xs font-semibold tracking-widest uppercase mb-2">Avroh</p>
                        <p className="text-xl font-medium tracking-wide">{raag.avroh}</p>
                    </div>
                </div>

                {/* Pakad — full width */}
                <div className="relative overflow-hidden rounded-3xl border border-yellow-500/20 bg-[#140E22]/85 p-6 backdrop-blur-sm md:col-span-2">
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 via-transparent to-transparent" />
                    <div className="relative z-10">
                        <p className="text-yellow-400 text-xs font-semibold tracking-widest uppercase mb-2">Pakad</p>
                        <p className="text-xl font-medium tracking-wide">{raag.pakad}</p>
                    </div>
                </div>

                {/* Description — full width */}
                <div className="relative overflow-hidden rounded-3xl border border-purple-500/20 bg-[#140E22]/85 p-6 backdrop-blur-sm md:col-span-2">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-transparent" />
                    <div className="relative z-10">
                        <p className="text-purple-300 text-xs font-semibold tracking-widest uppercase mb-3">About this Raag</p>
                        <p className="text-zinc-300 leading-relaxed text-lg">{raag.description}</p>
                    </div>
                </div>

                {/* Listen Link — full width */}
                {raag.listen_link && (
                    <div className="md:col-span-2 flex flex-col items-center gap-4 rounded-3xl border border-yellow-500/20 bg-[#140E22]/85 p-8 backdrop-blur-sm text-center">
                        <p className="text-zinc-300 text-lg">This raag seems interesting? Wanna hear how it sounds?</p>
                        <a
                            href={raag.listen_link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 hover:scale-105 transition"
                        >
                            🎵 Listen on YouTube
                            
                        </a>
                    </div>
                )}

            </section>

            {/* Back Button */}
            <div className="flex justify-center pb-16">
                <button
                    onClick={() => navigate(-1)}
                    className="border border-yellow-400/40 text-yellow-400 px-6 py-2 rounded-full hover:bg-yellow-400/10 transition text-sm"
                >
                    ← Back to Raag Explorer
                </button>
            </div>

        </div>
    );
}