import * as React from "react";
import Paragraph from "../../Paragraph";
import Thumbnail from "../../Thumbnail";
import ThumbnailGallery from "../../ThumbnailGallery";

const blocksImage = require('../../../assets/blocks.jpg');
const colorfuel = require('../../../assets/colorfuel.jpg');
const revengeOfTheRitualDeathBird = require('../../../assets/revengeOfTheRitualDeathBird.jpg');
const aBoxLife = require('../../../assets/aBoxLife.jpg');

const Creativity: React.FunctionComponent = () => <div>
    <Paragraph>As a developer you sort of have to be a creative person (imho) and I've always doodled and dabbled.
        Here's some of the stuff I've been doing:</Paragraph>
    <br/>
    <ThumbnailGallery>
        <Thumbnail src={blocksImage} href={blocksImage} newTab={true}/>
        <Thumbnail src={colorfuel} href={colorfuel} newTab={true}/>
        <Thumbnail src={revengeOfTheRitualDeathBird} href={revengeOfTheRitualDeathBird} newTab={true}/>
        <Thumbnail src={aBoxLife} href={aBoxLife} newTab={true}/>
    </ThumbnailGallery>
    <br/>
    <Paragraph>
        Apart from that I also got some music on Spotify (soundtracks to games I've made, mostly tracker music):
    </Paragraph>
    <div>
        <iframe src="https://open.spotify.com/embed/artist/2GSGtiKIcV5k796wBA98aF" width="100%" height="300"
                frameBorder="0" allow="encrypted-media"></iframe>
    </div>
</div>;

export default Creativity;