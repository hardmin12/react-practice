import React, {Component} from 'react';
import ProductRow from './ProductRow';
import './App.css';

class ProductTable extends Component {
    constructor(props) {
        super(props);
        this.state = { //데이터의 원천?
            products: [
                {
                    name:"Samsung S23 Plus",
                    type:"Mobile",
                    description:"이번엔 제대로 나와 줬으면...",
                    brand:"Samsung"
                },
           
                {
                    name:"iphone 15",
                    type:"Mobile",
                    description:"예쁠듯",
                    brand:"Apple"
                },
           
                {
                    name:"Lg1",
                    type:"Mobile",
                    description:"몰랐음",
                    brand:"lg"
                },

                {
                    name:"Kanon",
                    type:"Camera",
                    description:"비쌀까?",
                    brand:"캐논"

                }


            ]
        }
    }

    render() {
        return (
            <div>
                <table border="1">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Type</th>
                            <th>brand</th>
                            <th>description</th>
                            <th>Edit</th>
                            <th>Delete</th>
                            <th>View</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.products.map((detail,i) => <ProductRow key={i} product={detail}/>)}
                        </tbody>
                        
                        
            
                        </table>
                    </div>

                    );
    }

}
    
export default ProductTable;