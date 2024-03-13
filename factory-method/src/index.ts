import { RobotInterface, TeaType } from "./robot-interface";
import { Tea } from "./tea/tea";

const robotInterface = new RobotInterface();

let tea: Tea;
if (new Date().getDate() % 2 === 1) {
  tea = robotInterface.makeTea(TeaType.Black);
} else {
  tea = robotInterface.makeTea(TeaType.Green);
}

tea.drink();
