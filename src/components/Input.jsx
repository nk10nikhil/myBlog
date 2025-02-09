import React, { useId } from 'react';
import { motion } from 'framer-motion';

const Input = React.forwardRef(function Input(
    {
        label,
        type = "text",
        className = "",
        ...props
    },
    ref
) {
    const id = useId();

    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full"
        >
            {label && (
                <motion.label
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="inline-block mb-2 pl-1 text-gray-300"
                    htmlFor={id}
                >
                    {label}
                </motion.label>
            )}
            <motion.input
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                type={type}
                className={`px-4 py-2 rounded-lg bg-gray-700/50 text-white border border-gray-600 focus:border-blue-500 focus:ring-blue-500 outline-none transition-all duration-200 w-full ${className}`}
                ref={ref}
                {...props}
                id={id}
            />
        </motion.div>
    );
});

export default Input;