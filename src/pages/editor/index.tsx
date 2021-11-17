import { useState } from 'react';
import Toolbar from './Toolbar';
import Content from './Content';
import { DndContext, DragOverlay } from '@dnd-kit/core';
import BaseComponent from './Component';
import SettingBar from './SettingBar';
import ButtonDefaultProps from './model/Button';

const Editor = () => {
  const [componentIndex, setComponentIndex] = useState(0);
  const [activedComponent, setActivedComponent] = useState<string>();
  const [componentData, setComponentData] = useState<any>([]);

  const renderComponent = () => {
    return componentData.map((item: any) => <BaseComponent {...item}></BaseComponent>);
  };

  const getComponentIndex = (key: string) => {
    return componentData.map((item: any) => item.key).indexOf(key);
  };

  const current =
    getComponentIndex(activedComponent) >= 0
      ? componentData[getComponentIndex(activedComponent)].base
      : {};

  return (
    <DndContext
      onDragEnd={(e) => {
        const type = e.active?.id;
        const index = componentIndex + 1;
        const key = type + index;
        setActivedComponent(key);
        setComponentIndex(index);
        const newComponent = {
          type,
          key,
          name: key,
          base: { ...ButtonDefaultProps, key },
          onClick: (name: string) => {
            setActivedComponent(name);
          },
        };
        setComponentData([...componentData, newComponent]);
      }}
    >
      <DragOverlay></DragOverlay>
      <div style={{ display: 'flex', position: 'relative' }}>
        <Toolbar />
        <Content>{renderComponent()}</Content>
        <SettingBar
          componentProps={current}
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
