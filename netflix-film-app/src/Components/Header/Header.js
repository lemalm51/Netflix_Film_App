

import "../Styles/bootstrap.css"
import "../Header/header.css"
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from "react-router-dom"; 


function Header() {
  return (
    <div>
      <Navbar bg="dark" variant={'dark'} expand="lg" className="">
        <Container fluid>
          <div className="Header">
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0 "
                style={{ maxHeight: '600px' }}
                navbarScroll>
                <Nav.Link as={Link} to="/Rows/Row/Trending" className='Header'>Trending</Nav.Link>
                <Nav.Link as={Link} to="/Rows/Row/TopRated" className='Header' >TopRated</Nav.Link>
                <Nav.Link as={Link} to="/Rows/Row/ActionMovie" className='Header'>ActionMovie </Nav.Link>
                <Nav.Link as={Link} to="/Rows/Row/ComedyMovie" className='Header'>ComedyMovie </Nav.Link>
                <Nav.Link as={Link} to="/Rows/Row/HorrorMovie" className='Header'>HorrorMovie</Nav.Link>
                <Nav.Link as={Link} to="/Rows/Row/RomanceMovie" className='Header'>RomanceMovie</Nav.Link>
                <Nav.Link as={Link} to="/Rows/Row/TvShow" className='Header'>TvShow</Nav.Link>
                <Nav.Link as={Link} to="/Rows/Row/Documentaries" className='Header'>Documentaries</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
      
     
      <section>
        <div className='container-fluid'>
          <h1 className='welcomeText'>Enjoy The World Of Actors!!</h1>
        </div>
      </section>

    </div>
  );
}

export default Header;