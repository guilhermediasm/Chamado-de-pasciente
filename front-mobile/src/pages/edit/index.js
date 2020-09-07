import React, { useRef, useState } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    KeyboardAvoidingView,
    Platform,
    TextInput,
    Alert
} from 'react-native'

import { useNavigation } from '@react-navigation/native';

import { connect } from "react-redux";

//Actions
import { setchamado } from '../../Store/actions/chamado';

import styles from "./styles";
import api from '../../services/api'


function ListPage({ selectedChamado, setchamado }) {
    const navigation = useNavigation();
    const formRef = useRef(null);

    const [numeroChamado, setNumeroChamado] = useState(selectedChamado.numero_chamado.toString());
    const [idPaciente, setIdPaciente] = useState(selectedChamado.id_paciente.toString());
    const [nomePaciente, setNomePaciente] = useState(selectedChamado.nome_paciente);
    const [motivo, setMotivo] = useState(selectedChamado.id_motivo);
    const [dataCriacao, setDataCriacao] = useState(selectedChamado.data_criacao);
    const [descricao, setDescricao] = useState(selectedChamado.descricao);
    const [status, setStatus] = useState(selectedChamado.status);




    function deletar() {
        api.delete(`chamado/excluirChamado?id${selectedChamado.id}`)
            .then(response => {
                navigation.goBack()
            })
    }


    /**
     * esta função pega os dados e salva em um objeto

     * @param {Object} data 
     */
    async function handleSubmit() {

        try {
            if (descricao && status) {
                const date = new Date();
                const datehj = `${date.getDate()}/${date.getDate()}/${date.getFullYear()}`;


                api.put('chamado/editarChamado', {
                    id: selectedChamado.id,
                    numero_chamado: parseInt(numeroChamado),
                    id_paciente: parseInt(idPaciente),
                    id_motivo: motivo,
                    nome_paciente: nomePaciente,
                    data_criacao: datehj,
                    descricao,
                    status
                })
                    .then(response => {

                        console.log(response.data);
                        navigation.goBack()
                    })

            } else {
                Alert.alert('Verifique as informações')

            }

        } catch (err) {
            console.log(err)
        }

        //limpa o formulário
    }
    console.log(selectedChamado)
    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null}>
            <ScrollView>
                <View style={styles.container}>
                    <View>
                        <Text style={styles.label}>Número do chamado</Text>
                        <TextInput
                            value={numeroChamado}
                            name="numero_chamado"
                            label="Numero do Chamado"
                            style={styles.input}
                            editable={false}
                            onChangeText={value => {
                                setNumeroChamado(value)
                            }}
                        />
                    </View>
                    <View>
                        <Text style={styles.label}>Id do paciente</Text>
                        <TextInput
                            value={idPaciente}
                            name="id_paciente"
                            label="Id do paciente"
                            style={styles.input}
                            editable={false}
                            onChangeText={value => {
                                setIdPaciente(value)
                            }}
                        />
                    </View>
                    <View>
                        <Text style={styles.label}>Nome do paciente</Text>
                        <TextInput
                            value={nomePaciente}
                            name="nome_paciente"
                            label="Nome do paciente"
                            style={styles.input}
                            editable={false}
                            onChangeText={value => {
                                setNomePaciente(value)
                            }}
                        />
                    </View>
                    <View>
                        <Text style={styles.label}>Data de Criação</Text>
                        <TextInput
                            value={dataCriacao}
                            name="data_criacao"
                            label="Data de criacao"
                            style={styles.input}
                            editable={false}
                            onChangeText={value => {
                                setDataCriacao(value)
                            }}
                        />
                    </View>
                    <View>
                        <Text style={styles.label}>Descrição</Text>
                        <TextInput
                            value={descricao}
                            name="descricao"
                            label="Descrição"
                            style={styles.input}
                            onChangeText={value => {
                                setDescricao(value)
                            }}
                        />
                    </View>
                    <View>
                        <Text style={styles.label}>Status</Text>
                        <TextInput
                            value={status}
                            name="status"
                            label="Status"
                            numberOfLines={4}
                            style={styles.input}
                            onChangeText={value => {
                                setStatus(value)
                            }}
                        />
                    </View>

                    <TouchableOpacity style={styles.submitButton} onPress={() => handleSubmit()}>
                        <Text style={styles.submitButtonText}>Atualizar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.submitButton} onPress={() => deletar()}>
                        <Text style={styles.submitButtonText}>Excluir</Text>
                    </TouchableOpacity>


                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )

}

const mapStateToProps = state => {
    const { selectedChamado } = state.chamado;

    return {
        selectedChamado
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setchamado: (chamado) => dispatch(setchamado(chamado)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListPage);

