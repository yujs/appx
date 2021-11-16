import { Select, Input, Button } from 'antd';
import { useState } from 'react';

const Demo = () => {
  // 初始化值
  const [inputValue, setInputValue] = useState();
  const [selectValue, setSelectValue] = useState();

  // 组件事件
  const inputOnChange = (e) => {
    setInputValue(e.target.value);
  };
  const selectOnChange = (e) => {
    setSelectValue(e);
  };

  
  // 点击事件
  const submit = () => {};

  // 获取所有值
  const getValues = () => {};

  // 发送网络请求
  const request = () => {};

  // dom 
  return (
    <div>
      <Input value={inputValue} onChange={inputOnChange} />
      <Select value={selectValue} onChange={selectOnChange}>
        <Select.Option value="id">id</Select.Option>
      </Select>
      <Button onClick={submit}>按钮</Button>
    </div>
  );
};
export default Demo;
