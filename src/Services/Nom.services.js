import { db } from "../firebase-config";
import { collection, getDocs, getDoc, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";




const NomCollectionsRef = collection(db, "Nom");
class NomDataService{
    addNom = (newNom) => {
      return addDoc(NomCollectionsRef, newNom)
    };

    updateNom = (id, updateNom) => {
        const NomDoc = doc(db, "Nom", id);
        return updateDoc(NomDoc, updateNom);
    };

    deleteNom = (id) => {
        const NomDoc = doc(db, "Nom", id);
        return deleteDoc(NomDoc);
    };

    getAllNom = () => {
        return getDocs(NomCollectionsRef);
    };

    getNom = (id) => {
        const NomDoc = doc(db, "Nom", id);
        return getDoc(NomDoc)
    }
}
export default new NomDataService();