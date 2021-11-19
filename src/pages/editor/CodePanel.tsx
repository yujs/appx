import { useState, useEffect } from 'react';
import styles from './CodePanel.less';
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/nightOwl';
import generateCode from './utils/code';

const CodePanel = (props: any) => {
  const [code, setCode] = useState<string | undefined>(undefined);

  useEffect(() => {
    const getCode = async () => {
      const code = await generateCode(props.componentsData);
      setCode(code);
    };
    getCode();
  }, [props.componentsData]);

  return (
    <div className={styles.codePanel}>
      <Highlight
        {...defaultProps}
        theme={theme}
        code={code || '// Formatting code… please wait ✨'}
        language="jsx"
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={style}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
};

export default CodePanel;
