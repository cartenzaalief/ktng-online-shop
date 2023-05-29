import { Box, Button, ButtonGroup, Divider, Flex, Icon, Image, Input, InputGroup, InputLeftElement, Text } from "@chakra-ui/react"
import { HiShoppingCart } from "react-icons/hi"
import { GoSearch } from "react-icons/go"
import Logo from "../assets/images/KT&G_Logo.png"
import { useNavigate } from "react-router-dom"

const Navbar = (props) => {
    const navigate = useNavigate()

    return (
        <Box shadow="sm">
            <Flex justifyContent="space-between" bg="#F3F4F5" py={1} px={6}>
                <Text color="gray.500" fontSize="sm" cursor="pointer">KT&G Online Shop</Text>
                <Flex gap={6}>
                    <Text color="gray.500" fontSize="sm" cursor="pointer">About KT&G</Text>
                    <Text color="gray.500" fontSize="sm" cursor="pointer">KT&G Partners</Text>
                    <Text color="gray.500" fontSize="sm" cursor="pointer">Promo</Text>
                    <Text color="gray.500" fontSize="sm" cursor="pointer">KT&G Care</Text>
                </Flex>
            </Flex>
            <Flex py={2} px={6} justifyContent="space-between" alignItems="center" gap={6}>
                <Image src={Logo} h={22} objectFit="contain" mt={-1} onClick={() => navigate("/")} cursor="pointer" />
                <InputGroup>
                    <InputLeftElement>
                        <Icon as={GoSearch} color="gray.600" mt={-1} />
                    </InputLeftElement>
                    <Input placeholder="Search" size="sm" borderRadius={8} />
                </InputGroup>
                <Flex alignItems="center" h={8} gap={4}>
                    <Icon as={HiShoppingCart} boxSize={6} color="gray.600" />
                    <Divider orientation="vertical" />
                    <ButtonGroup>
                        <Button variant="outline" colorScheme="blue" size="sm">Sign In</Button>
                        <Button colorScheme="blue" size="sm">Sign Up</Button>
                    </ButtonGroup>
                </Flex>
            </Flex>
        </Box>
    )
}

export default Navbar