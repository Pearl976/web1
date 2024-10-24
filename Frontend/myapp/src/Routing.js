import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './Nav';
import GetData from './GetData';
import About from './About';
import Mycard from './Mycard';

import Productdetails from './Productdetails';
import Cloth from './Cloth';
import Upload from './Upload';

function Routing() {
    // const [categories, setCategories] = useState([]);

    
    return (
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route path="/" element={<GetData />} />
                <Route path="/about" element={<About />} />
                <Route path="/mycard" element={<Mycard />} />
                <Route path="/upload" element={<Upload></Upload>} />
                <Route path="/cloth" element={<Cloth></Cloth>} />
                <Route path="/product/:id" element={<Productdetails />} />

            </Routes>
        </BrowserRouter>
    );
}

export default Routing;
