import { Helmet } from "react-helmet";
import "./Shop.scss";

function Shop({ breadcrumb, parentId }) {    
    return (
        <>
            <Helmet>
                <title>Cửa hàng</title>
            </Helmet>

            Cửa hàng
        </>
    );
}

export default Shop;
