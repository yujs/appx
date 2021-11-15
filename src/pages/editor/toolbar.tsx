import { Button, Input, Select } from 'antd';
import styles from './Toolbar.less';

const Toolbar = () => {
  return (
    <div className={styles.toolbar}>
      <Button type="primary">Button</Button>
      <Input></Input>
      <Select>
        <Select.Option value="111">111</Select.Option>
      </Select>
    </div>
  );
};

export default Toolbar;
