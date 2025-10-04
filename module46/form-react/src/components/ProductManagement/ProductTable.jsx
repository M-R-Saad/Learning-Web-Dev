import React from 'react';

const ProductTable = ({ products }) => {

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4 text-center">Product List of <span className="text-blue-500">{products.length}</span> Products!</h2>
            <table className="w-full bg-white border border-gray-200 rounded-lg shadow">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="py-2 px-2 border-b text-center">No.</th>
                        <th className="py-2 px-2 border-b text-center">Name</th>
                        <th className="py-2 px-2 border-b text-center">Price</th>
                        <th className="py-2 px-2 border-b text-center">Quantity</th>
                        <th className="py-2 px-2 border-b text-center">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                            <td className="py-2 px-2 border-b text-center">{index + 1}</td>
                            <td className="py-2 px-2 border-b text-center">{product.name}</td>
                            <td className="py-2 px-2 border-b text-center">{product.price}</td>
                            <td className="py-2 px-2 border-b text-center">{product.quantity}</td>
                            <td className="py-2 px-2 border-b text-center">
                                <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProductTable;