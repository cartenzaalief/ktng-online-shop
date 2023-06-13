import { Box, Text } from "@chakra-ui/react"
import ProductList from "../components/ProductList"
import Carousel from "../components/Carousel"

const Landing = (props) => {
    return (
        <Box px={[8, 16, 24, 32]} py={6}>
            <Carousel />
            <Text mt={8} mb={6} fontSize="2xl" fontWeight="bold">Best Selling Products</Text>
            <ProductList />
        </Box>
    )
}

export default Landing