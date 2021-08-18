import '../asstes/scss/index.scss';
import withLocale from '../hocs/withLocale';
import Layout from "../components/Layout";

function MyApp({Component, pageProps}) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}

export default withLocale(MyApp);
