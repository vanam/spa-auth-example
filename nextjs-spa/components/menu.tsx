import { useKeycloak } from '@react-keycloak/ssr'
import type { KeycloakInstance } from 'keycloak-js'
import Link from 'next/link'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'

import { useState } from 'react'


const Menu = () => {
    console.log("menu")
    const { keycloak, initialized } = useKeycloak<KeycloakInstance>()


    console.log(keycloak)
    console.log(keycloak?.authenticated)

    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Link href="/" as={`/`} passHref>
                        <Navbar.Brand>
                            <img
                                alt="Logo"
                                src="/vercel.svg"
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                            />
                            {' '}Example Auth
                        </Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="navbar-nav" />
                    <Navbar.Collapse id="navbar-nav" className="justify-content-end">
                        <Nav>
                            {keycloak?.authenticated
                            ? 
                            
                            <Button
                                variant="warning"
                                onClick={() => keycloak?.logout()}
                            >
                                Logout
                            </Button>
                            
                            : 
                            <>
                                <span className="navbar-text">Welcome</span>
                                {' '}
                                <Button
                                    variant="success"
                                    onClick={() => keycloak?.login()}
                                >
                                    Login
                                </Button>
                            </>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Menu