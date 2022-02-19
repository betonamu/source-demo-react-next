import { END } from 'redux-saga';

import { wrapper } from '../redux/store';
import Layout from "../components/Layout";
import CounterProvider from "../contexts/Counter/CounterProvider";

import 'antd/dist/antd.css';
import '../asstes/scss/index.scss';

const MyApp = ({ Component, pageProps }) => {
    return (
        <CounterProvider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </CounterProvider>
    );
}

MyApp.getInitialProps = wrapper.getInitialAppProps(store => async ({ Component, ctx }) => {
    if (Component.getInitialProps) {
        await Component.getInitialProps(ctx);
    }
    
    // 2. Stop the saga if on server
    if (ctx.req) {
        await store.dispatch(END);
        await store.sagaTask.toPromise();
    }
});

export default wrapper.withRedux(MyApp);
