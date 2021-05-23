import firebase from 'firebase'



const firebaseConfig = {
    apiKey: "AIzaSyCXDxBM-7NQBMuBPsH6LLa2wiZnLkt04Ng",
    authDomain: "musico-8d560.firebaseapp.com",
    projectId: "musico-8d560",
    storageBucket: "musico-8d560.appspot.com",
    messagingSenderId: "876211510994",
    appId: "1:876211510994:web:399fbf1db5f8a57d29170b",
    measurementId: "G-B4WVNVH53E"
  };

let fb

if (!firebase.apps.length) {
  fb = firebase.initializeApp(firebaseConfig);
}else {
   fb = firebase.app(); // if already initialized, use that one
}

const fireStore = firebase.firestore()


export default fb
export const GoogleProvider = firebase.auth.GoogleAuthProvider

// export const handleUserProfile = async (userAuth, additionalData)=>{

//   if(!userAuth) return
//   const {uid} = userAuth

//   const userRef = firebase.firestore().doc(`users/${uid}`)
//   const snapShot = await userRef.get()
//   const {email} = userAuth


//   if(!snapShot.exists){

    

//     try {

//       await userRef.set({
//       email,
//       ...additionalData
//     })
      
//     } catch (error) {
//       console.log(error);
//     }

//   }
//   return userRef

// }

export const handleUserProfile = (userAuth, additionalData)=>{

  console.log("in hup");

    return new Promise((resolve, reject)=>{

        if(!userAuth) reject()

        const {uid, email} = userAuth

        const userRef = firebase.firestore().doc(`artistes/${uid}`)
        userRef.get()
        .then((result)=>{

            const snapShot = result

              if(!snapShot.exists){
              
              try {

                userRef.set({
                  email,
                  ...additionalData
                })
                .then(()=>{
                  resolve(userRef)
                })

              } catch (error) {
                console.log(error);
                reject()
              }

            }
            else{
                resolve(userRef)
            }

        })
        .catch(()=>{
          reject()
        })

        


    })

}

export const fetchUserData = (userAuth)=>{

    return new Promise((resolve, reject)=>{

        const {uid} = userAuth

        const userRef = firestore.doc(`artistes/${uid}`)
        userRef.get()
        .then((snapShot)=>{

            if(snapShot.exists())
            {
              resolve(snapShot.data())
            }

        }).catch((err)=>{
          reject(err.message)
        })


    })

}
