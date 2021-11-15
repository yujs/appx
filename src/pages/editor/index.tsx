import { useState } from 'react';
import Toolbar from './Toolbar';
import Content from './Content';
import { DndContext, DragOverlay } from '@dnd-kit/core';
import BaseComponent from './Component';

const Editor = () => {
  const [components, setComponents] = useState<any>([]);
  console.log('组件：', components);
  return (
    <DndContext
      onDragEnd={(e) => {
        setComponents([...components, <BaseComponent type={e.active?.id}></BaseComponent>]);
      }}
    >
      <DragOverlay></DragOverlay>
      <div style={{ display: 'flex', position: 'relative' }}>
        <Toolbar />
        <Content>{components.map((item) => item)}</Content>
      </div>
    </DndContext>
  );
};

export default Editor;
