function generateStateCode(props: any) {
  return `const [${props.key}Value, set${props.key.toUpperCase()}Value] = useState()`;
}

function generateEventCode(props: any) {
  const { key, eventName, componentType } = props;
  if (componentType === 'button' && eventName === 'onClick') {
    return `const ${key}Click = () => {};`;
  }
  if (componentType === 'input' && eventName === 'onChange') {
    return `const ${key}Change = (e) => {
        set${key.toUpperCase()}Value(e.target.value);
      };`;
  }
  return '';
}

function generateComponentCode(props: any) {
  if (props.componentType === 'input') {
    return `<Input value={inputValue} onChange={inputChange} />`;
  } else if (props.componentType === 'button') {
    return `<Button onClick={buttonClick}>按钮</Button>`;
  }
  return '';
}

function generatePageCode(data: any[]) {
  let states = '';
  let events = '';
  let doms = '';

  data.forEach((item) => {
    states += generateStateCode(item);
    events += generateEventCode(item);
    doms += generateComponentCode(item);
  });

  return `import { Input, Button } from 'antd';
          import { useState } from 'react';
          const Page= () => {
             ${states}
             ${events}
             return (<>${doms}</>);
          };
          export default Page;`;
}
