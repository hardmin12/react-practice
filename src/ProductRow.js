import React, {Component} from "react";

class ProductRow extends Component {


    handleDeleteClick = (id) => {
        if(!window.confirm("정말로 삭제하시겠습니까?")) {
        }else{

      fetch('http://localhost:7090/products/' +id,
        {
            method: 'DELETE',
        })
        .then(response => {
            console.log('삭제되었습니다.', JSON.stringify(response));
            window.location.reload(false);
        })
        .catch(error => console.log('에러:', error));

        }
    }
        
        

      
    

    render() {
        return (
            <tr>
                <td>{this.props.product.name}</td>
                <td>{this.props.product.type}</td>
                <td>{this.props.product.brand}</td>
                <td>{this.props.product.description}</td>
                <td><a href="#">수정</a></td>
                <td><a href="#" onClick={() => this.handleDeleteClick(this.props.product.id)}>삭제</a></td>
                <td><a href="#">뷰</a></td>
            </tr>
        );
    }
}

export default ProductRow;