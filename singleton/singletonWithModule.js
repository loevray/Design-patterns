let instance = null;
class Singleton {
  constructor() {
    if (instance) throw new Error("싱글톤 : 이미 인스턴스가 존재합니다!");
    instance = this;
  }

  getInstance() {
    return this;
  }
}

export default Object.freeze(new Singleton());
