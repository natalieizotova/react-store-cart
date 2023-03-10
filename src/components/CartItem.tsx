import {useShoppingCart} from "../context/ShoppingCartContext";
import  storeItems from "../data/items.json"
import {Button, Stack} from "react-bootstrap";
import {formatCurrency} from "../utilities/formatCurrency";

type CartItemProps = {
    id: number
    quantity: number
}

export function CartItem({id, quantity}: CartItemProps) {
    const {removeFromCart} = useShoppingCart()
    const item = storeItems.find(i => i.id === id)
    if (item == null) return null
    return (
        <Stack direction="horizontal" gap={2}>
            <img src={item.imgUrl} style={{width: "140px", height: "85px", objectFit: "cover"}} alt="img"/>
            <div className="me-auto">
                <div>
                    {item.name} {quantity > 1 && <span className="text-muted" style={{fontSize: "0.75rem"}}>x {quantity}</span>}
                </div>
                <div className="text-muted" style={{fontSize: "0.75rem"}}>
                    {formatCurrency(item.price)}
                </div>
                <div>
                    {formatCurrency(item.price * quantity)}
                </div>
            </div>
            <Button variant="outline-danger" size="sm" onClick={()=> removeFromCart(item.id)}>&times;</Button>
        </Stack>
    )
}