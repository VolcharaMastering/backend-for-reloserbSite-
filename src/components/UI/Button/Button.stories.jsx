import { action } from "@storybook/addon-actions";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import Button from "./Button";

export default {
  title: "Button",
  component: Button,
  decorators: [withKnobs],
  argTypes: {
    name: {
      type: "string",
      description: "Имя кнопки",
      defaultValue: "text",
      options: ["text"],
      control: {
        type: "radio",
      },
    },
    size: {
      type: "string",
      description: "Размер экрана где отобразилась кнопка",
      defaultValue: "desctop",
      options: ["desctop", "tablet", "mobile"],
      control: {
        type: "radio",
      },
    },
    type: {
      type: "string",
      description: "Вариант типа кнопки",
      defaultValue: "contact",
      options: ["contact", "other"],
      control: {
        type: "radio",
      },
    },
    color: {
      type: "string",
      description: "цвет кнопки",
      defaultValue: "light",
      options: ["light", "dark"],
      control: {
        type: "radio",
      },
    },
  },
};

// export const Default = () => (
//   <Button
//     name={text('Name', 'Click me')}
//     action={action('Button clicked')}
//     color={select('Color', ['red', 'blue', 'green'], 'blue')}
//     size={select('Size', ['desktop', 'mobile', 'tablet'], 'desktop')}
//     type={select('Type', ['default', 'contact'], 'default')}
//   />
// );

function Template({ name, size, onClick, type, color }) {
  return <Button name={name} size={size} onClick={onClick} type={type} color={color} />;
}
export const Desctop = Template.bind({});
Desctop.args = {
  name: "Button",
  size: "desctop",
  type: "button",
  color: "light",
};
