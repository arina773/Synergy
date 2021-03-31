  
//import FirebaseKeys from './config';

import firebase from 'firebase/app';
import 'firebase/auth';

class Fire{
    constructor(){
        if (!firebase.apps.length) {
            firebase.initializeApp({apiKey: "AIzaSyDElLbe1EmBoDFd7Cqvo86AzRqooGBxJgM",
            authDomain: "chipmunk-e6cac.firebaseapp.com",
            databaseURL: "https://chipmunk-e6cac-default-rtdb.europe-west1.firebasedatabase.app",
            projectId: "chipmunk-e6cac",
            storageBucket: "chipmunk-e6cac.appspot.com",
            messagingSenderId: "549030569351",
            appId: "1:549030569351:web:9f9e947415ad61427adf22",
            measurementId: "G-7RRK54ENX5"
          });
          }
    }

    addPost = async({text,localUri})=>{
        const remoteUri=await this.uploadPhotoAsync(localUri,`photos/${this.uid}/${Date.now()}`)
        return new Promise((res,rej)=>{
            this.firestore.collection('posts').add({
                text,
                uid:this.uid,
                timestamp:this.timestamp,
                image:remoteUri
            })
            .then(ref=>{
                res(ref)
            })
            .catch(error=>{
                rej(error)
            })
        })
    }

    uploadPhotoAsync =async (uri,filename)=>{
        const path=`photos/${this.uid}/${Date.now()}.jpg`
    

    return new Promise(async(res,rej)=>{ 
        const response=await fetch(uri)
        const file=await response.blob()
        let upload =firebase.storage().ref(filename).put(file)
        upload.on('state_changed',snapshot=>{},err=>{
            rej(err)
        },
        async()=>{
            const url=await upload.snapshot.ref.getDownloadURL()
            res(url)
        })
    })
}

signOut=()=>{
    firebase.auth().signOut()
    //Firebase.logout()
}

createUSer=async user=>{
    let remoteUri=null
    try{
        await firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)

        let db=this.firestore.collection('users').doc(this.uid)
        db.set({
            name:user.name,
            phoneNumber: phoneNumber,
            avatar:null
        })
        if(user.avatar){
            remoteUri=await this.uploadPhotoAsync(user.avatar,`avatars/${this.uid}`)
            db.set({avatar:remoteUri},{merge:true})
        }
    }
    catch(error){
        alert("Error:",error.message)
    }
}

    get firestore(){
        return firebase.firestore()
    }
    get uid(){
        return (firebase.auth().currentUser||{}).uid
    }
    get timestamp(){
        return Date.now()
    }
}
Fire.shared= new Fire()
export default Fire