import React from 'react';
import { Box, Grid, GridItem, Image, Heading, HStack, Container, Text } from '@chakra-ui/react';
import { Calendar, User } from 'lucide-react';
import { motion } from 'framer-motion';
import { featuredPosts } from './posts';

const MotionBox = motion(Box);

export default function Mainposts() {
    const mainPost = featuredPosts[0];
    const secondaryPosts = featuredPosts.slice(1);

    return (
        <Box minH="auto" bg="white" py={{ base: 4, md: 8 }}>
            <Container maxW="container.xl">
                <Grid templateColumns={{ base: "1fr", lg: "repeat(2, 1fr)" }} gap={2} mb={8}>
                    
                    {/* Main Featured Post */}
                    <GridItem>
                        <MotionBox
                            whileHover={{ scale: 0.995 }}
                            position="relative"
                            h={{ base: "400px", lg: "500px" }}
                            overflow="hidden"
                            role="group"
                            cursor="pointer"
                        >
                            <Image
                                src={mainPost.imageUrl}
                                alt={mainPost.title}
                                position="absolute"
                                inset={0}
                                w="full"
                                h="full"
                                objectFit="cover"
                                transition="transform 0.5s"
                                _groupHover={{ transform: "scale(1.1)" }}
                                referrerPolicy="no-referrer"
                            />

                            {/* Text content */}
                            <Box position="absolute" bottom={6} left={6} right={6}>
                                <HStack gap={2} mb={3}>
                                    {mainPost.categories.map((cat, idx) => (
                                        <Text
                                            key={idx}
                                            fontSize="10px"
                                            fontWeight="bold"
                                            textTransform="uppercase"
                                            px={2}
                                            py={0.5}
                                            bg="red"
                                            color="white"
                                        >
                                            {cat}
                                        </Text>
                                    ))}
                                </HStack>
                                <Heading
                                    as="h2"
                                    color="white"
                                    fontSize={{ base: "2xl", lg: "3xl" }}
                                    fontWeight="bold"
                                    mb={2}
                                    lineHeight="tight"
                                >
                                    {mainPost.title}
                                </Heading>
                                <HStack gap={3} fontSize="11px" color="gray.300">
                                    <HStack gap={1}>
                                        <Calendar size={12} />
                                        <Text>{mainPost.date}</Text>
                                    </HStack>
                                    <HStack gap={1}>
                                        <User size={12} />
                                        <Text>{mainPost.author}</Text>
                                    </HStack>
                                </HStack>
                            </Box>
                        </MotionBox>
                    </GridItem>

                    {/* Secondary Posts Grid */}
                    <GridItem>
                        <Grid templateColumns={{ base: "1fr", lg: "repeat(2, 1fr)", sm: "repeat(2, 1fr)" }} gap={2}>
                            {secondaryPosts.map((post) => (
                                <MotionBox
                                    key={post.id}
                                    whileHover={{ scale: 0.99 }}
                                    position="relative"
                                    h={{ base: "200px", lg: "246px" }}
                                    overflow="hidden"
                                    role="group"
                                    cursor="pointer"
                                >
                                    <Image
                                        src={post.imageUrl}
                                        alt={post.title}
                                        position="absolute"
                                        inset={0}
                                        w="full"
                                        h="full"
                                        objectFit="cover"
                                        transition="transform 0.5s"
                                        _groupHover={{ transform: "scale(1.1)" }}
                                        referrerPolicy="no-referrer"
                                    />
                                    <Box
                                        position="absolute"
                                        inset={0}
                                        bgGradient="linear(to-t, blackAlpha.800, blackAlpha.100, transparent)"
                                    />
                                    <Box position="absolute" bottom={4} left={4} right={4}>
                                        <Text
                                            fontSize="10px"
                                            fontWeight="bold"
                                            textTransform="uppercase"
                                            px={2}
                                            py={0.5}
                                            bg={post.categoryColor || 'green.500'}
                                            color="white"
                                            mb={1}
                                            display="inline-block"
                                        >
                                            {post.categories[0]}
                                        </Text>
                                        <Heading
                                            as="h3"
                                            color="white"
                                            fontSize={{ base: "sm", lg: "md" }}
                                            fontWeight="bold"
                                            mb={1}
                                            lineHeight="snug"
                                        >
                                            {post.title}
                                        </Heading>
                                        <HStack gap={3} fontSize="11px" color="gray.300">
                                            <HStack gap={1}>
                                                <Calendar size={12} />
                                                <Text>{post.date}</Text>
                                            </HStack>
                                            <HStack gap={1}>
                                                <User size={12} />
                                                <Text>{post.author}</Text>
                                            </HStack>
                                        </HStack>
                                    </Box>
                                </MotionBox>
                            ))}
                        </Grid>
                    </GridItem>
                </Grid>
            </Container>
        </Box>
    );
}