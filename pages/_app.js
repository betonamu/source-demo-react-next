import { Provider } from "react-redux";

import withLocale from '../hocs/withLocale';
import Layout from "../components/Layout";
import CounterProvider from "../contexts/Counter/CounterProvider";
import store from "../redux/store";

import 'antd/dist/antd.css';
import '../asstes/scss/index.scss';

const MyApp = ({ Component, pageProps }) => {
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
