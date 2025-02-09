import React from 'react';
import { Container, PostForm } from '../components';
import { motion } from 'framer-motion';

function AddPost() {
  return (
    <div className="min-h-screen text-white bg-gradient-to-br from-gray-900 to-gray-800 py-8 rounded-2xl">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-4xl mx-auto text-white bg-gray-800/30 backdrop-blur-lg rounded-xl p-8 border border-gray-700/50 shadow-2xl"
        >
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl font-bold text-white mb-6"
          >
            Create a New Post
          </motion.h1>
          <PostForm />
        </motion.div>
      </Container>
    </div>
  );
}

export default AddPost;