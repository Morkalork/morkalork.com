import * as React from "react";
import styled, {css} from 'styled-components';

const fadeIn = css`
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
`;

const Wrapper = styled.header`
    text-align: center;
    padding: 1rem;
`;

const Title = styled.h1`
    font-size: 3rem;
    border-bottom: 2px #fff solid;
    margin-bottom: 0.5rem;
    padding-bottom: 0.5rem;
    ${fadeIn};
    animation: fadeIn 0.5s;
`;

const Tag = styled.h6`
    font-size: 0.8rem;
    ${fadeIn};
    animation: fadeIn 1.5s;
`;

const Header: React.FunctionComponent = () => {
    return <Wrapper>
        <Title>Morkalork</Title>
        <Tag>By Magnus Ferm</Tag>
    </Wrapper>;
};

export default Header;