import AdminLayout from "../layouts/admin/AdminLayout";
import Dashboard from "../pages/admin/Dashboard";

export const AdminRoutes = [
	{
		path: "/admin/dashboard",
		element: <AdminLayout />,
		children: [
			{
				path: "",
				element: <Dashboard />,
			},
		],
	},
];
