import { useState } from 'react';
import Toolbar from './Toolbar';
import Content from './Content';
import { DndContext, DragOverlay } from '@dnd-kit/core';
import BaseComponent from './Component';
import SettingBar from './SettingBar';
import { getDefaultComponentProps } from './model';

const Editor = () => {
  const [componentIndex, setComponentIndex] = useState(0);
  const [componentData, setComponentData] = useState<any>([]);
  const [currentActivedProps, setCurrentActivedProps] = useState<any>();

  const renderComponent = () => {
    return componentData.map((item: any) => <BaseComponent {...item}></BaseComponent>);
  };

  const getComponentIndex = (key: string) => {
    return componentData.map((item: any) => item.key).indexOf(key);
  };

  console.log('元数据：', componentData);

  return (
    <DndContext
      onDragEnd={(e) => {
        const type = e.active?.id;
        const index = componentIndex + 1;
        const key = type + index;
        setComponentIndex(index);
        const base = { ...getDefaultComponentProps(type), key, conponentType: type };
        const newComponent = {
          type,
          key,
          name: key,
          base,
          onClick: (name: string, baseProps: any) => {
            setCurrentActivedProps(baseProps);
          },
        };
        setCurrentActivedProps(base);
        setComponentData([...componentData, newComponent]);
      }}
    >
      <DragOverlay></DragOverlay>
      <div style={{ display: 'flex', position: 'relative' }}>
        <Toolbar />
        <Content>{renderComponent()}</Content>
        <SettingBar
          componentType={currentActivedProps?.conponentType}
          componentProps={currentActivedProps}
          onChange={(e: any) => {
            componentData[getComponentIndex(e.key)].base = e;
            setComponentData([...componentData]);
          }}
        ></SettingBar>
      </div>
    </DndContext>
  );
};

export default Editor;
