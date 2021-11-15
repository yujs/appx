import { Input, Select, Button } from 'antd';

const BaseComponent = (props: { type: string }) => {
    
  const getComponent = (type: string) => {
    switch (type) {
      case 'Button':
        return <Button></Button>;
      case 'Select':
        return (
          <Select>
            <Select.Option value="">无</Select.Option>
          </Select>
        );
      case 'Input':
        return <Input></Input>;
    }
    return <></>;
  };

  return getComponent(props.type);
};

export default BaseComponent;
