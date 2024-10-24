import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBRow,
    MDBCol
} from 'mdb-react-ui-kit';

function Cloth() {
    const [apidata, getData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost:4000/").then((result) => {
            result.json().then((data) => {
                console.log(data);
                getData(data);
            });
        });
    }, []);

    const handleProductClick = (id) => {
        navigate(`/product/${id}`);
    };

    return (
        <div>
            <br />
            <MDBRow className='row-cols-1 row-cols-md-4 g-4'>
                {
                    apidata.map((item) =>
                        <MDBCol key={item._id}>
                            <MDBCard onClick={() => handleProductClick(item._id)} style={{ cursor: 'pointer' }}>
                                <br />
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
                                    <MDBCardText>
                                        {item.pdesc}
                                    </MDBCardText>
                                </MDBCardBody>
                                <button>Buy Now</button>
                            </MDBCard>
                        </MDBCol>
                    )
                }
            </MDBRow>
        </div>
    );
}

export default Cloth;
