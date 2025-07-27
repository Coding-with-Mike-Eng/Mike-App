function MedicineList({ medicines }) {
    return (
        <div className="Table">
            <h2>Medicine List</h2>
            <table border="1" cellPadding="10">
                <thead>
                    <tr>
                        <th>Manufacturer</th> {/* changed */}
                        <th>Product Name</th>
                        <th>Stock</th> {/* changed */}
                        <th>Price (Ksh)</th>
                    </tr>
                </thead>
                <tbody>
                    {medicines.map((med, index) => (
                        <tr key={index}>
                            <td>{med.manufacturer}</td> {/* changed */}
                            <td>{med.name}</td>
                            <td>{med.stock}</td> {/* changed */}
                            <td>{med.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
export default MedicineList;
