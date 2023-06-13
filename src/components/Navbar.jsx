import { Box, Button, ButtonGroup, Divider, Flex, Icon, Input, InputGroup, InputLeftElement, Text } from "@chakra-ui/react"
import { HiShoppingCart } from "react-icons/hi"
import { GoSearch } from "react-icons/go"
import { useNavigate } from "react-router-dom"

const Navbar = (props) => {
    const navigate = useNavigate()

    return (
        <Box shadow="sm">
            <Flex justifyContent="space-between" bg="#F3F4F5" py={1} px={8} display={["none", null, "flex"]}>
                <Text color="gray.500" fontSize="sm" cursor="pointer">KT&G Online Shop</Text>
                <Flex gap={6}>
                    <Text color="gray.500" fontSize="sm" cursor="pointer">About KT&G</Text>
                    <Text color="gray.500" fontSize="sm" cursor="pointer">KT&G Partners</Text>
                    <Text color="gray.500" fontSize="sm" cursor="pointer">Promo</Text>
                    <Text color="gray.500" fontSize="sm" cursor="pointer">KT&G Care</Text>
                </Flex>
            </Flex>

            {/* Desktop */}
            <Flex py={2} px={8} justifyContent="space-between" alignItems="center" gap={6} display={["none", "flex"]}>
                <Text mt={-1} fontSize="xl" fontWeight="bold" color="blue.400" onClick={() => navigate("/")} cursor="pointer">KOS</Text>
                <InputGroup>
                    <InputLeftElement>
                        <Icon as={GoSearch} color="gray.600" mt={-2} />
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

            {/* Mobile */}
            <Box display={["block", "none"]}>
                <Flex py={2} px={8} justifyContent="space-between" alignItems="center" gap={6}>
                    <Text mt={-1} fontSize="xl" fontWeight="bold" color="blue.400" onClick={() => navigate("/")} cursor="pointer">KOS</Text>
                    <Flex alignItems="center" h={8} gap={4}>
                        <Icon as={HiShoppingCart} boxSize={6} color="gray.600" />
                        <Divider orientation="vertical" />
                        <ButtonGroup>
                            <Button variant="outline" colorScheme="blue" size="sm">Sign In</Button>
                            <Button colorScheme="blue" size="sm">Sign Up</Button>
                        </ButtonGroup>
                    </Flex>
                </Flex>
                <Box px={8} pb={2}>
                    <InputGroup>
                        <InputLeftElement>
                            <Icon as={GoSearch} color="gray.600" mt={-2} />
                        </InputLeftElement>
                        <Input placeholder="Search" size="sm" borderRadius={8} />
                    </InputGroup>
                </Box>
            </Box>
        </Box>
    )
}

export default Navbar