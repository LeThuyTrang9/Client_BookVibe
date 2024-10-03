import ClientLayout from "../layouts/client/ClientLayout";
import Home from "../pages/client/Home";
import Shop from "../pages/client/Shop";
import Cart from "../pages/client/Cart";
import BookDetail from "../pages/client/BookDetail";
import Blog from "../pages/client/Blog/Blog";
import BlogDetail from "../pages/client/Blog/BlogDetail";
import ContactInfo from "../pages/client/ContactInfo";
import AccountDashBoard from "../pages/client/AccountDashBoard";
import PaymentCheck from "../pages/client/PaymentPage/PaymentCheck";
import PaymentSuccess from "../pages/client/PaymentPage/PaymentSuccess";
import NotFound from "../pages/client/NotFound";

export const ClientRoutes = [
	{
		path: "/",
		element: <ClientLayout />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/account-dashboard",
				element: <AccountDashBoard />,
			},
			{
				path: "shop",
				element: <Shop/>,
			},
			{
				path: "books/:slug",
				element: <BookDetail />,
			},
			{
				path: "blog",
				element: <Blog />,
			},
			{
				path: "blog/:slug",
				element: <BlogDetail />,
			},
			{
				path: "contact-info",
				element: <ContactInfo />,
			},
			{
				path: "cart",
				element: <Cart />,
			},
			{
				path: "payment-check",
				element: <PaymentCheck />,
			},
			{
				path: "payment-success/:code_bill",
				element: <PaymentSuccess />,
			},
			{
				path: "*",
				element: <NotFound />,
			},
		],
	},
];
