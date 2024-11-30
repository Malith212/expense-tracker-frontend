import { useState, useEffect } from 'react';
import axios from 'axios';

const Summary = () => {
    const [expenses, setExpenses] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:5000/expenses').then((response) => setExpenses(response.data));
    }, []);

    return (
        <div className="p-8">
            {expenses.map((expense) => (
                <div key={expense.id} className="border p-4 my-2">
                    <p>{expense.category}</p>
                    <p>{expense.description}</p>
                    <p>${expense.amount}</p>
                    <p>{expense.date}</p>
                </div>
            ))}
        </div>
    );
};

export default Summary;
