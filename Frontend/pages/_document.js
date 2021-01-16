import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
 
  render() {
    return (
      <Html lang="en">
        <Head>
        <meta charSet="UTF-8"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.3/css/bootstrap.min.css"/>
        <link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
        <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
        <script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js"></script>
        
        
        <script type="text/babel" src="/js/admin.js"></script>
        {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajasx/libs/nprogress/0.2.0/nprogress.min.css"/> */}
        <link rel="stylesheet" href="/css/main.css"/>
        <link rel="stylesheet" href="/css/adminStyle.css"/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument