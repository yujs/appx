import Toolbar from './Toolbar';
import Content from './Content';
import { DndContext, DragOverlay } from '@dnd-kit/core';

const Editor = () => {
  return (
    <DndContext
      onDragStart={(e) => {
        console.log('start', e);
      }}
      onDragOver={(e) => {
        console.log('over', e);
      }}
    >
      <DragOverlay>hhh</DragOverlay>
      <div style={{ display: 'flex', position: 'relative' }}>
        <Toolbar />
        <Content />
      </div>
    </DndContext>
  );
};

export default Editor;
