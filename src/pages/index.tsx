import { Formik, Field, FieldProps, Form } from 'formik';
import { Box, Button, FormGroup, Typography} from "@mui/material"
import type { NextPage } from 'next'
import Lottie from 'react-lottie';

import completed from '../animation/completed.json';
import { Input } from '../Components/Input'
import { useState } from 'react';
import { validationSchema } from '../schemas/formSchema';


export interface IFormInitialValues {
   name: string
   phone: string
   email: string
   birthday: string;
}

const Home: NextPage = () => {
  const [isSubmited, setIsSubmited] = useState(false)

  const initialValues: IFormInitialValues = {
    name: '',
    phone: '',
    email: '',
    birthday:  '',
  }

  const inputs = [
    {
      id: '1',
      name: "name",
      label: 'Digite seu nome:',
      placeholder: 'Nome'
    },
    {
      id: '2',
      name: "phone",
      type: 'number',
      label: 'Digite seu Telefone:',
      placeholder: 'Telefone'
    },
    {
      id: '3',
      name: "email",
      type: 'email',
      label: 'Digite seu Email:',
      placeholder: 'E-mail'
    },
    {
      id: '4',
      name: "birthday",
      label: 'Digite sua data de nascimento:',
      type: 'date'
    },
  ]

  const [formValues, setFormValues] = useState<IFormInitialValues>(initialValues)

  const getFormValues = (values: any) => {
    setFormValues(values)
    setIsSubmited(true)
  }

  const defaultOptions = {
    loop: false,
    autoplay: true, 
    animationData: completed,
    // rendererSettings: {
    //   preserveAspectRatio: 'xMidYMid slice'
    // }
  };
  

  if(isSubmited) {
    return (
     <Box sx={{width: '100%', display: 'flex', flexDirection: 'column',alignItems: 'center', justifyContent: 'center'}}>
      <Box sx={{ width: '600px', height: '600px', margin: '0 auto'}}>
        <Lottie options={defaultOptions} />
      </Box>
        <Typography sx={{ fontWeight: 700 , fontSize: '3rem'}}>Submission completed!</Typography>
     </Box>
    )
  }

  return (
  <Formik
    initialValues={formValues}
    validateOnBlur={false}
    validateOnChange={false}
    onSubmit={getFormValues}
    validationSchema={validationSchema}
    enableReinitialize
  >
        {() => (
          <Form style={{ width: '100%'}}>
            <Box sx={{  width: '100%', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <FormGroup sx={{  width: '30%'}}>
                {inputs.map(input => (
                  <Field
                  key={input.id} 
                  >
                {({
                  form,
                }: FieldProps<string[]>) => (
                  <Input 
                  name={input.name}
                  type={input.type}
                  labelText={input.label}
                  placeholder={input.placeholder} 
                  value={form.values[input.name]}
                  isError={!!form.errors[input.name]}
                  errorText={form.errors[input.name]}
                  onChange={e =>
                    form.setFieldValue(input.name, e.target.value)
                  }
                />
                )}
                </Field>       
                ))}
                <Button  variant="contained" type="submit" >Enviar</Button>
              </FormGroup>
          </Box>
          </Form>
        )}
    </Formik>
  )
}

export default Home
