import React, { useState, useEffect } from 'react';
import AddMedicineForm from './src/Components/addMedicineForm.jsx';
import MedicineList from './src/Components/MedicineList.jsx';

function App() {
    const [medicines, setMedicines] = useState([]);

    const backendUrl = 'https://inventory-backend-0x8j.onrender.com'; 

    // ✅ Fetch all medicines when app loads
    useEffect(() => {
        fetch(backendUrl)
            .then(res => res.json())
            .then(data => {
                setMedicines(data);
                console.log('Fetched medicines:', data);
            })
            .catch(err => console.error('Error fetching medicines:', err));
    }, []);

    // ✅ Add a new medicine and update the list
    const addMedicine = (medicine) => {
        fetch(backendUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(medicine)
        })
        .then(res => {
            if (!res.ok) {
                throw new Error('Failed to add medicine');
            }
            return res.json();
        })
        .then(savedMedicine => {
            console.log('Saved medicine:', savedMedicine);
            setMedicines(prev => [...prev, savedMedicine]);
        })
        .catch(err => console.error('Error adding medicine:', err));
    };

    return (
        <div className="container">
            <h1>MiPoll Inventory System</h1>
            <AddMedicineForm onAdd={addMedicine} />
            <MedicineList medicines={medicines} />
        </div>
    );
}

export default App;
