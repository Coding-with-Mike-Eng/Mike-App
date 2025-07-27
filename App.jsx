import React, { useState, useEffect } from 'react';
import AddMedicineForm from './src/Components/addMedicineForm.jsx';
import MedicineList from './src/Components/MedicineList.jsx';

function App() {
    const [medicines, setMedicines] = useState([]);

    // ✅ Fetch medicines from backend on load
    useEffect(() => {
        fetch('https://inventory-backend-0x8j.onrender.com') // <-- REPLACE this with actual backend URL
            .then(res => res.json())
            .then(data => setMedicines(data))
            .catch(err => console.error('Error fetching medicines:', err));
    }, []);

    // ✅ Add medicine and send to backend
    const addMedicine = (medicine) => {
        fetch('https://inventory-backend-0x8j.onrender.com', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(medicine)
        })
        .then(res => res.json())
        .then(savedMedicine => {
            setMedicines([...medicines, savedMedicine]);
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
