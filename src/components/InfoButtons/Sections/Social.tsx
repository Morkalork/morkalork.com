import * as React from "react";
import Paragraph from "../../Paragraph";
import Anchor from "../../Anchor";

const Social: React.FunctionComponent = () => <div>
    <Paragraph><Anchor text={'LinkedIn'} href={'https://www.linkedin.com/in/magnusferm'} />: Because I'm a professional!</Paragraph>
    <Paragraph><Anchor text={'Twitter'} href={'https://twitter.com/Maffelu'} />: Because I'm a silly idiot ;)</Paragraph>
</div>;

export default Social;