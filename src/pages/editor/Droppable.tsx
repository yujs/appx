import { useDroppable } from '@dnd-kit/core';

const Droppable = (props: any) => {
  const { setNodeRef } = useDroppable({
    id: props.id,
  });
  return <div ref={setNodeRef} style={{ width: '100%', position: 'relative' }}></div>;
};

export default Droppable;
