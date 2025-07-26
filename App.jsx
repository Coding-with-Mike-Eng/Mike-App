import React, { useState } from 'react';
import AddMedicineForm from './src/Components/addMedicineForm.jsx';
import MedicineList from './src/Components/MedicineList.jsx';

function App() {
    const [medicines, setMedicines] = useState([]);

    const addMedicine = (medicine) => {
        setMedicines([...medicines, medicine]);
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
