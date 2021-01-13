import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, ScrollView, Alert} from 'react-native';
import Header from '../Header';
import OrderCard from '../OrderCard';
import fechOrders from '../api';
import { Order } from '../types';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useIsFocused, useNavigation } from '@react-navigation/native';

function Orders() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoadind,setIsLoading] = useState(false);
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  const fetchData = () => {
    setIsLoading(true);
    fechOrders()
    .then(response => setOrders(response.data))
    .catch(() => Alert.alert('Hove um erro ao buscar os pedidos !!!'))
    .finally(() => setIsLoading(false));
  }
  useEffect(() => {
    if(isFocused){
      fetchData();
    }
  },[isFocused]);


  const handleOnPress = (order: Order) => {
    navigation.navigate('OrderDetail',{
      order
    });
  }
return (
    <>
    <Header />
        <ScrollView style={styles.container}>
          {isLoadind ? (
            <Text>Buscando Pedidos...</Text>
          ) : (
            orders.map(order =>(
              <TouchableWithoutFeedback 
                key={order.id} 
                onPress={() => handleOnPress(order)}
              >
                <OrderCard order={order}/>
              </TouchableWithoutFeedback>
            ))
          )}          
 
        </ScrollView>
    </>
    );
}

const styles = StyleSheet.create({
  container:{
    paddingRight: '5%',
    paddingLeft: '5%'
  }
});

export default Orders;