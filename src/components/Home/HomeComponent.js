import React, { Component } from 'react'
import HomeComponentWrapper from './HomeComponent.style';
import ReactPlayer from 'react-player';

export default class HomeComponent extends Component {
    render() {
        let {url} = this.props;
        // const youtubeUrl = url && url.split("/")[1];
        return (
            <HomeComponentWrapper>
                <ReactPlayer url={`https://www.youtube.com/embed/${url}`} height="100%" width="100%" />
            </HomeComponentWrapper>
        )
    }
}
