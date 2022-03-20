import styles from './sing-react-ui.module.scss';

/* eslint-disable-next-line */
export interface SingReactUiProps {}

export function SingReactUi(props: SingReactUiProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to SingReactUi!</h1>
    </div>
  );
}

export default SingReactUi;
