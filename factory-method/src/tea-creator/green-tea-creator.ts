import { GreenTea } from "../tea/green-tea";
import { Tea } from "../tea/tea";
import { TeaCreator } from "./tea-creator";

export class GreenTeaCreator extends TeaCreator {
  createTea(): Tea {
    const tea = new GreenTea(1);
    tea.brew(3);
    return tea;
  }
}
