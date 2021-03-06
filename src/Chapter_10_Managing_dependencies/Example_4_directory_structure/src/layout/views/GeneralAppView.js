import React from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import NavIonicons from '../../common/NavigateIcon';
import MenuTrigger from './MenuTrigger';
import LanguageSwitcher from '../LanguageSwitcher';

const GeneralAppView = props => (
    <View style={styles.appContainer}>
        <View style={styles.header}>
            <View style={styles.headerTitleContainer}>
                <Text style={styles.headerText}>Tasks</Text>
            </View>
            <View style={styles.headerLanguageSelectorContainer}>
                <LanguageSwitcher currentSelection={props.language} />
            </View>
            <View style={styles.headerMenuIcon}>
                <MenuTrigger />
            </View>
        </View>
        <ScrollView style={styles.content}>
            {props.content}
        </ScrollView>
        <View style={styles.footer}>
            <NavIonicons
                to="Home"
                name="md-home"
                size={32}
                color="white"
            />
            <NavIonicons
                to="Search"
                name="md-search"
                size={32}
                color="white"
            />
            <NavIonicons
                to="Notifications"
                name="md-notifications"
                size={32}
                color="white"
            />
        </View>
    </View>
);

export default GeneralAppView;

GeneralAppView.propTypes = {
    content: PropTypes.element.isRequired,
    language: PropTypes.string.isRequired
};

export const styles = StyleSheet.create({
    appContainer: { flex: 1, backgroundColor: '#fff' },
    headerText: { fontSize: 35 },
    languageText: { fontSize: 18 },
    headerMenuIcon: { justifyContent: 'center' },
    headerTitleContainer: { flex: 1 },
    headerLanguageSelectorContainer: {
        width: 150,
        flexDirection: 'row',
        paddingRight: 20,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    header: {
        flexDirection: 'row',
        marginTop: 30,
        height: 45,
        borderBottomColor: '#000000',
        borderBottomWidth: 1,
        paddingLeft: 10,
        paddingRight: 10,
        marginBottom: 10
    },
    content: { flex: 1, paddingLeft: 10, paddingRight: 10 },
    contentText: { fontSize: 20 },
    footer: {
        backgroundColor: '#4867AD',
        height: 50,
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        borderTopColor: '#000000',
        borderTopWidth: 1,
        paddingLeft: 10,
        paddingRight: 10
    },
    footerText: { color: '#ffffff', fontSize: 30 }
});
