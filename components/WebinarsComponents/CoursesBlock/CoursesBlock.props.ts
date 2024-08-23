import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface CoursesBlockProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    setWebinarsType: (e: 'about' | 'courses' | null) => void,
}
