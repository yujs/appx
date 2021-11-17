import ButtonDefaultProps from './Button';
import InputDefaultProps from './Input';

export function getDefaultComponentProps(type: any) {
  switch (type) {
    case 'button':
      return ButtonDefaultProps;
    case 'input':
      return InputDefaultProps;
  }
  return {};
}
