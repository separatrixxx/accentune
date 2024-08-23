import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { CoursesData } from '../../../interfaces/webinars.interface';


export interface CoursesListProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    availableCourses: CoursesData[] | null,
    setWebinarsType: (e: 'about' | 'courses' | null) => void,
}
