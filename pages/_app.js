import '../asstes/scss/index.scss';
import withLocale from '../hocs/withLocale';
import Layout from "../components/Layout";
import CounterProvider from "../contexts/Counter/CounterProvider";

function MyApp({Component, pageProps}) {
    return (
        <CounterProvider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </CounterProvider>
    );
}

export default withLocale(MyApp);
