import React from 'react';
import { useDispatch } from 'react-redux';
import authServices from '../../appwrite/auth';
import { logout } from '../../store/authSlice';
import { motion } from 'framer-motion';

function LogoutBtn() {
    const dispatch = useDispatch();

    const logoutHandler = () => {
        authServices.logout().then(() => {
            dispatch(logout());
        });
    };

    return (
        <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.05, backgroundColor: 'red-900' }} // Darker purple on hover
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 bg-red-800 text-white font-semibold rounded-full transition-all duration-200 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-red-900 focus:ring-offset-2"
            onClick={logoutHandler}
        >
            Logout
        </motion.button>
    );
}

export default LogoutBtn;