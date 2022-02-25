import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import firestore from '@react-native-firebase/firestore'

import { styles } from './styles';
import { Product, ProductProps } from '../Product';

//import { shoppingListExample } from '../../utils/shopping.list.data';

export function ShoppingList() {
  //const [products, setProducts] = useState<ProductProps[]>(shoppingListExample);
  const [products, setProducts] = useState<ProductProps[]>([]);

  //useEffect(() => { firestore().collection('products').doc('my-custom-id').get().then(response => console.log(response)); }, []);
  //useEffect(() => { firestore().collection('products').doc('my-custom-id').get().then(response => console.log(response.data())); }, []);
  //useEffect(() => { firestore().collection('products').doc('my-custom-id').get().then(response => console.log({ id: response.id, ...response.data() })); }, []);
  //useEffect(() => { firestore().collection('products').get().then(response => { const data = response.docs.map(doc => { return { id: doc.id, ...doc.data() }}) as ProductProps[]; setProducts(data); }).catch(error => console.error(error)); },[]);
  //useEffect(() => { const subscribe = firestore().collection('products').where('quantity', '==', 1).onSnapshot(querySnapshot => { const data = querySnapshot.docs.map((doc) => { return { id: doc.id, ...doc.data() } }) as ProductProps[]; setProducts(data); }); return () => subscribe(); }, []);
  //useEffect(() => { const subscribe = firestore().collection('products').limit(3).onSnapshot(querySnapshot => { const data = querySnapshot.docs.map((doc) => { return { id: doc.id, ...doc.data() } }) as ProductProps[]; setProducts(data); }); return () => subscribe(); }, []);
  //useEffect(() => { const subscribe = firestore().collection('products').orderBy('description', 'asc').onSnapshot(querySnapshot => { const data = querySnapshot.docs.map((doc) => { return { id: doc.id, ...doc.data() } }) as ProductProps[]; setProducts(data); }); return () => subscribe(); }, []);
  //useEffect(() => { const subscribe = firestore().collection('products').orderBy('quantity').startAt(2) // .startAfter(2)  .endBefore(4)
  //.endAt(4).onSnapshot(querySnapshot => { const data = querySnapshot.docs.map((doc) => { return { id: doc.id, ...doc.data() } }) as ProductProps[]; setProducts(data); }); return () => subscribe(); }, []);

  
  useEffect(() => { const subscribe = firestore().collection('products').orderBy('description').onSnapshot(querySnapshot => { const data = querySnapshot.docs.map((doc) => { return { id: doc.id, ...doc.data() } }) as ProductProps[]; setProducts(data); }); return () => subscribe(); }, []);

  return (
    <FlatList
      data={products}
      keyExtractor={item => item.id}
      renderItem={({ item }) => <Product data={item} />}
      showsVerticalScrollIndicator={false}
      style={styles.list}
      contentContainerStyle={styles.content}
    />
  );
}
