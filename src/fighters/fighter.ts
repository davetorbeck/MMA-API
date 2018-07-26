export class Fighter {
  name: string;
  nickname: string;
  age: number;
  weight: number;
  record: string;

  constructor({ name, nickname, age, weight, record }) {
    this.name = name;
    this.nickname = nickname;
    this.age = age;
    this.weight = weight;
    this.record = record;
  }
}
