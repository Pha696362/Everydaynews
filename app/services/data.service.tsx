import firebase from 'react-native-firebase'
import { appConfig } from '../dummy/appConfig';

const db = firebase.firestore();
export function searchRef() {

    return db.collection("content")
}
export function categoryRef(){
    return db.collection('category')
}
export function contactRef(){
  return db.collection('contact')
}


export function AdsRef() {
  return db.collection("advertise");
}
export function ContentRef() {
    return db.collection("content");
  }


export function ContentRefLoad(lastVisible?: any, categoryKey?: string) {
    console.log('ContentRefLoad',ContentRefLoad)
    if (lastVisible) {
      if (categoryKey) {
        return db
          .collection("content")
          .where("category.key", "==", categoryKey)
          .orderBy("page_key", "DESC")
          .startAfter(lastVisible.page_key)
          .limit(appConfig.size);
      } else {
        return db
          .collection("content")
          .orderBy("page_key", "DESC")
          .startAfter(lastVisible.page_key)
          .limit(appConfig.size);
      }
    } else {
      if (categoryKey) {
        return db
          .collection("content")
          .where("category.key", "==", categoryKey)
          .orderBy("page_key", "DESC")
          .limit(appConfig.size);
      } else {
        return db
          .collection("content")
          .orderBy("page_key", "desc")
          .limit(appConfig.size);
      }
    }



  }

  export function updatecontentRef() {
    return db.collection("content");
  }







