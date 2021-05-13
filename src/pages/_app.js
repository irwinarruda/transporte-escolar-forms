import GlobalStyle from '../styles/global';
import MainLayout from '../layouts/MainLayout';
import { AlertModalStyles } from '../hooks/AlertModal';

export default function App({ Component, pageProps }) {
    return (
        <>
            <GlobalStyle />
            <AlertModalStyles />
            <MainLayout>
                <Component {...pageProps} />
            </MainLayout>
        </>
    );
}
