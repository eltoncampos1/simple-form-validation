import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  name: yup.string().required("Insira um nome"),
  phone: yup.number().required("Insira um número de telefone válido!").positive().integer(),
  email: yup.string().email().required("Informe um e-mail válido!"),
  birthday: yup.date().default(() => {
    return new Date();
  }).required('Informe uma data valida'),
});