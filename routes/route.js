import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const GoogleStack = createStackNavigator();
const AppleStack = createStackNavigator();
const Tabs = createBottomTabNavigator();
const Drawers = createDrawerNavigator();

// Arquivo de rota principal
const Route = () => {
    return (
        <NavigationContainer>
            <Drawers.Navigator
                drawerContent={(props) => <ContentTabs {...props} />}
            >
                <Drawers.Screen name="TabScreen" component={TabsScreen} />
            </Drawers.Navigator>
        </NavigationContainer>
    )
}

// Conteudo da Nossa tab
export const ContentTabs = ({ navigation }) => {
    return (
        <View style={styles.containerTitleDrawer}>
            <View style={styles.containerTitleDrawerIconContainer}>
                <FontAwesome name="code" size={20} color="white" />
            </View>
            <Text style={styles.text}>My Application React</Text>

            <View style={styles.containerOptionsMenu}>

                <TouchableOpacity onPress={() => navigation.navigate("Google")}>
                    <View style={styles.optionsMenu}>
                        <FontAwesome name="google" size={20} color="#992" />
                        <Text>{"   "}Google</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate("Apple")}>
                    <View style={styles.optionsMenu}>
                        <FontAwesome name="apple" size={20} color="#055" />
                        <Text>{"   "}Apple</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

// Screen do nosso Tab
export const TabsScreen = () => {
    return (
        <Tabs.Navigator
            tabBarOptions={{
                activeTintColor: "#fff",
                inactiveTintColor: "#3338",
                style: {
                    backgroundColor: "#099"
                }
            }}
        >

            <Tabs.Screen
                options={{
                    tabBarIcon: ({ color }) => <FontAwesome
                        name="google"
                        size={20}
                        color={color}
                    />
                }}
                name="Google"
                component={GoogleScreen}
            />

            <Tabs.Screen
                options={{
                    tabBarIcon: ({ color }) => <FontAwesome
                        name="apple"
                        size={20}
                        color={color}
                    />
                }}
                name="Apple"
                component={AppleScreen}
            />

        </Tabs.Navigator>
    )
}

// Nosso menubars
export const MenuBars = () => {
    const navigation = useNavigation();

    return (
        <View style={{ padding: 20 }}>
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <FontAwesome name="bars" size={20} />
            </TouchableOpacity>
        </View>
    )
}

// Screen que renderiza no pagina chamada google
export const GoogleScreen = () => {
    return (
        <GoogleStack.Navigator

            screenOptions={{
                headerTitleAlign: "center",
                headerLeft: () => <MenuBars />
            }}>
            <GoogleStack.Screen name="Google" component={Google} />
        </GoogleStack.Navigator>
    )
}

// Screen que renderiza no pagina chamada Apple
export const AppleScreen = () => {
    return (
        <AppleStack.Navigator
            screenOptions={{
                headerTitleAlign: "center",
                headerLeft: () => <MenuBars />
            }}>
            <AppleStack.Screen name="Apple" component={Apple} />
        </AppleStack.Navigator>
    )
}

// Nosso componente contendo a nossa page do google
export const Google = () => {
    return (
        <View style={styles.container}>
            <FontAwesome name="google" size={40} color="#992" />
            <Text style={styles.text}>Page Google</Text>
        </View>
    )
}

// Nosso componente contendo a nossa page da apple
export const Apple = () => {
    return (
        <View style={styles.container}>
            <FontAwesome name="apple" size={40} color="#000" />
            <Text style={styles.text}>Page Apple</Text>
        </View>
    )
}

// Style do nosso arquivo de rotas
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },

    text: {
        marginTop: 20,
        fontWeight: "normal",
        color: "gray"
    },

    containerTitleDrawer: {
        flex: 1,
        margin: 30,
        alignItems: "center"
    },

    containerTitleDrawerIconContainer: {
        backgroundColor: "#099",
        padding: 20,
        borderRadius: 30,
    },

    containerOptionsMenu: {
        flex: 1,
        width: "100%",
        alignItems: "flex-start",
        marginTop: 50
    },

    optionsMenu: {
        flexDirection: "row",
        margin: 20
    }
})

// Exportando nosso aquivo principal
export default Route;