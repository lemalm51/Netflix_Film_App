import "../Styles/bootstrap.css"
import "../Header/header.css"
import { Navbar, Nav, Container } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Routes,  // Changed from Switch
  Route,
  Link} from "react-router-dom";
// import Memories from './Memories';
// import Members from './Members';
// import Vision from './Vision';
// import Contact from './Contact';
// import Comment from './Comment';
// import "./Styles/header.css"

function Header() {
  return (
    <Router>
      <div>
        <Navbar bg="dark" variant={'dark'}  expand="lg" className="">
          <Container fluid>
            <div className="Header">
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0 "
                style={{ maxHeight: '600px' }}
                navbarScroll>

                <Nav.Link as={Link} to="#" className='Header' >Trending Now</Nav.Link>
                <Nav.Link as={Link} to="#" className='Header'>Top Rated </Nav.Link>
                <Nav.Link as={Link} to="#" className='Header'>Action Movies</Nav.Link>
                <Nav.Link as={Link} to="#" className='Header'>Comedy Movies</Nav.Link>
                <Nav.Link as={Link} to="#" className='Header'>Horror Movies</Nav.Link>
                <Nav.Link as={Link} to="#" className='Header'>Romance Movies</Nav.Link>
                <Nav.Link as={Link} to="#" className='Header'>TV Shows</Nav.Link>
                <Nav.Link as={Link} to="#" className='Header'>Documentaries</Nav.Link>

              </Nav>
              
            </Navbar.Collapse>
            </div>
          </Container>
        </Navbar>
       
      </div>

       <section>
          <div className='container-fluid'>
            <h1 className=''>Wel-Come To World Of Actors!!!</h1>
          </div>
        </section>

      <div>
        {/* <Routes>
          <Route path="#" element={<# />} />
          <Route path="#" element={<Contact />} />
          <Route path="#" element={<Memories />} />
          <Route path="#" element={<Vision />} />
          <Route path="#" element={<Comment />} />


        </Routes> */}
      </div>
    </Router>
  );
}

export default Header;