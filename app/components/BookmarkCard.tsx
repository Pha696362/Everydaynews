import * as React from 'react';
import { View, StyleSheet, Text, Dimensions, TouchableOpacity } from 'react-native';
import modules from '../modules';
import CONTENT from '../store/content.store';

import FastImage from 'react-native-fast-image';
import { BattambangBold } from '../../function/customFont';

const { height: HEIGHT, width: WIDTH } = Dimensions.get('window');
export interface Props {
    onClick: () => void
    data: any,

}

export default ({ data, onClick }: Props) => {
    return (

        <TouchableOpacity onPress={onClick} style={styles.container}>
            
            <FastImage style={{ height: 50, width: 50, borderRadius: 2 }} source={{ uri: String(data.fileurl) }} />
            <Text numberOfLines={2} style={styles.txtTitle}>{data.name}</Text>
        
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 12,
        margin: 12,
        flexDirection: 'row',
        borderRadius: 8,
        alignItems: 'center',
          
    },
    avata: {
        width: 25 * 2,
        height: 25 * 2,
        borderRadius: 10,
        backgroundColor: '#f7f9fa',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 12
    },
    txtTitle: {
        fontSize: 14,
        ...BattambangBold,
        color: '#2b2b2b',
        paddingHorizontal:modules.PADDING
        

        
    },
    txtName: {
        fontSize: 15,
        fontWeight: '500',
        color: modules.BLUE,
        marginVertical: 10 / 4
    },
    txtSmall: {
        fontSize: 11,
        fontWeight: '300',
        color: '#2b2b',
        marginVertical: 10 / 4
    },
    txtMin: {
        fontSize: 12,
        fontWeight: '600',
        color: '#2b2b2b'
    },
    txtTime: {
        fontSize: 11,
        fontWeight: '300',
        color: '#2b2b2b'
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',

    },
    iconMini: {
        color: '#2b2b2b',
        paddingRight: 4
    }
})