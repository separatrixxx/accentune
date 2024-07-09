import { HtagProps } from './Htag.props';
import styles from './Htag.module.css';
import cn from 'classnames';


export const Htag = ({ tag, children, className, onClick }: HtagProps): JSX.Element => {
	switch (tag) {
		case 'xxxl':
			return <h1 className={cn(className, styles.xxxl)} onClick={onClick}>{children}</h1>;
		case 'xxl':
			return <h1 className={cn(className, styles.xxl)} onClick={onClick}>{children}</h1>;
		case 'xl':
			return <h1 className={cn(className, styles.xl)} onClick={onClick}>{children}</h1>;
		case 'l':
			return <h1 className={cn(className, styles.l)} onClick={onClick}>{children}</h1>;
		case 'm':
			return <h1 className={cn(className, styles.m)} onClick={onClick}>{children}</h1>;
		case 's':
			return <h1 className={cn(className, styles.s)} onClick={onClick}>{children}</h1>;
		default:
			return <></>;
	}
};