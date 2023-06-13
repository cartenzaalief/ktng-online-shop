import { Box, Flex, HStack, Icon, Image, Stack, Text } from "@chakra-ui/react"
import { AiFillFacebook, AiOutlineTwitter, AiFillInstagram } from "react-icons/ai"
import Logo from "../assets/images/KT&G_Logo.png"

const Footer = (props) => {
    return (
        <Box borderTop="1px" borderColor="gray.400" px={[8, null, 32]} py={8}>
            <Flex justifyContent={["center", null, null, "space-between"]}>
                <Flex gap={24} display={["none", null, null, "flex"]}>
                    <Stack>
                        <Text fontWeight="bold">KT&G</Text>
                        <Text color="gray.500">About KT&G</Text>
                        <Text color="gray.500">Intellectual Property Rights</Text>
                        <Text color="gray.500">Career</Text>
                        <Text color="gray.500">Blog</Text>
                    </Stack>
                    <Stack>
                        <Text fontWeight="bold">Guide and Help</Text>
                        <Text color="gray.500">KT&G Care</Text>
                        <Text color="gray.500">Terms and Condition</Text>
                        <Text color="gray.500">Privacy</Text>
                        <Text color="gray.500">Partners</Text>
                    </Stack>
                    <Stack>
                        <Text fontWeight="bold">Follow Us</Text>
                        <HStack>
                            <Icon as={AiFillFacebook} boxSize={8} color="facebook.500" />
                            <Icon as={AiOutlineTwitter} boxSize={8} color="twitter.500" />
                            <Icon as={AiFillInstagram} boxSize={8} color="pink.500" />
                        </HStack>
                    </Stack>
                </Flex>
                <Flex flexDirection="column" alignItems="center" gap={4}>
                    <Image src={Logo} h={100} objectFit="contain" />
                    <Text fontWeight="bold" color="gray.500">© PT Korea Tomorrow & Global Indonesia</Text>
                </Flex>
            </Flex>
        </Box>
    )
}

export default Footer