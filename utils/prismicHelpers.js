import Prismic from "@prismicio/client";
import Link from "next/link";
import {
	apiEndpoint,
	accessToken,
	linkResolver,
	Router,
} from "./prismicConfiguration";

export const customLink = (type, element, content, children, index) => (
	<Link key={index} href={linkResolver(element.data)}>
		<a>{content}</a>
	</Link>
);

const createClientOptions = (
	req = null,
	prismicAccessToken = null,
	routes = null
) => {
	const reqOption = req ? { req } : {};
	const accessTokenOption = prismicAccessToken
		? { accessToken: prismicAccessToken }
		: {};
	const routesOption = routes ? { routes: Router.routes } : {};
	return {
		...reqOption,
		...accessTokenOption,
		...routesOption,
	};
};

export const Client = (req = null) =>
	Prismic.client(apiEndpoint, createClientOptions(req, accessToken));

export default Client;
