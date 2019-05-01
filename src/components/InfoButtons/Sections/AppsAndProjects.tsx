import * as React from "react";
import Paragraph from "../../Paragraph";
import Anchor from "../../Anchor";

const AppsAndProjects: React.FunctionComponent = () => <div>
    <Paragraph>
        I've done some things here and there, here's a couple of apps and projects that I'm proud to showcase:
    </Paragraph>
    <Paragraph>
        <Anchor text={'FakeFamily.eu'} href={'http://fakefamily.eu'} newTab={true} strong={true}/>: A site dedicated to KaaS, Kids as a Service.
    </Paragraph>
    <Paragraph>
        <Anchor text={'Kludd'} href={'https://play.google.com/store/apps/details?id=com.morkalork.kludd'} newTab={true} strong={true} />: An
        android puzzle game I made using Cordova and Pixi.js
    </Paragraph>
    <Paragraph>
        <Anchor text={'Morse Inspector'} href={'https://www.samsung.com/global/galaxy/apps/galaxy-store/'} newTab={true} strong={true} />: A
        Tizen app I made for my Samsung Gear S3 (can't link directly to the product, because Samsung...)
    </Paragraph>
</div>;

export default AppsAndProjects;