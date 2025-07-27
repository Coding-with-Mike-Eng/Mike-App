import React, { useState, useEffect } from 'react';
import AddMedicineForm from './src/Components/addMedicineForm.jsx';
import MedicineList from './src/Components/MedicineList.jsx';

function App() {
    const [medicines, setMedicines] = useState([]);

    const backendUrl = 'https://inventory-backend-0x8j.onrender.com/api/medicines';

    // ✅ Fetch medicines on mount and ensure it's an array
    useEffect(() => {
        fetch(backendUrl)
            .then(res => res.json())
            .then(data => {
                if (Array.isArray(data)) {
                    setMedicines(data);
                } else {
                    console.error('❌ Fetched data is not an array:', data);
                    setMedicines([]); // fallback
                }
            })
            .catch(err => {
                console.error('Error fetching medicines:', err);
                setMedicines([]); // fallback on error
            });
    }, []);

    // Log medicines whenever they update
    useEffect(() => {
        console.log("✅ Updated medicine list:", medicines);
    }, [medicines]);

    // ✅ Add new medicine to backend, then append to state
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
            .then(savedMedicine => {
                console.log('✅ Saved from backend:', savedMedicine);
                setMedicines(prev => [...prev, savedMedicine]);
            })
            .catch(err => console.error('❌ Error adding medicine:', err));
    };

    // 🧪 Bonus: Add dummy data directly for testing
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

            <button onClick={addDummyMedicine} style={{ margin: '10px', backgroundColor: 'lightgray' }}>
                ➕ Add Dummy Medicine (for testing)
            </button>

            <MedicineList medicines={medicines} />
        </div>
    );
}

export default App;


