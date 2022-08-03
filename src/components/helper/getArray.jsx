import {collection, getDocs, getDoc, doc, getFirestore} from 'firebase/firestore'
 
export const getArray=(array)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(array)
        }, 2000);
    })
}

export const getItems = () =>{
    const db = getFirestore();
    const colleccion = collection( db, "items");
    return getDocs(colleccion).then(snapshot => {
        return snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}))
    }) 
    .catch(e => alert("Error"));
}

export const getItem = (id) => {
    console.log(id)
    const db = getFirestore();
    const docItem = doc(db, "items", id);
    return getDoc(docItem).then(snapshot => snapshot.exists() && {id: snapshot.id, ...snapshot.data()})
    .catch(e => alert("Error"));
}
