import * as yup from "yup";

const feedbackValidation = yup.object().shape({
  email: yup.string().required("Поле E-mail не пустое").email("Введите корректный E-mail"),
  name: yup
    .string()
    .required("Поле Имя не пустое")
    .max(60, "Поле Имя не длиннее 60 символов")
    .test("name", "Введите правильный логин", (value) => {
      // Check for correct nane
      const isName = /^[a-zA-Zа-яА-Я0-9_./+-]+$/.test(value);
      if (!isName) {
        return false;
      }
      return true;
    }),
  feedbackText: yup
    .string()
    .required("Поле 'Сообщение' не пустое")
    .min(10, "Поле 'Сообщение' не короче 10 символов")
    .max(1000, "Поле 'Сообщение' не длиннее 1000 символов")
    .test("feedbackText", "В тексте запрещены символы '{ } < > # \\'", (value) => {
      // Check for correct text
      const isFeedbackText = /[{}<>#\\]/.test(value);
      if (isFeedbackText) {
        return false;
      }
      return true;
    }),
  agree: yup.boolean().oneOf([true]),
});

export default feedbackValidation;
