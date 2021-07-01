import '../asstes/scss/index.scss';
import withLocale from '../hocs/withLocale';

function MyApp({ Component, pageProps }) {
  return (
      <Component {...pageProps} />
  );
}

export default withLocale(MyApp);
