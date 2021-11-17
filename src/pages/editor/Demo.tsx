import { Input, Button } from 'antd';
import { useState } from 'react';

const Demo = () => {
  // 初始化值
  const [inputValue, setInputValue] = useState();

  // 组件事件
  const inputChange = (e) => {
    setInputValue(e.target.value);
  };

  const buttonClick = () => {
    
  };

  // dom
  return (
    <div>
      <Input value={inputValue} onChange={inputChange} />
      <Button onClick={buttonClick}>按钮</Button>
    </div>
  );
};
export default Demo;
