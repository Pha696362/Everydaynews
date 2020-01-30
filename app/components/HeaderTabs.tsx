import React from 'react';
import { Text, View, Image, TouchableOpacity, Dimensions, SafeAreaView, StyleSheet, StatusBar, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto'
import Iconic from 'react-native-vector-icons/Ionicons';
import modules from '../modules';
// import { BattambangBold } from '../../function/customFornt';
import FastImage from 'react-native-fast-image';



interface Props {
    onDrawer?: () => void
    onSearch?: () => void
    onBack?: () => void
    title?: string
    search?: string
    onDelete?: any


}

const HeaderTabs = ({ onBack, title, onDelete }: Props) => (

    <SafeAreaView style={{ backgroundColor: 'black' }} >
        
        {
            onBack ?
            
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity onPress={onBack} style={styles.button}>
                        <Iconic name="ios-arrow-back" style={styles.Iconic} />
                    </TouchableOpacity>
                    <View style={styles.title}>
                        <Text>{title}</Text>
                    </View>
                </View>

                :
                <View style={styles.header}>
                    {
                        onDelete ?
                            <TouchableOpacity style={styles.button}>
                                <Icon name="zoom" style={styles.icon} />
                            </TouchableOpacity>
                            : null

                    }
                    <View style={styles.titleBox}>
                        <FastImage source={require('../image/logo.png')} style={styles.image} resizeMode={'contain'} />
                    </View>


                    {
                        onDelete ?
                            <TouchableOpacity onPress={onDelete} style={styles.button}>
                                <Icon name="trash" style={[styles.icon, { color: '#fff' }]} />
                            </TouchableOpacity>
                            : null

                    }

                </View>
        }


    </SafeAreaView>
);

export default HeaderTabs;

const styles = StyleSheet.create({
    titleBox: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        height: 30,
        width: '100%'
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: modules.BODY_HORIZONTAL / 2,

    },
    button: {
        padding: 4,
        paddingHorizontal: modules.BODY_HORIZONTAL_12
    },
    icon: {
        fontSize: 20
    },
    Iconic: {
        color: modules.TEXT,
        fontSize: 24,
    },
    title: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,

    },



});