import { StartFunc as StartFuncForDependantTablesClass } from "./ForDependantTablesClass/entryFile.js";
import { StartFunc as StartFuncForEnterKeyCalculation } from "./ForEnterKeyCalculation/entryFie.js";

const StartFunc = () => {
    StartFuncForDependantTablesClass();
    StartFuncForEnterKeyCalculation();
};

StartFunc();
