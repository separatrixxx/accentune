import styles from './ProfilePage.module.css';
import { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/router';


export const ProfilePage = (): JSX.Element => {
  const router = useRouter();

  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={true}
        toastOptions={{
          duration: 2000,
        }}
      />
      <div className={styles.wrapper}>
        Profile
      </div>
    </>
  );
};
