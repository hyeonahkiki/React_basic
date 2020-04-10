import Catstore from "./cat/CatStore";
import CounterStore from "./counter/CounterStore";

class RootStore {
  // 생성자 : 생성되면서 실행
  constructor() {
    this.catStore = new Catstore(this);
    this.counterStore = new CounterStore(this);
  }
}

export default RootStore;
