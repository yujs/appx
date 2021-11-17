import styles from './SettingBar.less';
import { Form, Input, Select } from 'antd';

const SettingBar = (props: { componentProps: any; onChange: any; componentType: string }) => {
  const { componentProps, onChange, componentType } = props;
  const onchangeHandle = (key: string, value: any) => {
    onChange({
      ...componentProps,
      [key]: value,
    });
  };
  return (
    <div className={styles.settingBar}>
      <Form labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
        {componentType === 'button' && (
          <Form.Item label="组件名">
            <Input
              value={componentProps?.name}
              onChange={(e) => onchangeHandle('name', e.target.value)}
            />
          </Form.Item>
        )}
        {componentType === 'button' && (
          <Form.Item label="类型">
            <Select value={componentProps?.type} onChange={(e) => onchangeHandle('type', e)}>
              <Select.Option value="default">default</Select.Option>
              <Select.Option value="primary">primary</Select.Option>
              <Select.Option value="dashed">dashed</Select.Option>
            </Select>
          </Form.Item>
        )}
        {componentType === 'input' && (
          <Form.Item label="值">
            <Input
              value={componentProps?.value}
              onChange={(e) => onchangeHandle('value', e.target.value)}
            />
          </Form.Item>
        )}
      </Form>
    </div>
  );
};

export default SettingBar;
