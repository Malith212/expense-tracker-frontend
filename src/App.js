import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AddExpense from './components/AddExpense';
import Summary from './components/Summary';

function App() {
   return (
       <Router>
           <Navbar />
           <Routes>
               <Route path="/add" element={<AddExpense />} />
               <Route path="/summary" element={<Summary />} />
           </Routes>
       </Router>
   );
}

export default App;
