import { useDraggable } from '@dnd-kit/core';
import classnames from 'classnames';
import styles from './Draggable.less';

const Draggable = (props: any) => {
  const { attributes, listeners, setNodeRef } = useDraggable({
    id: props.id,
  });
  return (
    <div
      className={classnames(styles.content, styles.cell)}
      ref={setNodeRef}
      {...listeners}
      {...attributes}
    >
      {props.children}
      <div className={styles.mask}></div>
    </div>
  );
};

export default Draggable;
