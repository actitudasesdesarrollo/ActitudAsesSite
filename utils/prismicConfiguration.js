export const apiEndpoint = `https://${process.env.PRISMIC_REPO_NAME}.prismic.io/api/v2`;

export const accessToken = process.env.PRISMIC_ACCESS_TOKEN;

export const linkResolver = (doc) => {
	if (doc.type === "page") {
		return `/${doc.uid}`;
	}
	return "/";
};

export const Router = {
	routes: [
		{
			type: "page",
			path: "/:uid",
		},
	],
};
