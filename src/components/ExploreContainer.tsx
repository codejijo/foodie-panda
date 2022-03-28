import styles from './ExploreContainer.module.css';
import {IonButton} from '@ionic/react';
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className={styles.container}>
      <strong>{name}</strong>
      <p>Explore <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>
      <IonButton expand="block" onClick={() => signOut(auth)}>Log Out</IonButton>
    </div>
  );
};

export default ExploreContainer;
