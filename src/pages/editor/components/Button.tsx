import { Button, ButtonProps } from 'antd';


const XButton = (props: any) => {
  return <Button {...props}>{props.name || 'button'}</Button>;
};

export default XButton;
