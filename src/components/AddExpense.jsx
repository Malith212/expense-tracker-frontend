import { useState } from 'react';
import axios from 'axios';

const AddExpense = () => {
    const [form, setForm] = useState({ category: '', description: '', amount: '', date: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://127.0.0.1:5000/expenses', form);
        alert('Expense added successfully!');
    };

    return (
        <form className="p-8" onSubmit={handleSubmit}>
            <input name="category" placeholder="Category" onChange={handleChange} />
            <input name="description" placeholder="Description" onChange={handleChange} />
            <input name="amount" placeholder="Amount" type="number" onChange={handleChange} />
            <input name="date" placeholder="Date" type="date" onChange={handleChange} />
            <button type="submit" className="bg-green-500 px-4 py-2">Add</button>
        </form>
    );
};

export default AddExpense;
