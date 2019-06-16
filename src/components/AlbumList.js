import React, { Component } from 'react';
import { View, Text } from 'react-native';

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


    render() {
        console.log(this.state);    
        return (
            <View>
                <Text>Album List</Text>
            </View>
        );
    }
}

export default AlbumList;
