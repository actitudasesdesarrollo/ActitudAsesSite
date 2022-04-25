import AppLayout from "../components/general/AppLayout";
import ErrorBoundary from './../components/general/ErrorBoundary';

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
	return (
		<ErrorBoundary>
			<AppLayout>
				<Component {...pageProps} />
			</AppLayout>
		</ErrorBoundary>
	);
}

export default MyApp;
