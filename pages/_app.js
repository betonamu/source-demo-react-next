import '../asstes/scss/index.scss';
import withLocale from '../hocs/withLocale';
import Layout from "../components/Layout";
import CounterProvider from "../contexts/Counter/CounterProvider";

import 'antd/dist/antd.css';

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
