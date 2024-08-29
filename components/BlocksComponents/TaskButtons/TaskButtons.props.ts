import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { FirstTaskInterface } from '../../../interfaces/firstPart.interface';
import { CheckFirstAnswerArguments } from '../../../interfaces/refactor.interface';


export interface TaskButtonsProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    checkAnswerArgs: CheckFirstAnswerArguments,
    isFault: boolean,
    setTask: (e: FirstTaskInterface | null) => void,
}
