
import { useState } from 'react'
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native'
import Api from '../service/Api'
import { Asignatura } from '../Modelos/Asignatura'

export default function FormularioAsignatura() {

    const [nombre, setNombre] = useState('')
    const [codigo, setCodigo] = useState('')
    const [idestudiante, setIdestudiante] = useState('')

    const registrarAsignatura = async () => {
        try {
            const asignatura: Asignatura = {
                nombre: nombre,
                codigo: codigo,
                idestudiante: Number(idestudiante)
            }

            await Api.post('/asignatura', asignatura)

            Alert.alert('Mensaje', 'Asignatura registrada correctamente')

            setNombre('')
            setCodigo('')
            setIdestudiante('')

        } catch (error) {
            Alert.alert('Error', 'No se pudo registrar la asignatura')
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Registro de Asignaturas</Text>

            <TextInput
                style={styles.input}
                placeholder="Nombre de asignatura"
                value={nombre}
                onChangeText={setNombre}
            />

            <TextInput
                style={styles.input}
                placeholder="Código"
                value={codigo}
                onChangeText={setCodigo}
            />

            <TextInput
                style={styles.input}
                placeholder="ID del estudiante"
                value={idestudiante}
                onChangeText={setIdestudiante}
                keyboardType="numeric"
            />

            <Button
                title="Registrar Asignatura"
                onPress={registrarAsignatura}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    titulo: {
        fontSize: 22,
        marginBottom: 20,
        fontWeight: 'bold'
    },
    input: {
        borderWidth: 1,
        borderColor: 'gray',
        padding: 10,
        marginBottom: 15,
        borderRadius: 5
    }
})
