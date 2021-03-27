import Head from 'next/head'
const Meta = (props) => (
  <Head>
    <title>{props.title}</title>
    <meta name="description" content={props.desc} />
    <meta property="og:type" content="website" />
    <meta name="og:title" property="og:title" content={props.title} />
    <meta
      name="og:description"
      property="og:description"
      content={props.desc}
    />
    <meta property="og:site_name" content="Joel Adving" />
    <meta property="og:url" content={`${props.canonical}`} />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content={props.title} />
    <meta name="twitter:description" content={props.desc} />
    <link rel="icon" type="image/png" href="/static/images/favicon.ico" />
    <link rel="apple-touch-icon" href="/static/images/favicon.ico" />
    {props.css && <link rel="stylesheet" href={`${props.css}`} />}
    {props.canonical && <link rel="canonical" href={`${props.canonical}`} />}
    {props.js && <script type="text/javascript" src={`${props.js}`}></script>}
  </Head>
)
export default Meta
