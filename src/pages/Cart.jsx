import { Box, Grid, GridItem, Text } from "@chakra-ui/react"
import CartList from "../components/CartList"
import { productsData } from "../utils/productData"
import CartSummary from "../components/CartSummary"

const Cart = (props) => {
    const productsCart = [productsData[0], productsData[10], productsData[16]]

    return (
        <Box px={[8, 16, 24, 48]} py={6}>
            <Grid templateColumns={["repeat(1, 1fr)", null, null, "repeat(5, 1fr)"]} gap={[8, null, null, 16]}>
                <GridItem colSpan={[1, null, null, 3]}>
                    <Text fontSize="2xl" fontWeight="bold">Cart</Text>
                    <Box mt={4} bgColor="#F3F4F5" h={1.5}></Box>
                    {productsCart.map((val) => {
                        return (
                            <CartList data={{ name: val.name, price: val.price, image: val.image }} />
                        )
                    })}
                </GridItem>
                <GridItem colSpan={[1, null, null, 2]}>
                    <CartSummary />
                </GridItem>
            </Grid>
        </Box>
    )
}

export default Cart