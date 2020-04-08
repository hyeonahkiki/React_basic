// observable : 관찰가능한 상태로 바꾸어준다.
import { observable, decorate } from "mobx";

class Catstore {
  url = "스토어에 있는 URL입니다.";
}

// 클래스를 데코레이터처럼 사용 @observable
// decorate(클래스이름, 객체)
decorate(Catstore, {
  url: observable,
});

export default Catstore;
