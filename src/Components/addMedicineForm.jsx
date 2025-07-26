import React, { useState } from 'react';

function AddMedicineForm({ onAdd }) {
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [price, setPrice] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !quantity || !price) return;

        onAdd({ name, quantity, price });
        setName('');
        setQuantity('');
        setPrice('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add Medicine</h2>
            <input
                type="text"
                placeholder="Medicine Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="number"
                placeholder="Quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
            />
            <input
                type="number"
                placeholder="Price (Ksh)"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            />
            <button type="submit">Add Medicine</button>
        </form>
    );
}

export default AddMedicineForm;
