import { Box, Card, Flex, Icon, Image, Text } from "@chakra-ui/react"
import { AiFillStar } from "react-icons/ai"

const ProductCard = (props) => {
    const formatter = new Intl.NumberFormat("id", { style: "currency", currency: "IDR" })

    return (
        <Card w="100%" cursor="pointer" _hover={{ border: "1px", borderColor: "blue.500", mt: -2 }}>
            <Flex justifyContent="center" borderTopRadius={5} bgColor="#F3F4F5">
                <Image src={props.data.image} h={["8em", "9em", "10em", "11em", "12em"]} objectFit="contain" />
            </Flex>
            <Box p={2}>
                <Text fontSize="small" h={10}>{props.data.name}</Text>
                <Text fontSize="sm" fontWeight="bold" color="blue.500">{formatter.format(props.data.price)}</Text>
                <Flex mt={2} gap={1}>
                    <Icon as={AiFillStar} color="orange.200" mt={0.5} />
                    <Text fontSize="small" color="gray.500">5.0</Text>
                </Flex>
            </Box>
        </Card>
    )
}

export default ProductCard