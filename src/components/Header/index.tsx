import * as React from "react";
import styled, {css} from 'styled-components';
import random from "../../helpers/random";
import {useState} from "react";

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
    display: flex;
    justify-content: center;
    color: #fff;

    > span {
        display: block;
        transition: 1s;
        position: relative;
        z-index: 2;

        &::before {
            content: attr(data-letter);
            position: absolute;
            z-index: 1;
            opacity: 0.2;
            text-shadow: 0 0 1rem #fff;
            margin-top: 0;
            color: #fff;
        }

        &.blink {
            opacity: 1;
            animation: brokenFlash 10s linear infinite;
            text-shadow: none;
            margin-top: -0.75rem;
            color: #0099A3;
            @keyframes brokenFlash {
                0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100% {
                    opacity: .99;
                    text-shadow: 0 0 0.25rem #0099A3;
                }
                20%, 21.999%, 63%, 63.999%, 65%, 69.999% {
                    opacity: 0.4;
                    text-shadow: none;
                }
            }

            &::before {
                margin-top: 0.75rem;
                color: #0099A3; 
            }
        }
    }
`;

const Tag = styled.h6`
    font-size: 0.8rem;
    ${fadeIn};
    animation: fadeIn 1.5s;
`;

const getTitle = (firstTime?: boolean): object => {
    const word = 'MORKALORK';
    const randomLetterIndex = random(firstTime ? 1 : 0, word.length - (firstTime ? 2 : 1));

    return word
        .split('')
        .map((letter: string, index: number) =>
            <span key={index}
                  className={index === randomLetterIndex ? 'blink' : ''}
                  data-letter={letter}
            >
                {letter}
            </span>
        );
};

const Header: React.FunctionComponent = () => {
    const [title, setTitle] = useState(getTitle(true));

    setTimeout(() => setTitle(getTitle()), 5000);

    return <Wrapper>
        <Title>{title}</Title>
        <Tag>By Magnus Ferm</Tag>
    </Wrapper>;
};

export default Header;