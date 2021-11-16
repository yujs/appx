import Button from './components/Button';
import styles from './Component.less';
import { DeleteOutlined } from '@ant-design/icons';

const BaseComponent = (props: { type: string; onClick: any; name: string }) => {
  const getComponent = (type: string) => {
    switch (type) {
      case 'button':
        return <Button name={props.name} />;
    }
    return <></>;
  };

  return (
    <div
      className={styles.component}
      onClick={() => {
        props.onClick(props.name);
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
