import React from 'react';
import {
    Box,
    Grid,
    GridItem,
    Image,
    Text,
    Heading,
    Badge,
    Flex,
    HStack,
    VStack,
    Icon,
    IconButton,
    Container,
    AspectRatio
} from '@chakra-ui/react';
import { listPosts } from './secposts'; 
import { Calendar, User, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Secposts() {

    return (
        <Box minH="auto" bg="white" py={{ base: 4, md: 8 }}>
            <Container maxW="container.xl">

                {/* Bottom List Section */}
                <Box bg="gray.50" p={6} borderRadius="none">
                    <Grid
                        templateColumns={{ base: "1fr", sm: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }}
                        gap={8}
                    >
                        {listPosts.map((post) => (
                            <Flex key={post.id} gap={4} role="group" cursor="pointer">
                                <Box flexShrink={0} w="96px" h="80px" overflow="hidden">
                                    <Image
                                        src={post.imageUrl}
                                        alt={post.title}
                                        w="full"
                                        h="full"
                                        objectFit="cover"
                                        transition="transform 0.3s"
                                        _groupHover={{ transform: "scale(1.1)" }}
                                        referrerPolicy="no-referrer"
                                    />
                                </Box>
                                <VStack align="start" justify="center" gap={1}>
                                    <Heading
                                        as="h4"
                                        color="gray.900"
                                        fontSize="sm"
                                        fontWeight="bold"
                                        mb={1}
                                        lineHeight="tight"
                                        _groupHover={{ color: "blue.600" }}
                                        transition="color 0.2s"
                                    >
                                        {post.title}
                                    </Heading>
                                    <VStack align="start" gap={0}>
                                        <HStack gap={1} fontSize="10px" color="gray.400">
                                            <Icon as={Calendar} boxSize="10px" />
                                            <Text as="span">{post.date}</Text>
                                        </HStack>
                                        <HStack gap={1} fontSize="10px" color="gray.400">
                                            <Icon as={User} boxSize="10px" />
                                            <Text as="span">{post.author}</Text>
                                        </HStack>
                                    </VStack>
                                </VStack>
                            </Flex>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
}
