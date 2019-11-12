import React from "react";
import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";

const Header = styled.header`
    display: flex;
    padding: 10px 15px;
    background-color: purple;
    color: white;
    a {
        display: inline-block;
        padding: 10px 5px;
        border-bottom: 1px solid purple;
        &:hover {
            border-bottom: 1px solid white;
        }
    }
`;

const Footer = styled.footer`
    border-top: 1px solid lightgray;
    padding: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Wrapper = styled.div`
display: flex;
flex-direction: column;
min-height: 100vh;
overflow: hidden;
`;

const Content = styled.section`
flex: 1 0 auto;
padding: 5px 10px;
`;

const Layout = ({ children }) => {
    return (
        <Wrapper>
            <Head>
                <title>Page animations</title>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            <Header>
                <nav>
                    <Link  href="/">
                        <a>Home</a>
                    </Link>

                    <Link href="/about">
                        <a>About</a>
                    </Link>

                    <Link href="/contact">
                        <a>Contact</a>
                    </Link>
                </nav>
            </Header>
            <Content>{children}</Content>

            <Footer>{"I`m here to stay, I am your sticky footer"}</Footer>
        </Wrapper>
    );
};

export default Layout;
