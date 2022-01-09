import { getComponentInputType } from "../utils/component";

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
  _defaultValue?: any;
  _checked?: boolean;
  _inputType: ReturnType<typeof getComponentInputType>;
  _selectableValues: string[];
  _description?: string;
}
