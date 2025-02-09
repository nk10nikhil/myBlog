// import React from "react";
// import { motion } from "framer-motion";

// export default function Button({
//     children,
//     type = "button",
//     bgColor = "bg-blue-600",
//     textColor = "text-white",
//     className = "",
//     ...props
// }) {
//     return (
//         <motion.button
//             type={type}
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             transition={{ duration: 0.2 }}
//             className={`px-6 py-2 rounded-lg ${bgColor} ${textColor} ${className} backdrop-blur-lg bg-opacity-80 hover:bg-opacity-100 transition-all duration-200 shadow-lg`}
//             {...props}
//         >
//             {children}
//         </motion.button>
//     );
// }


import React from "react";

export default function Button({
    children,
    type = "button",
    bgColor = "bg-blue-600",
    textColor = "text-white",
    className = "",
    ...props
}) {
    return (
        <button className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`} {...props}>
            {children}
        </button>
    );
}
