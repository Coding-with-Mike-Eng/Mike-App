function MedicineList({ medicines }) {
    return (
        <div className="Table">
            <h2>Medicine List</h2>
            <table border="1" cellPadding="10">
                <thead>
                <tr>
                    <th>Supplier Name</th>
                    <th>Product Name</th>
                    <th>Quantity</th>
                    <th>Price (Ksh)</th>
                </tr>
                </thead>
                <tbody>
                {medicines.map((med, index) => (
                    <tr key={index}>
                        <td>{med.name}</td>
                        <td>{med.quantity}</td>
                        <td>{med.price}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default MedicineList;