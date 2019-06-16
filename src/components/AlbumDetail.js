import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = ({ album }) => {
    const { thumbnail_image, title, artist } = album;
    return (
        <Card>
            <CardSection>
                <View>
                    <Image source={{ uri: thumbnail_image }} />
                </View>
                <View style={styles.headerContentStyles}>
                    <Text>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>
        </Card>
    );
};

const styles = {
    headerContentStyles: {
        flexDirect: 'column',
        justifyContent: 'space-around'
    }
};

export default AlbumDetail;
