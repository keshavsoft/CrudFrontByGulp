import { StartFunc as StartFuncAddListeners } from "./AddListeners/startFunc.js";

const StartFunc = async () => {
    LocalFunc();
    StartFuncAddListeners();
};

const LocalFunc = () => {
    let myElements = document.getElementsByClassName('DependantTablesClass');

    for (let i = 0; i < myElements.length; i++) {
        myElements[i].click();
    };
};

export { StartFunc };
