import { Button, Input, Select } from 'antd';
import Draggable from './Draggable';
import styles from './Toolbar.less';

const EditorToolbar = () => {
  return (
    <div className={styles.toolbar}>
      <Draggable id="button">
        <Button style={{ width: '100%' }} type="primary">
          Button
        </Button>
      </Draggable>
      <Draggable id="input">
        <Input></Input>
      </Draggable>
      <Draggable id="select">
        <Select style={{ width: '100%' }}>
          <Select.Option value="111">111</Select.Option>
        </Select>
      </Draggable>
    </div>
  );
};

export default EditorToolbar;
