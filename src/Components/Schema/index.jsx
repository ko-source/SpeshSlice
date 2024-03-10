import * as Yup from 'yup';

let SignupSchema = Yup.object({
    username: Yup.string().min(2).required("Username is required"),
    email: Yup.string().email().required("Email is required"),
    password: Yup.string().min(8).required("Please enter your password"),
    confirm_password: Yup.string()
      .required()
      .oneOf([Yup.ref("password"), null], "Password must match"),
      securityCode:Yup.number().required("Required")
})

let loginSchema = Yup.object({
    email: Yup.string().email().required("Email is required"),
    password: Yup.string().required("Password is required"),
    securityCode:Yup.number().required("Required")
})


export {SignupSchema, loginSchema}