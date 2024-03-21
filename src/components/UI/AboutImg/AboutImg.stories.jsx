import { withKnobs, text, select } from "@storybook/addon-knobs";
import AboutImg from "./AboutImg";

export default {
  title: "UI/AboutImg",
  component: AboutImg,
  decorators: [withKnobs],

  argTypes: {
    linkToImg: {
      type: "string",
      description: "Ссылка на картинку",
      defaultValue: "https://relocationsrb.com/assets/DSC00045-UFcHMZsd.jpg",
      control: {
        type: "text",
      },
    },
    imgCaption: {
      type: "string",
      description: "Заглавие картинки",
      defaultValue: "Заголовок",
      control: {
        type: "text",
      },
    },
    imgInfo: {
      type: { name: "array", value: [String] },
      description: "Подробное описание картинки",
      defaultValue: ["Тут дохрена текста про что-то интересное"],
      control: {
        type: "object",
      },
    },
  },
};

function Template({ linkToImg, imgCaption, imgInfo }) {
  return <AboutImg linkToImg={linkToImg} imgCaption={imgCaption} imgInfo={imgInfo} />;
}
export const Default = Template.bind({});
Default.args = {
  linkToImg: "https://relocationsrb.com/assets/DSC00045-UFcHMZsd.jpg",
  imgCaption: "Заголовок",
  imgInfo: ["Тут дохрена текста про что-то интересное"],
};
