import {FaHome,FaAddressCard,FaShoppingBasket,FaCog  } from "react-icons/fa"

const MenuData = [
    {
        title: "Home",
        path: "/",
        icon: <FaHome/>        
    },
    {
        title: "About",
        path: "/about",
        icon: <FaAddressCard/>
    },
    {
        title: "Product",
        path: "/product",
        icon: <FaShoppingBasket />

    },
    {
        title: "Contact",
        path: "/contact",
        icon: <FaCog  />

    }
]

export default MenuData