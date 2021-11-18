import styles from './Content.less';
import Droppable from './Droppable';

const EditorContent = (props: any) => {
  return (
    <Droppable  id="content">
      {props.children}
    </Droppable>
  );
};

export default EditorContent;
