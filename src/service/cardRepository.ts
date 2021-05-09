import firebaseApp from "./firebase";

export default class CardRepository {
  saveCard(userId: string, card: any) {
    firebaseApp.database().ref(`${userId}/cards/${card.id}`).set(card);
  }
  removeCard(userId: string, card: any) {
    firebaseApp.database().ref(`${userId}/cards/${card.id}`).remove();
  }
}
