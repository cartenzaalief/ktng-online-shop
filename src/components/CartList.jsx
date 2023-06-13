import { Box, Flex, Icon, Image, Text } from "@chakra-ui/react"
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai"
import { BsTrash } from "react-icons/bs"

const CartList = (props) => {
    const formatter = new Intl.NumberFormat("id", { style: "currency", currency: "IDR" })

    return (
        <Box w="full">
                <Box py={4} w="full">
                    <Flex gap={4}>
                        <Image src={props.data.image} h={20} objectFit="contain" />
                        <Box>
                            <Text fontSize="sm">{props.data.name}</Text>
                            <Text mt={2} fontSize="sm" fontWeight="bold" color="blue.500">{formatter.format(props.data.price)}</Text>
                        </Box>
                    </Flex>
                    <Flex justifyContent="space-between" alignItems="center" mt={2}>
                        <Text fontSize="sm" color="blue.500" cursor="pointer">Add Notes</Text>
                        <Flex justifyContent="flex-end" gap={16} alignItems="center">
                            <Flex gap={4} alignItems="center">
                                <Text fontSize="sm" color="gray.500" cursor="pointer">Move to wishlist</Text>
                                <Box bgColor="gray.300" h={7} w={0.5}></Box>
                                <Icon as={BsTrash} color="gray.500" boxSize={6} cursor="pointer" />
                            </Flex>
                            <Flex gap={4}>
                                <Icon as={AiOutlineMinusCircle} color="blue.500" boxSize={6} cursor="pointer" />
                                <Text>1</Text>
                                <Icon as={AiOutlinePlusCircle} color="blue.500" boxSize={6} cursor="pointer" />
                            </Flex>
                        </Flex>
                    </Flex>
                </Box>
            <Box bgColor="#F3F4F5" h={1.5}></Box>
        </Box>
    )
}

export default CartList