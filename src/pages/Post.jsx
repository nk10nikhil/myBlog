import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

export default function Post() {

    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();
    const userData = useSelector((state) => state.auth.userData);
    const isAuthor = post && userData ? post.userId === userData.$id : false;

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) setPost(post);
                else navigate("/");
            });
        } else navigate("/");
    }, [slug, navigate]);

    const deletePost = () => {
        appwriteService.deletePost(post.$id).then((status) => {
            if (status) {
                appwriteService.deleteFile(post.featuredImage);
                navigate("/");
            }
        });
    };

    return post ? (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-8 rounded-2xl">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full flex justify-center mb-8 relative"
                >
                    <div className="w-full max-w-4xl bg-gray-800/30 backdrop-blur-lg rounded-xl p-4 border border-gray-700/50 shadow-2xl">
                        <img
                            src={appwriteService.getFilePreview(post.featuredImage)}
                            alt={post.title}
                            className="rounded-xl w-full h-auto"
                        />
                        {isAuthor && (
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="absolute right-6 top-6 flex"
                            >
                                <Link to={`/edit-post/${post.$id}`}>
                                    <Button
                                        bgColor="bg-green-500 hover:bg-green-600"
                                        className="mr-3 transition-all duration-200"
                                    >
                                        Edit
                                    </Button>
                                </Link>
                                <Button
                                    bgColor="bg-red-500 hover:bg-red-600"
                                    onClick={deletePost}
                                    className="transition-all duration-200"
                                >
                                    Delete
                                </Button>
                            </motion.div>
                        )}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="w-full max-w-4xl mx-auto mb-8"
                >
                    <h1 className="text-3xl font-bold text-white">{post.title}</h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="w-full max-w-4xl mx-auto bg-gray-800/30 backdrop-blur-lg rounded-xl p-6 border border-gray-700/50 shadow-2xl"
                >
                    <div className="browser-css text-gray-300">
                        {parse(post.content)}
                    </div>
                </motion.div>
            </Container>
        </div>
    ) : null;
}