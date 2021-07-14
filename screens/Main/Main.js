import * as React from 'react';
import {
  Text,
  View,
  Button,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  TextInput
} from 'react-native';

export default class Main extends React.Component {
    constructor(){
        super()
        this.state = {
            friended:[],
            height:20,
            searchAlign:'center'
        }
    }
    searchAlignLeft = ()=>{
        this.setState({searchAlign:'left', height: 40})
    }
    render(){
        return(
            <View>            
                <View style = {{padding:10, 
                backgroundColor:"rgb(87, 107, 245)"}}>
                    <Text style={{fontSize:30,textAlign:'center'}}>NiverMinder</Text>
                </View>
                <View style={{padding:15, backgroundColor:"white"}}>
          <TextInput
              //inlineImageLeft = "../../node_modules\drawable/search.png"
              placeholder = "Search Name"
              placeholderTextColor = "black"
              onChangeText={value => this.findContacts(value)}
              onTouchStart = {()=>this.searchAlignLeft()}
              style = {{backgroundColor:'white',
                height:this.state.height,
                fontSize:16,
                padding:10,
                color:'black',
                borderColor:'black',
                borderBottomWidth:1.5,
                textAlign:this.state.searchAlign
              }}
              />
            </View>
                <View style={{flex:1, backgroundColor:'light-grey',padding:220}}>
                    <FlatList
                    /*
                    data = ''
                    renderItem = {this.renderItem}
                    */
                    ListEmptyComponent={() => (
                      <View style={{flex: 1, padding: 15}}>
                        <Button style={{ color: 'black' }} title='add the first person to your list'/>
                      </View>
                    )}
                    ></FlatList>
                </View>
				<TouchableOpacity
					onPress= {()=>this.props.navigation.navigate('AddBirthday')}
					style={styles.buttonStyle}>
					<Text>Add Birthdays</Text>
				</TouchableOpacity>
                <View style = {{padding:30, 
                backgroundColor:"rgb(87, 107, 245)"}}>
                    <Button color='black' title = 'tutorial' onPress= {()=>this.props.navigation.navigate('Splash')}/>
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
        marginBottom: 25,
        borderRadius: 5,
    },
})