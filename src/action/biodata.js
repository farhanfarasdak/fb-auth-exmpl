import { set, ref, push, onValue } from "firebase/database";
import { database, storage } from "../config/firebase";
import { getDownloadURL, ref as storageRef, uploadBytes } from "firebase/storage"

const db = database

// WRITE BIODATA
export const insertBiodata = (name, phoneNumber, job, url) => {
  const dbRef = ref(db, 'biodata')
  const data = {
    name, //name: name
    phoneNumber,
    job,
    url
  }
  push(dbRef, data)
}

// UPDATE BIODATA
export const updateBiodata = (id, name, phoneNumber, job) => {
  const dbRef = ref(db, `biodata/${id}`)
  const data = {
    name: name,
    phoneNumber: phoneNumber,
    job: job
  }
  set(dbRef, data)
}

// READ ALL BIODATA
export const retrieveAllBiodata = () => {
  return new Promise((resolve, reject) => {
    const dbRef = ref(db, 'biodata')
    onValue(dbRef, (snapshot) => {
      const value = []
      // Ubah Object ke Array of Object
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

// RETRIEVE ONE BIODATA
export const getBiodataById = (id) => {
  return new Promise((resolve, reject) => {
    const dbRef = ref(db, `biodata/${id}`)
    onValue(dbRef, (data) => {
      const value = data.val()
      resolve(value)
    })
  })
}

// UPLOAD BIODATA IMAGE
export const uploadBiodataImage = async (fileObject) => {
  const imgRef = storageRef(storage, `biodata/${fileObject.name}`)
  const snapshot = await uploadBytes(imgRef, fileObject)
  const url = await getDownloadURL(imgRef)
  console.log(url)
  return url
}


