import styles from './Content.less';
import Droppable from './Droppable';

const EditorContent = (props: any) => {
  console.log('拿到了吗：',props.children);
  return (
    <Droppable className={styles.content} id="content">
      {props.children}
    </Droppable>
  );
};

export default EditorContent;
