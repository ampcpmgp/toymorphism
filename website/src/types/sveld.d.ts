export interface Component {
  moduleName: string;
  filePath: string;
  props: ComponentProp[] | any;
}

export interface ComponentProp {
  name: string;
  kind: string;
  type: string;
  isFunction: boolean;
  isFunctionDeclaration: boolean;
  constant: boolean;
  reactive: boolean;
  value?: string;
  description?: string;
}

/**
 * For Component Page
 */
export interface UiProps extends ComponentProp {
  _value?: any;
  _checked?: boolean;
  _inputType: string;
  _selectableValues: string[];
}
