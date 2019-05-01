import * as React from "react";
import Paragraph from "../../Paragraph";
import Anchor from "../../Anchor";

const Github: React.FunctionComponent = () => <div>
    <Paragraph>I have a GitHub presence, it is glorious!</Paragraph>
    <Paragraph>If you want to go there by interweb linkage, here's the door:&nbsp;
        <Anchor href={'https://github.com/morkalork'} newTab={true} title={'Who reads this?'} text={'https://github.com/morkalork'}/>.
    </Paragraph>
    <br />
    <Paragraph>
        Possibly interesting projects are:
    </Paragraph>
    <Paragraph>
        <strong>Barnmalvakt.se</strong>: A website I wrote using Grommet (a ui-framework for react).
    </Paragraph>
    <Paragraph>
        <strong>Police-police-mashed-potatoes</strong>: A go project that you can use to listen in on current Swedish police events
    </Paragraph>
    <Paragraph>
        <strong>Långskinkan.se</strong>: A vue project I wrote to celebrate a colleagues birthday.
    </Paragraph>
</div>;

export default Github;