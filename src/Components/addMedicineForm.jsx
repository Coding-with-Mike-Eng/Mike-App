import React, { useState } from 'react';

function AddMedicineForm({ onAdd }) {
    const [manufacturer, setManufacturer] = useState('');
    const [name, setName] = useState('');
    const [stock, setStock] = useState('');
    const [price, setPrice] = useState('');
    const [expiryDate, setExpiryDate] = useState(''); // optional

    const handleSubmit = (e) => {
        e.preventDefault();

        const newMedicine = {
            manufacturer,
            name,
            stock: parseInt(stock),
            price: parseFloat(price),
            expiryDate: expiryDate ? new Date(expiryDate) : null
        };

        onAdd(newMedicine);

        // Reset form fields
        setManufacturer('');
        setName('');
        setStock('');
        setPrice('');
        setExpiryDate('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Manufacturer"
                value={manufacturer}
                onChange={(e) => setManufacturer(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Product Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <input
                type="number"
                placeholder="Stock"
                value={stock}
                onChange={(e) => setStock(e.target.value)}
                required
            />
            <input
                type="number"
                placeholder="Price (Ksh)"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
            />
            <input
                type="date"
                placeholder="Expiry Date"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
            />
            <button type="submit">Add Medicine</button>
        </form>
    );
}

export default AddMedicineForm;
