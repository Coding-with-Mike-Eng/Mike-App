import React, { useState } from 'react';

function AddMedicineForm({ onAdd }) {
    const [supplierName, setSupplierName] = useState('');
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [price, setPrice] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const newMedicine = {
            supplierName,
            name,
            quantity: parseInt(quantity),
            price: parseFloat(price),
        };

        onAdd(newMedicine);

        // Reset form
        setSupplierName('');
        setName('');
        setQuantity('');
        setPrice('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Supplier Name"
                value={supplierName}
                onChange={(e) => setSupplierName(e.target.value)}
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
                placeholder="Quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                required
            />
            <input
                type="number"
                placeholder="Price (Ksh)"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
            />
            <button type="submit">Add Medicine</button>
        </form>
    );
}

export default AddMedicineForm;

