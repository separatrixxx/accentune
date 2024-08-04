import { PromoSlideProps } from './PromoSlide.props';
import styles from './PromoSlide.module.css';
import { Htag } from '../../Common/Htag/Htag';
import Link from 'next/link';


export const PromoSlide = ({ title }: PromoSlideProps): JSX.Element => {
	return (
		<Link href='/'>
			<div className={styles.promoSlide}>
				<Htag tag='xl' className={styles.title}>
					{title}
				</Htag>
			</div>
		</Link>
	);
};