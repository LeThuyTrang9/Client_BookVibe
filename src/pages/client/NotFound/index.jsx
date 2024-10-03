import Helmet from "react-helmet";
import "./NotFound.scss";

function NotFound() {
	return (
		<>
			<Helmet>
				<title>404 Not Found</title>
			</Helmet>

			<h1>LỖI! KHÔNG TÌM THẤY TRANG</h1>
		</>
	);
}

export default NotFound;
