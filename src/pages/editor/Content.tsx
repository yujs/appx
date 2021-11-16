import styles from './Content.less';
import Droppable from './Droppable';

const EditorContent = (props: any) => {
  return (
    <Droppable className={styles.content} id="content">
      {props.children}
    </Droppable>
  );
};

export default EditorContent;
