import React from 'react'
import { View, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import { connect } from "react-redux";

//Actions
import { selectedChamado } from '../Store/actions/chamado';

import styles from './style'

const ListItem = (props) => {
    const navigation = useNavigation();
    const { item } = props.data
    function handleNavigateDetais() {
        props.selectedChamado(item)
        navigation.navigate('Editar');

    }

    return (
        <RectButton style={styles.container} onPress={() => handleNavigateDetais(item)}>

            <View style={styles.rowCodes}>
                <Text>
                    Chamado: {item.numero_chamado}
                </Text>
            </View>
            <View>
                <Text>
                    Paciente: {item.nome_paciente}
                </Text>
                {/*  <Text style={styles.textStyle}>
                    Motivo: {item.motivo}
                </Text> */}
            </View>
            <View style={styles.rowCodes}>
                <Text>
                    Status: {item.status}
                </Text>

            </View>
            <View>
                <Text>
                    Data de criação: {item.data_criacao}
                </Text>
            </View>

        </RectButton>
    )

}

const mapStateToProps = state => {

    return {

    };
};

const mapDispatchToProps = dispatch => {
    return {
        selectedChamado: (chamado) => dispatch(selectedChamado(chamado))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListItem);

