import React, { useState, useEffect } from 'react';
import AddMedicineForm from './src/Components/addMedicineForm.jsx';
import MedicineList from './src/Components/MedicineList.jsx';

function App() {
    const [medicines, setMedicines] = useState([]);

    const backendUrl = 'https://your-backend.onrender.com/api/medicines'; // ⛳ Replace with your actual backend

    // Fetch medicines on mount
    useEffect(() => {
        fetch(backendUrl)
            .then(res => res.json())
            .then(data => setMedicines(data))
            .catch(err => console.error('Error fetching medicines:', err));
    }, []);

    // Log medicines whenever they update
    useEffect(() => {
        console.log("Updated medicine list:", medicines);
    }, [medicines]);

    // Add new medicine to backend, then re-fetch
    const addMedicine = (medicine) => {
        fetch(backendUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(medicine)
        })
        .then(res => {
            if (!res.ok) throw new Error('Failed to add medicine');
            return res.json();
        })
        .then(() => {
            // Re-fetch all medicines
            return fetch(backendUrl);
        })
        .then(res => res.json())
        .then(data => setMedicines(data))
        .catch(err => console.error('Error:', err));
    };

    // 🔧 BONUS: Add a dummy medicine directly
    const addDummyMedicine = () => {
        setMedicines(prev => [
            ...prev,
            {
                manufacturer: 'Test Co',
                name: 'Paracetamol',
                stock: 100,
                price: 50,
                expiryDate: new Date().toISOString()
            }
        ]);
    };

    return (
        <div className="container">
            <h1>MiPoll Inventory System</h1>
            <AddMedicineForm onAdd={addMedicine} />

            {/* 🔧 BONUS BUTTON HERE */}
            <button onClick={addDummyMedicine} style={{ margin: '10px', backgroundColor: 'lightgray' }}>
                ➕ Add Dummy Medicine (for testing)
            </button>

            <MedicineList medicines={medicines} />
        </div>
    );
}

export default App;

