import { Box, Button, Card, Divider, Flex, Icon, Text } from "@chakra-ui/react"
import { HiOutlineReceiptPercent } from "react-icons/hi2"
import { BiChevronRight } from "react-icons/bi"

const CartSummary = (props) => {
    const formatter = new Intl.NumberFormat("id", { style: "currency", currency: "IDR" })

    return (
        <Card>
            <Box p={4}>
                <Box border="1px" borderColor="gray.300" borderRadius={6} px={2} py={3}>
                    <Flex alignItems="center" justifyContent="space-between">
                        <Flex alignItems="center" gap={2}>
                            <Icon as={HiOutlineReceiptPercent} color="blue.500" boxSize={6} />
                            <Text color="gray.500" fontWeight="bold">Save more with promos</Text>
                        </Flex>
                        <Icon as={BiChevronRight} color="gray.500" boxSize={6} />
                    </Flex>
                </Box>
            </Box>
            <Box bgColor="#F3F4F5" h={1.5}></Box>
            <Box p={4}>
                <Text fontWeight="bold">Shopping summary</Text>
                <Flex justifyContent="space-between" mt={4}>
                    <Text color="gray.500">Total Price (items)</Text>
                    <Text color="gray.500">{formatter.format(74700)}</Text>
                </Flex>
                <Flex justifyContent="space-between">
                    <Text color="gray.500">Total Discount Item(s)</Text>
                    <Text color="gray.500">-{formatter.format(0)}</Text>
                </Flex>
                <Divider my={4} />
                <Flex justifyContent="space-between">
                    <Text fontWeight="bold">Grand Total</Text>
                    <Text fontWeight="bold">{formatter.format(74700)}</Text>
                </Flex>
                <Button mt={4} w="full" colorScheme="blue">Buy</Button>
            </Box>
        </Card>
    )
}

export default CartSummary