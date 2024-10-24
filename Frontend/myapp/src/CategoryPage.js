import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBRow,
    MDBCol
} from 'mdb-react-ui-kit';
import './cat.css';

function CategoryPage() {
    const { cat } = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:4000/cloth/`).then((result) => {
            result.json().then((data) => {
                setProducts(data);
            });
        });
    }, [cat]);

    if (products.length === 0) {
        return <div>No products found in this category</div>;
    }

    return (
        <div>
            <h1>Products in {cat}</h1>
            <MDBRow className='row-cols-1 row-cols-md-4 g-4'>
                {products.map((item) =>
                    <MDBCol key={item._id}>
                        <MDBCard>
                            <center>
                                <MDBCardImage
                                    src={item.pimg}
                                    alt='...'
                                    position='top'
                                    style={{ width: "200px", height: "190px" }}
                                />
                            </center>
                            <MDBCardBody>
                                <MDBCardTitle>{item.pname}</MDBCardTitle>
                                <MDBCardTitle>{item.pprice} RS</MDBCardTitle>
                                <MDBCardTitle>{item.pcat}</MDBCardTitle>
                                <MDBCardText>{item.pdesc}</MDBCardText>
                            </MDBCardBody>
                            <button>Buy Now</button>
                        </MDBCard>
                    </MDBCol>
                )}
            </MDBRow>
        </div>
    );
}

export default CategoryPage;
