// import React, { useEffect, useState } from 'react';
// import appwriteService from "../appwrite/config";
// import { Container, PostCard } from '../components';
// import { motion } from 'framer-motion';

// function Home() {
//     const [posts, setPosts] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         // Fetch posts from Appwrite
//         appwriteService.getPosts()
//             .then((posts) => {
//                 if (posts) {
//                     setPosts(posts.documents);
//                 }
//             })
//             .catch((error) => {
//                 console.error("Error fetching posts:", error);
//                 setError("Failed to fetch posts. Please try again later.");
//             })
//             .finally(() => {
//                 setLoading(false);
//             });
//     }, []);

//     if (loading) {
//         return (
//             <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800">
//                 <Container>
//                     <motion.h1
//                         initial={{ opacity: 0, y: -20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.5 }}
//                         className="text-2xl font-bold text-gray-400"
//                     >
//                         Loading posts...
//                     </motion.h1>
//                 </Container>
//             </div>
//         );
//     }

//     if (error) {
//         return (
//             <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800">
//                 <Container>
//                     <motion.h1
//                         initial={{ opacity: 0, y: -20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.5 }}
//                         className="text-2xl font-bold text-red-500"
//                     >
//                         {error}
//                     </motion.h1>
//                 </Container>
//             </div>
//         );
//     }

//     if (posts.length === 0) {
//         return (
//             <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800">
//                 <Container>
//                     <motion.h1
//                         initial={{ opacity: 0, y: -20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.5 }}
//                         className="text-2xl font-bold text-gray-400"
//                     >
//                         No posts available. Login to create or read posts.
//                     </motion.h1>
//                 </Container>
//             </div>
//         );
//     }

//     return (
//         <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-8">
//             <Container>
//                 <motion.div
//                     initial={{ opacity: 0, y: -20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.5 }}
//                     className="flex flex-wrap -mx-2"
//                 >
//                     {posts.map((post, index) => (
//                         <motion.div
//                             key={post.$id}
//                             initial={{ opacity: 0, y: -20 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             transition={{ duration: 0.5, delay: index * 0.1 }}
//                             className="p-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
//                         >
//                             <PostCard {...post} />
//                         </motion.div>
//                     ))}
//                 </motion.div>
//             </Container>
//         </div>
//     );
// }

// export default Home;


import React, { useEffect, useState } from 'react'
import appwriteService from "../appwrite/config";
import { Container, PostCard } from '../components'

function Home() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])

    if (posts.length === 0) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold hover:text-gray-500">
                                Login to read posts
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home