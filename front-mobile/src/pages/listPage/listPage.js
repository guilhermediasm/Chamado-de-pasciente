import React, { useState, useEffect } from 'react'
import { View, Text, FlatList, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';
import { useFocusEffect } from '@react-navigation/native';

import { connect } from "react-redux";

//Actions
import { setchamado } from '../../Store/actions/chamado';

import ListItem from "../../components/listItem";
import mockPayload from "../../util/mock";
import styles from "./style";
import api from '../../services/api'
import Colors from '../../styles/color'

const ListPage = ({ setchamado, chamado }) => {
    const navigation = useNavigation();
    const [search, setSearch] = useState('')


    React.useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            listChamado()
        });

        // Return the function to unsubscribe from the event so it gets removed on unmount
        return unsubscribe;
    }, [navigation]);

    function listChamado() {
        api.get('chamado/lista')
            .then(response => {

                setchamado(response.data)
            })
    }

    function buscarChamado() {
        if (search != '') {
            api.get(`chamado/buscarChamados?numero_chamado=${search}`)
                .then(response => {

                    setchamado(response.data)
                })
        }
    }

    function changeTextBuscar(text) {

        if (text == '') {
            listChamado()
        }

        setSearch(text)
    }



    return (
        <View style={styles.container}>
            <View style={styles.searchBar}>
                <View style={styles.searchInputBar}>
                    <TextInput
                        placeholder="Pesquisar"
                        value={search}
                        onChangeText={(text) => changeTextBuscar(text)}
                        blurOnSubmit={false}
                        style={styles.searchInput}
                    />
                    <Icon onPress={buscarChamado()} name="magnifying-glass" size={25} color="#000" />
                </View>
            </View>
            <View style={styles.containerList}>
                <FlatList
                    data={chamado}
                    renderItem={(item) => {
                        return (

                            <ListItem data={item} />
                        )
                    }}
                    keyExtractor={item => item.numero_chamado.toString()}
                />
            </View>
        </View>
    )

}

const mapStateToProps = state => {
    const { chamado } = state.chamado;

    return {
        chamado
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setchamado: (chamado) => dispatch(setchamado(chamado))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListPage);

