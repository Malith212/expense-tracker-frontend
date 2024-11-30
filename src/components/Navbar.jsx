import { Link } from 'react-router-dom';

const Navbar = () => (
    <nav className="bg-blue-500 p-4 text-white">
        <div className="container mx-auto flex justify-between">
            <Link to="/" className="font-bold">Expense Tracker</Link>
            <div>
                <Link to="/add" className="px-4">Add Expense</Link>
                <Link to="/summary" className="px-4">Summary</Link>
            </div>
        </div>
    </nav>
);

export default Navbar;
