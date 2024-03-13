import { BlackTea } from "../tea/black-tea";
import { Tea } from "../tea/tea";
import { TeaCreator } from "./tea-creator";

export class BlackTeaCreator extends TeaCreator {
  createTea(): Tea {
    const tea = new BlackTea(5);
    tea.brew(5);
    return tea;
  }
}
