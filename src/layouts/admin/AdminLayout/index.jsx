import FooterAdmin from "../FooterAdmin";
import HeaderAdmin from "../HeaderAdmin";
import { Outlet } from "react-router-dom";
import "./AdminLayout.scss";

function AdminLayout() {
	return (
		<>
		<HeaderAdmin />

			<main>
				<Outlet />
			</main>

		<FooterAdmin />
		</>
	);
}

export default AdminLayout;
