import React from 'react';
import {DropdownButton, Dropdown, Nav, Container, Badge, Button} from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';

const NavLayout = ({array: wallets = []}) => (
    <Navbar className="bg-body-tertiary" data-bs-theme="dark">
      <Navbar.Brand href="#home" className="m-2">
            <img
              src="/images/waffle-icon.svg"
              width="50"
              height="50"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
        </Navbar.Brand>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Swap</Nav.Link>
            <Nav.Link href="#link">Link Accounts</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        {/*{*/}
        {/*  wallets.length > 0 ? (*/}
        {/*    <DropdownButton*/}
        {/*      id="dropdown-button-dark-example2"*/}
        {/*      variant="secondary"*/}
        {/*      title="Light dropdown"*/}
        {/*      className="justify-content-end"*/}
        {/*      data-bs-theme="dark"*/}
        {/*    >*/}
        {/*      {*/}
        {/*        wallets.map((wallet, index) => {*/}
        {/*          <Dropdown.Item href="#/action-1" active={index == 0}>*/}
        {/*            {wallet.name}*/}
        {/*          </Dropdown.Item>*/}
        {/*        })*/}
        {/*      }*/}
        {/*      <Dropdown.Item href="/wallets/new">Connect Wallet</Dropdown.Item>*/}
        {/*    </DropdownButton>*/}
        {/*  ) : (*/}
        {/*      <Button onClick={} variant="primary">Connect DeFi Wallet</Button>*/}
        {/*  )*/}
        {/*}*/}
      </Container>
    </Navbar>
);

export default NavLayout;