import GlobalStyle from '../styles/global';
import MainLayout from '../layouts/MainLayout';

export default function App({ Component, pageProps }) {
    return (
        <>
            <GlobalStyle />
            <MainLayout>
                <Component {...pageProps} />
            </MainLayout>
        </>
    );
}
