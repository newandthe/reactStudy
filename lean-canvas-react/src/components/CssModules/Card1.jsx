/* 일반적인 CSS 파일 호출 */
// import './Card1.css';

/* CSS Module 호출 */
import styles from './Card1.module.css';

export default function Card1() {
  /* 일반적인 html 내 className 적용 */
  // return <article className="card">Card1</article>;
  /* CSS Module 호출 방식 */
  return <article className={styles.card}>Card1</article>;
}
