import '../asstes/scss/index.scss';
import withLocale from '../hocs/withLocale';
import Layout from "../components/Layout";
import CounterProvider from "../contexts/Counter/CounterProvider";
import { Provider } from 'react-redux';
import store from '../redux';


import 'antd/dist/antd.css';

function MyApp({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <CounterProvider>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </CounterProvider>
        </Provider>

    );
}

export default withLocale(MyApp);
