import axios from "axios";
import React, { useState } from "react";

function Upload() {
    const [pid, setPID] = useState();
    const [pname, setName] = useState();
    const [pprice, setPrice] = useState();
    const [pcat, setCat] = useState();
    ;
    const [pimg, setImage] = useState();
    function submitForm(e) {
        e.preventDefault();
        // console.log(pid, pname, pprice, pcat);
        const url = "http://localhost:4000/";
        const formData = new FormData()
        formData.append("pid", parseInt(pid))
        formData.append("pname", pname)
        formData.append("pprice", parseInt(pprice))
        formData.append("pcat", pcat)

        formData.append("pimg", pimg)
        axios.post(url, formData).then((result) => {
            console.log(result.data);
            alert("data save succesfull")
        });
    }

    return (
        <div>
            <center>
                <form>
                    <input
                        type="number"
                        placeholder="Product ID"
                        onChange={(e) => setPID(e.target.value)}
                    />
                    <br></br>
                    <input
                        type="text"
                        placeholder="Product Name"
                        onChange={(e) => setName(e.target.value)}
                    />
                    <br></br>
                    <input
                        type="number"
                        placeholder="Product Price"
                        onChange={(e) => setPrice(e.target.value)}
                    />
                    <br></br>
                    Select Categories &nbsp;
                    <select onChange={(e) => setCat(e.target.value)}>
                        <option>Electronics</option>
                        <option>Cloth</option>
                        <option>Mobile</option>
                    </select>
                    <br></br>
                    <center>
                        Upload Image <input type="file" onChange={(e) => setImage(e.target.files[0])} />
                        <br></br>
                    </center>
                    <button onClick={submitForm}>Submit</button>
                </form>
            </center>
        </div>
    );
}

export default Upload;

