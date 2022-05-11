
import * as yup from "yup";

export const LoginSchema = yup.object().shape({
    email: yup.string().email('Wrong email').max(25,'Length must be less than 25').required('Email is required'),
    password: yup.string().min(8,'Length must be more than 8').required('Password is required')
})

export const RegisterSchema = yup.object().shape({
    email: yup.string().email('Wrong email').max(25,'Length must be less than 25').required('Email is required'),
    password: yup.string().min(8,'Length must be more than 8').required('Password is required'),
    username: yup.string().min(3,'Length must be more than 3').required('Username is required')
})
