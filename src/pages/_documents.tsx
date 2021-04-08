import Document, {Html, Head, Main, NextScript} from 'next/document';

export default class extends Document{
    render(){
        return(
            <Html>
                <Head>
                <link rel="shortcut icon" href="favicon.png" type="image/png" />
                
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@600&display=swap" rel="stylesheet"></link>      
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}