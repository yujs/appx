import styles from './Content.less';
import Droppable from './Droppable';

const EditorContent = () => {
  return <Droppable className={styles.content} id="content"></Droppable>;
};

export default EditorContent;
