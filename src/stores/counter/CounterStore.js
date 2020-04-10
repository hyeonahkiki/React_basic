import { decorate, observable, action } from "mobx";

class CounterStore {
  number = 0;

  constructor(root) {
    this.root = root;
  }

  onIncrease = () => {
    this.number += 1;
  };
  onDecrease = () => {
    this.number -= 1;
  };
}
decorate(CounterStore, {
  number: observable,
  // observable한 상태를 바꾸는 것이 action
  onIncrease: action,
  onDecrease: action,
});

export default CounterStore;
