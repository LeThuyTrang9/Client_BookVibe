import Header from "../Header";
import Footer from "../Footer";
import { Outlet } from "react-router-dom";
import "./ClientLayout.scss";

function LayoutDefault() {
	return (
		<>
			<Header />

			<main>
				<Outlet />
			</main>
			
			<Footer />
		</>
	);
}

export default LayoutDefault;
