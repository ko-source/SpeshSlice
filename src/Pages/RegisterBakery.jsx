import React, { useState } from 'react';
import Button from '../Components/Button';
import { SignupSchema } from '../Components/Schema';
import { Formik } from 'formik';
import { Squares } from "react-activity";
import "react-activity/dist/library.css";
import { useNavigate } from 'react-router-dom';
import bakery_reg from '../assets/images/cycleShop.jpg'
import customization from '../assets/images/customization.jpg'
const initialValues = {
    ownerName: "",
    businessName: "",
    speciality: "",
    contactNumber: "",
    contactEmail: "",
    timing: "",
    logo: null,
    termsAgreed: false,
};

const RegisterBakery = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageChange = (event, setFieldValue) => {
        const file = event.currentTarget.files[0];
        if (file) {
            setFieldValue("logo", file);
            const reader = new FileReader();
            reader.onload = (e) => {
                setSelectedImage(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="flex flex-col bg-gradient-to-r from-gradient-1 to-gradient-5 ">
        <div className="container mx-auto flex justify-center lg:w-12/12 md:w-10/12">
            <div className="w-full  bg-white rounded-lg p-8 lg:w-6/12 md:w-8/12 mx-auto">
                <h1 className="text-3xl font-semibold mb-8 bg-gradient-to-r from-gradient-1 to-gradient-5 bg-clip-text text-transparent">Register Your Bakery</h1>
                <Formik initialValues={initialValues} validationSchema={SignupSchema} onSubmit={async (values) => {
                    setLoading(true);
                    // Simulate form submission delay
                    setTimeout(() => {
                        setLoading(false);
                        navigate("/login");
                    }, 2000);
                }}>
                    {({ values, errors, touched, handleChange, handleBlur, handleSubmit, setFieldValue }) => (
                        <form onSubmit={handleSubmit}>
                            <input type="text" onChange={handleChange} onBlur={handleBlur} value={values.ownerName} name="ownerName" required className="border border-gray-200 rounded-lg h-16 shadow-none pl-5 text-base w-full mb-4" placeholder="Owner Name" />
                            {errors.ownerName && touched.ownerName && <p className="text-red-500 text-left">{errors.ownerName}</p>}
                            <input type="text" onChange={handleChange} onBlur={handleBlur} value={values.businessName} name="businessName" required className="border border-gray-200 rounded-lg h-16 shadow-none pl-5 text-base w-full mb-4" placeholder="Business Name" />
                            {errors.businessName && touched.businessName && <p className="text-red-500 text-left">{errors.businessName}</p>}
                            <input type="text" onChange={handleChange} onBlur={handleBlur} value={values.speciality} name="speciality" required className="border border-gray-200 rounded-lg h-16 shadow-none pl-5 text-base w-full mb-4" placeholder="Speciality" />
                            {errors.speciality && touched.speciality && <p className="text-red-500 text-left">{errors.speciality}</p>}
                            <input type="text" onChange={handleChange} onBlur={handleBlur} value={values.contactNumber} name="contactNumber" required className="border border-gray-200 rounded-lg h-16 shadow-none pl-5 text-base w-full mb-4" placeholder="Contact Number" />
                            {errors.contactNumber && touched.contactNumber && <p className="text-red-500 text-left">{errors.contactNumber}</p>}
                            <input type="email" onChange={handleChange} onBlur={handleBlur} value={values.contactEmail} name="contactEmail" required className="border border-gray-200 rounded-lg h-16 shadow-none pl-5 text-base w-full mb-4" placeholder="Contact Email" />
                            {errors.contactEmail && touched.contactEmail && <p className="text-red-500 text-left">{errors.contactEmail}</p>}
                            <input type="text" onChange={handleChange} onBlur={handleBlur} value={values.timing} name="timing" required className="border border-gray-200 rounded-lg h-16 shadow-none pl-5 text-base w-full mb-4" placeholder="Timing" />
                            {errors.timing && touched.timing && <p className="text-red-500 text-left">{errors.timing}</p>}
                            <div className="flex items-right">
                                <label htmlFor="logo" className="border border-gray-200 rounded-lg h-16 shadow-none pl-5 text-base w-full mb-4 cursor-pointer bg-gray-100 hover:bg-gray-200 flex justify-center items-center">
                                    {selectedImage ? (
                                        <img src={selectedImage} alt="Selected Logo" className="h-full mr-2" />
                                    ) : (
                                        <span>Select Logo</span>
                                    )}
                                </label>
                                <input type="file" onChange={(event) => handleImageChange(event, setFieldValue)} id="logo" className="hidden" accept="image/*" />
                            </div>
                            {errors.logo && touched.logo && <p className="text-red-500 text-left">{errors.logo}</p>}
                       
                        </form>
                    )}
                </Formik>
            </div>
            <div className='w-[50%]'>
            {/* <div className="h-[800px] w-[500px] bg-white mt-10 rounded-lg transform rotate-45 ml-[300px]"></div> */}
                {/* <img src={bakery_reg} alt="" className=' h-[600px]  mt-12'/> */}
            </div>
        </div>

















        <div className="container mx-auto flex justify-center lg:w-12/12 md:w-10/12">
    <div className='w-[50%]'>
        {/* <div className="h-[800px] w-[800px] bg-white mt-10 rounded-lg transform rotate-45 ml-[-500px]"></div> */}
        {/* <img src={customization} alt="" /> */}
    </div>
    <div className="w-full bg-white rounded-lg p-8 lg:w-6/12 md:w-8/12 mx-auto">
        <h1 className="text-3xl font-semibold mb-8 bg-gradient-to-r from-gradient-1 to-gradient-5 bg-clip-text text-transparent">Customize Cake Info</h1>
        <Formik initialValues={initialValues} validationSchema={SignupSchema} onSubmit={async (values) => {
            setLoading(true);
            // Simulate form submission delay
            setTimeout(() => {
                setLoading(false);
                navigate("/login");
            }, 2000);
        }}>
            {({ values, errors, touched, handleChange, handleBlur, handleSubmit, setFieldValue }) => (
                <form onSubmit={handleSubmit}>
                    <div className="mt-2 flex flex-col lg:flex-row gap-4 mb-4">
                        <input
                            type="text"
                            name="pricePerPound"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.pricePerPound}
                            required
                            className="border border-gray-200 rounded-lg h-16 shadow-none pl-5 text-base lg:w-1/2"
                            placeholder="Price per pound"
                        />
                        <input
                            type="text"
                            name="pricePerDecoration"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.pricePerDecoration}
                            required
                            className="border border-gray-200 rounded-lg h-16 shadow-none pl-5 text-base lg:w-1/2"
                            placeholder="Price per decoration"
                        />
                    </div>
                    <input type="text" onChange={handleChange} onBlur={handleBlur} value={values.priceForTiers} name="priceForTiers" required className="border border-gray-200 rounded-lg h-16 shadow-none pl-5 text-base w-full mb-4" placeholder="Price for tiers" />
                    <input type="text" onChange={handleChange} onBlur={handleBlur} value={values.priceForShape} name="priceForShape" required className="border border-gray-200 rounded-lg h-16 shadow-none pl-5 text-base w-full mb-4" placeholder="Price for shape" />
                    <input type="text" onChange={handleChange} onBlur={handleBlur} value={values.tax} name="tax" required className="border border-gray-200 rounded-lg h-16 shadow-none pl-5 text-base w-full mb-4" placeholder="Tax" />
                  
                    {errors.logo && touched.logo && <p className="text-red-500 text-left">{errors.logo}</p>}
                    <div className="mt-5 flex items-center">
                        <input type="checkbox" required id="terms" checked={values.termsAgreed} onChange={handleChange} name="termsAgreed" />
                        <label htmlFor="terms" className="ml-2">I agree to terms & Policy.</label>
                    </div>
                    <Button type="submit" className="w-full mt-4">{loading ? <Squares /> : "Register Bakery"}</Button>
                    <p className="text-xs text-gray-500 mt-4"><strong>Note:</strong>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy</p>
                </form>
            )}
        </Formik>
    </div>
</div>

        </div>
    );
};

export default RegisterBakery;
