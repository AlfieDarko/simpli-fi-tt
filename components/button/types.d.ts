export interface ButtonProps
  extends React.DetailedHTMLProps<React.DetailedHTMLProps<HTMLButtonElement>, HTMLButtonElement> {
  // If true, the button will be disabled
  disabled?: boolean;
  // The content of the button
  text?: string;
  // a function that will be executed via the onClick event
  children?: any;
  // the content of the button, displayed if the text prop is null
  action?: () => void;
  // The button contexts
  status: 'primary' | 'secondary' | 'danger';
}
