import { useState } from "react";
import { FirstTaskInterface } from "../interfaces/firstPart.interface";
import { SecondTaskInterface } from "../interfaces/secondPart.interface";


export const useHelpStates = () => {
    const [firstTask, setFirstTask] = useState<FirstTaskInterface | null>(null);
    const [secondTask, setSecondTask] = useState<SecondTaskInterface | null>(null);
    const [isCorrect, setIsCorrect] = useState<boolean>(false);
    const [isDecided, setIsDecided] = useState<boolean>(false);
    const [isFault, setIsFault] = useState<boolean>(false);
    const [answer, setAnswer] = useState<string>('');
    const [date, setDate] = useState<string | null>(null);
    const [index, setIndex] = useState<number | null>(null);

    return {
        firstTask,
        secondTask,
        isCorrect,
        isDecided,
        isFault,
        answer,
        date,
        index,
        setFirstTask,
        setSecondTask,
        setIsCorrect,
        setIsDecided,
        setIsFault,
        setAnswer,
        setDate,
        setIndex,
    };
};
