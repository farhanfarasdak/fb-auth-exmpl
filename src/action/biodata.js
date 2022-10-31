import { set, ref, push } from "firebase/database";
import { database } from "../config/firebase";

const db = database

// function writeUserData(userId, name, email, imageUrl) {
//   const db = getDatabase();
//   set(ref(db, 'users/' + userId), {
//     username: name,
//     email: email,
//     profile_picture : imageUrl
//   });
// }

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

// READ ALL BIODATA