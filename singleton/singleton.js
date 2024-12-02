class Singleton {
  static #instance = null;

  constructor() {
    if (new.target === Singleton) {
      throw new Error("싱글톤 : new 키워드로 호출 불가능");
    }
  }

  static getInstance() {
    if (!this.instance) {
      this.instance = this;
      console.log("싱글톤 : 정상적으로 인스턴스가 생성됨");
    }

    return this.instance;
  }
}

const instance1 = Singleton.getInstance(); // 정상 작동
const instance2 = new Singleton(); // 에러 발생
