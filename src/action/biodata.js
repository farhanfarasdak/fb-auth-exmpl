import { set, ref, push, onValue } from "firebase/database";
import { database } from "../config/firebase";

const db = database

// WRITE BIODATA
export const insertBiodata = (name, phoneNumber, job) => {
  const dbRef = ref(db, 'biodata')
  const data = {
    name: name,
    phoneNumber: phoneNumber,
    job: job
  }
  push(dbRef, data)
}


// import { getDatabase, ref, onValue} from "firebase/database";

// const db = getDatabase();
// const starCountRef = ref(db, 'posts/' + postId + '/starCount');
// onValue(starCountRef, (snapshot) => {
//   const data = snapshot.val();
//   updateStarCount(postElement, data);
// });

// READ ALL BIODATA
export const retrieveAllBiodata = () => {
  return new Promise((resolve, reject) => {
    const dbRef = ref(db, 'biodata')
    onValue(dbRef, (snapshot) => {
      const value = []
      Object.keys(snapshot.val()).map(key => {
        value.push({
          id: key,
          data: snapshot.val()[key]
        })
      })
      resolve(value)
    })
  })
}

