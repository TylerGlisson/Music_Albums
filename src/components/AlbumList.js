import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
    state = {
        albums: []
    };

    componentWillMount() {
        // eslint-disable-next-line no-undef
        fetch('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => response.json())
            .then(responseJson => this.setState({ albums: responseJson }));
    }

    renderAlbums() {
        return this.state.albums.map(
            album => <AlbumDetail key={album.title} album={album} />
        );    
    }

    render() {
        console.log(this.state);    
        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );
    }
}

export default AlbumList;
