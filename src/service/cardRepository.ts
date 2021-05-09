import firebaseApp from "./firebase";

export default class CardRepository {
  syncCards(userId: string, onUpdate: any) {
    const ref = firebaseApp.database().ref(`${userId}/cards`);
    ref.on("value", (snapshot) => {
      // 업데이트 된다면 snapshot의 value가 설정이 되 있다면
      const value = snapshot.val();
      value && onUpdate(value); // 두번째 인자로 받은 콜백함수 계속 호출
    });
    return () => ref.off();
  }
  saveCard(userId: string, card: any) {
    firebaseApp.database().ref(`${userId}/cards/${card.id}`).set(card);
  }
  removeCard(userId: string, card: any) {
    firebaseApp.database().ref(`${userId}/cards/${card.id}`).remove();
  }
}
