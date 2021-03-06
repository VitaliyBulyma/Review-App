import Head from 'next/head';

import {Navbar, Nav, NavDropdown} from 'react-bootstrap';

const Header = ()=>(
    <div style={{marginBottom: '8%'}}>
        <Head>
            <title>Review App</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar  fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/">Review Tool</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav>
                    <NavDropdown title="News" id="collapsible-nav-dropdown">
                        <NavDropdown.Item href="/business">Business</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/technology">Technology</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/science">Science</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/users">Users</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </div>
);


export default Header;