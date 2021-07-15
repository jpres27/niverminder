import * as React from 'react';
import {
    Text,
    View,
    Button,
    FlatList,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    ScrollView
} from 'react-native';
import StorageInterface from '../../StorageInterface';

async function getContacts() {
    return await StorageInterface.getAll()
}

export default class Main extends React.Component {
    constructor() {
        super()
        this.state = {
            friended: [],
            height: 20,
            searchAlign: 'center'
        }
    }

    loadFriended = () => {
        StorageInterface.getAll().then((result) => {
            console.log(result)
            this.setState((state) => ({ ...state, friended: result }))
        })
    }

    componentDidMount() {
    }
    renderItem = ({ item }) => (
        <View style={{ padding: 5, borderBottomWidth: 0.2, borderStartColor: 'black' }}>
            <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 20 }}>
                {item.name}
            </Text>
            {/*<Button title='delete'/>*/}
        </View>
    )
    searchAlignLeft = () => {
        this.setState({ searchAlign: 'left', height: 40 })
    }
    render() {
        this.loadFriended();
        return (
            <View>
                <View style={{
                    padding: 10,
                    backgroundColor: "rgb(87, 107, 245)"
                }}>
                    <Text style={{ fontSize: 30, textAlign: 'center' }}>NiverMinder</Text>
                </View>
                <View style={{ padding: 15, backgroundColor: "white" }}>
                    <TextInput
                        //inlineImageLeft = "../../node_modules\drawable/search.png"
                        placeholder="Search Name"
                        placeholderTextColor="black"
                        onChangeText={value => this.findContacts(value)}
                        onTouchStart={() => this.searchAlignLeft()}
                        style={{
                            backgroundColor: 'white',
                            height: this.state.height,
                            fontSize: 16,
                            padding: 10,
                            color: 'black',
                            borderColor: 'black',
                            borderBottomWidth: 1.5,
                            textAlign: this.state.searchAlign
                        }}
                    />
                </View>
                <ScrollView style={{ backgroundColor: 'light-grey', marginLeft: 15, height: 465 }}>
                    <FlatList
                        data={this.state.friended}
                        renderItem={this.renderItem}
                        ListEmptyComponent={() => (
                            <View style={{ flex: 1, padding: 15 }}>
                                <Button style={{ color: 'black' }} title='add first person to your list'
                                    onPress={() => this.props.navigation.navigate('AddBirthday')} />
                            </View>
                        )}
                    ></FlatList>
                </ScrollView>
                <View style={{ position: 'fixed', bottom: 0 }}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('AddBirthday')}
                        style={styles.buttonStyle}>
                        <Text>Add Birthdays</Text>
                    </TouchableOpacity>
                    <View style={{
                        padding: 20,
                        backgroundColor: "rgb(87, 107, 245)"
                    }}>
                        <Button color='black' title='tutorial' onPress={() => this.props.navigation.navigate('Splash')} />
                    </View>
                </View>
            </View>

        )
    }
}
const styles = StyleSheet.create({
    buttonStyle: {
        backgroundColor: "rgb(87, 107, 245)",
        color: "white",
        marginBottom: 50,
        alignItems: "center",
        minHeight: 50,
        justifyContent: "center",
        marginLeft: 22,
        marginRight: 22,
        marginBottom: 18,
        borderRadius: 5,
    },
})