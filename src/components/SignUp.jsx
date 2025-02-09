import React, { useState } from 'react';
import authServices from '../appwrite/auth';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../store/authSlice';
import { Button, Input, Logo } from './index.js';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';

function SignUp() {
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();

    const create = async (data) => {
        setError("");
        try {
            const userData = await authServices.createAccount(data);
            if (userData) {
                const userData = await authServices.getCurrentUser();
                if (userData) dispatch(login(userData));
                navigate("/");
            }
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className="flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 p-10 rounded-2xl">
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mx-auto w-full max-w-lg bg-gray-800/30 backdrop-blur-lg rounded-xl p-10 border border-gray-700/50 shadow-2xl"
            >
                <motion.div
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mb-6 flex justify-center"
                >
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" className="text-white" />
                    </span>
                </motion.div>
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-center text-3xl font-bold leading-tight text-white"
                >
                    Sign up to create account
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="mt-2 text-center text-base text-gray-400"
                >
                    Already have an account?&nbsp;
                    <Link
                        to="/login"
                        className="font-medium text-blue-500 transition-all duration-200 hover:underline"
                    >
                        Sign In
                    </Link>
                </motion.p>
                {error && (
                    <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-red-500 mt-6 text-center"
                    >
                        {error}
                    </motion.p>
                )}
                <form onSubmit={handleSubmit(create)} className="mt-8">
                    <div className="space-y-6 text-white">
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.8 }}
                        >
                            <Input
                                label="Full Name:"
                                placeholder="Enter your full name"
                                {...register("name", {
                                    required: true,
                                })}
                                className="bg-gray-700/50 text-black border-gray-600 focus:border-blue-500 focus:ring-blue-500"
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 1 }}
                        >
                            <Input
                                label="Email:"
                                placeholder="Enter your email"
                                type="email"
                                {...register("email", {
                                    required: true,
                                    validate: {
                                        matchPatern: (value) =>
                                            /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                            "Email address must be valid",
                                    },
                                })}
                                className="bg-gray-700/50 text-black border-gray-600 focus:border-blue-500 focus:ring-blue-500"
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 1.2 }}
                        >
                            <Input
                                label="Password:"
                                type="password"
                                placeholder="Enter your password"
                                {...register("password", {
                                    required: true,
                                })}
                                className="bg-gray-700/50 text-black border-gray-600 focus:border-blue-500 focus:ring-blue-500"
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 1.4 }}
                        >
                            <Button
                                type="submit"
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition-all duration-200"
                            >
                                Create Account
                            </Button>
                        </motion.div>
                    </div>
                </form>
            </motion.div>
        </div>
    );
}

export default SignUp;