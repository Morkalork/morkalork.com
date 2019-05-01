import * as React from "react";
import styled from 'styled-components';
import AnimateHeight from "react-animate-height";

const Wrapper = styled.div`
  border: 2px #555 solid;
  padding: 1rem;
  margin: 0.25rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  transition: 1s;
  &.showing {
    border-color: #fff;
    background-color: #121212;
  }
  
  &:hover {
    cursor: pointer;
    &:not(.showing) {
      border-color: #222;
    }
  }
  
  > div {
    width: 100%; // To avoid problems with auto-height plugin sheize
  }
`;

const Title = styled.h3`
    font-weight: bold;
    font-size: 1.5rem;
`;

const Content = styled.div`
  margin-top: 2rem;
`;

type InfoButtonProps = {
    title: string,
    showContent: boolean,
    onClick: (event: React.MouseEvent<HTMLDivElement>) => void
};

const InfoButton: React.FunctionComponent<InfoButtonProps> = ({title, showContent, onClick, children}) => {
    const height = showContent ? 'auto' : 0;
    return <Wrapper onClick={onClick} className={showContent ? 'showing' : ''}>
        <Title>{title}</Title>
        <AnimateHeight duration={500} height={height}>
            <Content>
                {children}
            </Content>
        </AnimateHeight>
    </Wrapper>;
};

export default InfoButton;