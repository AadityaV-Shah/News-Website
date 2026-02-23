import { Box, Flex, HStack, Text, Button, Link } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaLinkedin, FaSearch, FaTiktok } from "react-icons/fa";
import { IoIosSwitch } from "react-icons/io";
import { Container } from "@chakra-ui/react"

const Navbar = () => {
    return (
        <Box w="full" bg="rgb(28, 165, 172)">
            <Container>
                <Flex py="4"
                    justify="space-between"
                    align="center">

                    <Box as="ul" listStyleType="none" display="flex" gap="9">
                        <li>Home</li>
                        <li>Fashion</li>
                        <li>Tech</li>
                        <li>Lifestyle</li>
                        <li>Travel</li>
                        <li>Features</li>
                        <li>Blog</li>
                    </Box>

                    <HStack gap="4">
                        <IoIosSwitch />
                        <FaSearch />
                    </HStack>
                </Flex>
            </Container>
        </Box>
    );
};

export default Navbar