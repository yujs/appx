import { useDroppable } from '@dnd-kit/core';
import styles from './Content.less';



const Droppable = (props: any) => {
  const { setNodeRef } = useDroppable({
    id: props.id,
  });
  return (
    <div ref={setNodeRef} className={styles.content}>
      {props.children}
    </div>
  );
};

export default Droppable;
