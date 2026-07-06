import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="flex bg-[#0D0A14]/90 backdrop-blur-md text-white px-8 py-5 justify-between items-center sticky top-0 z-50">
            <div className="text-2xl font-bold">Anant Naad</div>
            <ul className="hidden md:flex gap-8">
                <li><Link to="/" className="hover:text-yellow-400">Home</Link></li>
                <li><Link to="/raag" className="hover:text-yellow-400">Raag Explorer</Link></li>
                <li><Link to="/riyaz" className="hover:text-yellow-400">Riyaz Zone</Link></li>
                <li><Link to="/find" className="hover:text-yellow-400">Find Your Raag</Link></li>
                <li><Link to="/roots" className="hover:text-yellow-400">Roots</Link></li>
            </ul>
        </nav>
    );
}