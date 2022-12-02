import React from 'react';
//import ProductList from './ProductList';
import ProductTable from './ProductTable';
import ProductHeader from './ProductHeader';
import ProductForm from './ProductForm';
import ProductFooter from './ProductFooter';



class ProductApp extends React.Component {
    render() {
        


        return (
            <div>
                <ProductHeader />
                <ProductForm />
                <ProductTable name= "컴퓨터"/>
                <ProductFooter />
            </div>
            

        );
    }
}

export default ProductApp;


