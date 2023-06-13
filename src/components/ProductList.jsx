import { Flex, Grid } from "@chakra-ui/react"
import ProductCard from "./ProductCard"
import { productsData } from "../utils/productData"

const ProductList = (props) => {
    const printCard = () => {
        return productsData.map((value) => {
            return (
                <Flex justifyContent="center">
                    <ProductCard key={value.name} data={{ name: value.name, price: value.price, image: value.image }} />
                </Flex>
            )
        })
    }

    return (
        <Grid templateColumns={["repeat(2, 1fr)", "repeat(3, 1fr)", "repeat(4, 1fr)", "repeat(5, 1fr)", "repeat(6, 1fr)"]} gap={4}>
            {printCard()}
        </Grid>
    )
}

export default ProductList