import { Helmet } from "react-helmet";
import "./PaymentSuccess.scss";

function PaymentSuccess() {
	return (
		<>
			<Helmet>
				<title>Cảm ơn quý khách !</title>
			</Helmet>

			Cảm ơn quý khách đẫ mua hàng!
		</>
	);
}

export default PaymentSuccess;
