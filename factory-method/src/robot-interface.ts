import { BlackTeaCreator } from "./tea-creator/black-tea-creator";
import { GreenTeaCreator } from "./tea-creator/green-tea-creator";
import { TeaCreator } from "./tea-creator/tea-creator";
import { Tea } from "./tea/tea";

export enum TeaType {
  Black,
  Green,
}

export class RobotInterface {
  private greenTeaCreator: TeaCreator;
  private blackTeaCreator: TeaCreator;

  constructor() {
    this.greenTeaCreator = new GreenTeaCreator();
    this.blackTeaCreator = new BlackTeaCreator();
  }

  makeTea(type: TeaType) {
    switch (type) {
      case TeaType.Black:
        return this.blackTeaCreator.makeTea();
      case TeaType.Green:
        return this.greenTeaCreator.makeTea();
    }
  }
}
