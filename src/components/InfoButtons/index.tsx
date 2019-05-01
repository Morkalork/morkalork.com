import * as React from "react";
import styled from 'styled-components';
import InfoButton from "../InfoButton";
import WhatIsThis from "./Sections/WhatIsThis";
import Github from "./Sections/Github";
import AppsAndProjects from "./Sections/AppsAndProjects";
import Creativity from "./Sections/Creativity";
import Social from "./Sections/Social";

const Wrapper = styled.div`
  margin-top: 2rem;
  padding: 1rem;
`;

interface IState {
    selectedIndex: number;
}

interface IProps {
}

class InfoButtons extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        this.state = {
            selectedIndex: 0
        };
    }


    onSelect(newIndex: number) {
        if (newIndex === this.state.selectedIndex) {
            this.setState({selectedIndex: -1});
        } else {
            this.setState({selectedIndex: newIndex});
        }
    }

    render() {
        const {selectedIndex} = this.state;

        return <Wrapper>
            <InfoButton title={'What is this?'}
                        showContent={selectedIndex === 0}
                        onClick={() => this.onSelect(0)}>
                <WhatIsThis/>
            </InfoButton>
            <InfoButton title={'GitHub'}
                        showContent={selectedIndex === 1}
                        onClick={() => this.onSelect(1)}>
                <Github/>
            </InfoButton>
            <InfoButton title={'Apps & Projects'}
                        showContent={selectedIndex === 2}
                        onClick={() => this.onSelect(2)}>
                <AppsAndProjects/>
            </InfoButton>
            <InfoButton title={'Creativity'}
                        showContent={selectedIndex === 3}
                        onClick={() => this.onSelect(3)}>
                <Creativity/>
            </InfoButton>
            <InfoButton title={'Social'}
                        showContent={selectedIndex === 4}
                        onClick={() => this.onSelect(4)}>
                <Social />
            </InfoButton>
        </Wrapper>;
    }
}

export default InfoButtons;