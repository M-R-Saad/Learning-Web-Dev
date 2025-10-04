import React, { useState } from 'react';
import ProductForm from './ProductForm';
import ProductTable from './ProductTable';

const ProductManagement = () => {

    const [products, setProducts] = useState([]);

    const addProduct = (product) => {
        setProducts([...products, product]);
    }

    return (
        <div>
            <ProductForm addProduct={addProduct}></ProductForm>
            <ProductTable products={products}></ProductTable>
        </div>
    );
};

export default ProductManagement;