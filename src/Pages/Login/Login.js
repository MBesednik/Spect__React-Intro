import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { 
    Form,
    Title,
    FormRow,
    InputLabel,
    InputText,
    InputError 
} from '../../lib/style/generalStyles';
import Section from '../../components/Section/Section';
import { Button } from '../../lib/style/generalStyles';
import Loader from "react-loader-spinner";

export const Login = () => {

    const style = {textAlign: 'center'};
    const [isLoading, setIsLoading] = useState(false);
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            isAdmin: false
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('Invalid email adress')
                .required('Email is required'),
            password: Yup.string()
                .min(8, 'Password must be at least 8 characters long')
                .required('Password is required'),
        }),
        onSubmit: values => {
            setIsLoading(true);

            setTimeout(() => {
                setIsLoading(false);
                alert(JSON.stringify(values));
            }, 1000);
        }
    });

    return (
        <>
            <Title>Login</Title>
            <Section withoutTopPadding={true}>
                {!isLoading
                    ? <Form onSubmit={formik.handleSubmit}>
                        <FormRow>
                            <InputLabel htmlFor='email'>Email</InputLabel>
                            <InputText
                                id='email'
                                type='email'
                                {...formik.getFieldProps('email')}
                            />
                            {formik.touched.email && formik.errors.email
                                ? <InputError>{formik.errors.email}</InputError>
                                : null}
                        </FormRow>
                        <FormRow>
                            <InputLabel htmlFor='password'>Password</InputLabel>
                            <InputText
                                id='password'
                                type='password'
                                {...formik.getFieldProps('password')}
                            />
                            {formik.touched.password && formik.errors.password
                                ? <InputError>{formik.errors.password}</InputError>
                                : null}
                        </FormRow>
                        <Button type="submit" text="Login"/>
                    </Form>
                    : (
                    <Loader style={style}
                    type="TailSpin"
                    color="#e4b43c"
                    height={150}
                    width={150}
                    timeout={1000}
                    />
          )}
            </Section>
        </>

    );
}