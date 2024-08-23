import { useState } from "react";
import { FirstTaskInterface } from "../interfaces/firstPart.interface";
import { SecondTaskInterface } from "../interfaces/secondPart.interface";
import { CourseInfoInterface, CoursesInterface } from "../interfaces/webinars.interface";


export const useHelpStates = () => {
    const [firstTask, setFirstTask] = useState<FirstTaskInterface | null>(null);
    const [secondTask, setSecondTask] = useState<SecondTaskInterface | null>(null);
    const [isCorrect, setIsCorrect] = useState<boolean>(false);
    const [isDecided, setIsDecided] = useState<boolean>(false);
    const [isFault, setIsFault] = useState<boolean>(false);
    const [answer, setAnswer] = useState<string>('');
    const [date, setDate] = useState<string | null>(null);
    const [index, setIndex] = useState<number | null>(null);
    const [completed, setCompleted] = useState<'completed' | 'unsubmitted' | null>(null);
    const [taskId, setTaskId] = useState<string | null>(null);
    const [courseInfo, setCourseInfo] = useState<CourseInfoInterface | null>(null);
    const [isFormLoading, setIsFormLoading] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isCoursePlan, setIsCoursePlan] = useState<boolean>(false);
    
    return {
        firstTask,
        secondTask,
        isCorrect,
        isDecided,
        isFault,
        answer,
        date,
        index,
        completed,
        taskId,
        courseInfo,
        isFormLoading,
        isLoading,
        isCoursePlan,
        setFirstTask,
        setSecondTask,
        setIsCorrect,
        setIsDecided,
        setIsFault,
        setAnswer,
        setDate,
        setIndex,
        setCompleted,
        setTaskId,
        setCourseInfo,
        setIsFormLoading,
        setIsLoading,
        setIsCoursePlan,
    };
};
