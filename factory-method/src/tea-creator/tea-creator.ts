import { Tea } from "../tea/tea";

export abstract class TeaCreator {
  abstract createTea(): Tea;

  makeTea() {
    return this.createTea();
  }
}
