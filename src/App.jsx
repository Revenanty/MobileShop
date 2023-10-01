import Footer from './Component/Footer';
import Home from './Component/Home';
import Navbar from './Component/Navbar';
import { Routes, Route } from 'react-router-dom';
import Nothing from './util/Nothing';
import Phones from './util/Phones';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <section>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/phones" element={<Phones></Phones>}></Route>
          <Route path="/nothing" element={<Nothing></Nothing>}></Route>
        </Routes>
      </section>
      <Footer></Footer>
    </>
  );
}

export default App;
