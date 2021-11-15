import { Button, Input, Select } from 'antd';
import Draggable from './Draggable';
import styles from './Toolbar.less';

const EditorToolbar = () => {
  return (
    <div className={styles.toolbar}>
      <Draggable id="Button">
        <Button style={{ width: '100%' }} type="primary">
          Button
        </Button>
      </Draggable>
      <Draggable id="Input">
        <Input></Input>
      </Draggable>
      <Draggable id="Select">
        <Select style={{ width: '100%' }}>
          <Select.Option value="111">111</Select.Option>
        </Select>
      </Draggable>
    </div>
  );
};

export default EditorToolbar;
