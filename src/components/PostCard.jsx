import React from 'react';
import appwriteService from "../appwrite/config";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function PostCard({ $id, title, featuredImage }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
        >
            <Link to={`/post/${$id}`}>
                <div className='w-full rounded-2xl bg-gray-800/30 backdrop-blur-lg p-4 border border-gray-700/50 shadow-2xl hover:bg-gray-700/50 transition-all duration-200'>
                    <div className='w-full justify-center mb-4'>
                        <motion.img
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                            src={appwriteService.getFilePreview(featuredImage)}
                            alt={title}
                            className='rounded-xl w-full h-48 object-cover'
                        />
                    </div>
                    <motion.h2
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true }}
                        className='text-xl font-bold text-white'
                    >
                        {title}
                    </motion.h2>
                </div>
            </Link>
        </motion.div>
    );
}

export default PostCard;