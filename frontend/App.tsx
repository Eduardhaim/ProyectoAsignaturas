
import { StatusBar } from 'expo-status-bar'
import { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { View, Text, StyleSheet } from 'react-native'
import FormularioAsignatura from './Componentes/FormularioAsignatura'
import Api from './service/Api'

const Tab = createBottomTabNavigator()

function Alumnos() {

    const [alumnos, setAlumnos] = useState<any[]>([])

    const consultarAlumnos = async () => {
        try {
            const respuesta = await Api.get('/alumno')
            setAlumnos(respuesta.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        consultarAlumnos()
    }, [])

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Lista de Alumnos</Text>

            {alumnos.map((alumno) => (
                <View style={styles.alumno} key={alumno.id}>
                    <Text>ID: {alumno.id}</Text>
                    <Text>Nombre: {alumno.nombre} {alumno.apellido}</Text>
                    <Text>Carrera: {alumno.Carrera}</Text>
                    <Text>Registro: {alumno.registro}</Text>
                </View>
            ))}
        </View>
    )
}

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                    name="Asignaturas"
                    component={FormularioAsignatura}
                />

                <Tab.Screen
                    name="Alumnos"
                    component={Alumnos}
                />
            </Tab.Navigator>

            <StatusBar style="auto" />
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20
    },
    titulo: {
        fontSize: 22,
        marginBottom: 20,
        fontWeight: 'bold'
    },
    alumno: {
        borderWidth: 1,
        borderColor: 'gray',
        padding: 10,
        marginBottom: 10,
        borderRadius: 5
    }
})
