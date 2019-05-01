import * as React from "react";
import styled from 'styled-components';
import Header from "../../components/Header";
import InfoButtons from "../../components/InfoButtons";

const backgroundImage = require('../../assets/background.png');

const OuterWrapper = styled.div`
  font-family: 'Source Code Pro', monospace;
  background-color: #000;
  color: #fff;
  @media screen and (min-width: 850px) {
    background-image: url(${backgroundImage});
    background-position: bottom 1rem left 1rem;
    background-repeat: no-repeat;
    background-attachment: fixed;
  }
`;

const InnerWrapper = styled.div`
    max-width: 30rem;
    margin: 0 auto;
    padding: 2rem 0;
    min-height: 100%;
`;

class App extends React.Component {
    render() {
        return <OuterWrapper>
            <InnerWrapper>
                <Header/>
                <InfoButtons/>
            </InnerWrapper>
        </OuterWrapper>;
    }
}

export default App;