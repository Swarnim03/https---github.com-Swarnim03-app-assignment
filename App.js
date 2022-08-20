import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const deviceWidth = Dimensions.get('window').width;

function App() {
  const [groceries, setGroceries] = useState([]);
  const [grocery, setGrocery] = useState();

  const addGrocery = () => {
    if (grocery.length !== 0) {
      var groceriesCpy = groceries;
      groceriesCpy.push(grocery);
      setGroceries(groceriesCpy);

      setGrocery('');
    }
  };

  return (
    <View>
      
      <View style={styles.form}>
        <TextInput
          value={grocery}
          onChangeText={setGrocery}
          placeholder="Search"
          style={styles.field}
        />
        <View>
          <TouchableOpacity onPress={addGrocery}>
            <Text style={styles.btn}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
      {groceries.length === 0 ? (
        <Text style={{fontSize: 28, marginTop: 20, textAlign: 'center'}}>
          No Items added..
        </Text>
      ) : (
        <View>
          {groceries.map((grocery, index) => (
            <Text key={index} style={{ margin: 16, borderRadius: 40, padding: 10, fontSize: 22, elevation: 4, backgroundColor: 'white'}}>
              {grocery}
            </Text>
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  
  field: {
    margin:50,
    borderColor: 'black',
    borderWidth: 3,
    width: 3 * (deviceWidth / 4),
    borderRadius: 40,
    paddingLeft: 20,
  },
  form: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  btn: {
    margin:50,
    fontSize: 28,
    height: 50,
    width: 50,
    textAlign: 'center',
    backgroundColor: 'gray',
    borderRadius: 50,
    paddingTop: 4,
  },
});

export default App;