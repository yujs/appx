// import Button from './components/Button';
import { Input, Button } from 'antd';
import styles from './Component.less';
import { DeleteOutlined } from '@ant-design/icons';

const BaseComponent = (props: { type: string; onClick: any; name: string; base: any }) => {
  const getComponent = (type: string) => {
    switch (type) {
      case 'button':
        return <Button {...props.base}>button</Button>;
      case 'input':
        return <Input {...props.base}></Input>;
    }
    return <></>;
  };

  return (
    <div
      className={styles.component}
      onClick={() => {
        props.onClick(props.name,props.base);
      }}
    >
      {getComponent(props.type)}
      <div className={styles.mask}>
        <div className={styles.delete}>
          <DeleteOutlined />
        </div>
      </div>
    </div>
  );
};

export default BaseComponent;
