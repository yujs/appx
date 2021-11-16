import { useState } from 'react';
import Toolbar from './Toolbar';
import Content from './Content';
import { DndContext, DragOverlay } from '@dnd-kit/core';
import BaseComponent from './Component';
import SettingBar from './SettingBar';
import ButtonDefaultProps from './model/Button';

const Editor = () => {
  const [componentProps, setComponentProps] = useState({});
  const [components, setComponents] = useState<any>([]);
  const [componentIndex, setComponentIndex] = useState(0);
  const [activedComponent, setActivedComponent] = useState<string>();

  console.log(componentProps);

  return (
    <DndContext
      onDragEnd={(e) => {
        const type = e.active?.id;
        const index = componentIndex + 1;
        const name = type + index;
        setActivedComponent(name);
        setComponentIndex(index);
        const data = {
          type,
          name,
          onClick: (name: string) => {
            setActivedComponent(name);
          },
        };

        setComponentProps({
          ...componentProps,
          [name]: ButtonDefaultProps,
        });

        setComponents([...components, <BaseComponent {...data}></BaseComponent>]);
      }}
    >
      <DragOverlay></DragOverlay>
      <div style={{ display: 'flex', position: 'relative' }}>
        <Toolbar />
        <Content>{components.map((item: any) => item)}</Content>
        <SettingBar
          componentProps={activedComponent && componentProps[activedComponent]}
          onChange={(e: any) =>
            activedComponent && setComponentProps({ ...componentProps, [activedComponent]: e })
          }
        ></SettingBar>
      </div>
    </DndContext>
  );
};

export default Editor;
