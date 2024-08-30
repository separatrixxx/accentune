import { PromoSlideProps } from './PromoSlide.props';
import styles from './PromoSlide.module.css';
import Link from 'next/link';
import Image from 'next/image';


export const PromoSlide = ({ photo, url }: PromoSlideProps): JSX.Element => {
	return (
		<Link href={url} target="_blank">
			<Image className={styles.promoSlide} draggable='false'
				loader={() => photo}
				src={photo}
				alt='promo image'
				width={1}
				height={1}
				unoptimized={true}
			/>
		</Link>
	);
};