function MedicineList({ medicines }) {
    if (!Array.isArray(medicines)) {
        return <p>⚠️ Error: Medicines data is not an array.</p>;
    }

    return (
        <div className="Table">
            <h2>Medicine List</h2>
            <table border="1" cellPadding="10">
                <thead>
                    <tr>
                        <th>Manufacturer</th>
                        <th>Product Name</th>
                        <th>Stock (pcs)</th>
                        <th>Price (Ksh)</th>
                        <th>Expiry Date</th>
                    </tr>
                </thead>
                <tbody>
                    {medicines.map((med, index) => (
                        <tr key={index}>
                            <td>{med.manufacturer}</td>
                            <td>{med.name}</td>
                            <td>{med.stock}</td>
                            <td>{med.price}</td>
                            <td>{med.expiryDate ? new Date(med.expiryDate).toLocaleDateString() : 'N/A'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

}

export default MedicineList;

