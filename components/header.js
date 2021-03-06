import Head from 'next/head'
import { withTheme } from 'styled-components'

const Header = ({theme}) => (
  <Head>
    <title>{theme.title}</title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,600" rel="stylesheet" />
    <link rel="apple-touch-icon" sizes="57x57" href="/static/favicon/apple-icon-57x57.png"/>
    <link rel="apple-touch-icon" sizes="60x60" href="/static/favicon/apple-icon-60x60.png"/>
    <link rel="apple-touch-icon" sizes="72x72" href="/static/favicon/apple-icon-72x72.png"/>
    <link rel="apple-touch-icon" sizes="76x76" href="/static/favicon/apple-icon-76x76.png"/>
    <link rel="apple-touch-icon" sizes="114x114" href="/static/favicon/apple-icon-114x114.png"/>
    <link rel="apple-touch-icon" sizes="120x120" href="/static/favicon/apple-icon-120x120.png"/>
    <link rel="apple-touch-icon" sizes="144x144" href="/static/favicon/apple-icon-144x144.png"/>
    <link rel="apple-touch-icon" sizes="152x152" href="/static/favicon/apple-icon-152x152.png"/>
    <link rel="apple-touch-icon" sizes="180x180" href="/static/favicon/apple-icon-180x180.png"/>
    <link rel="icon" type="image/png" sizes="192x192"  href="/static/favicon/android-icon-192x192.png"/>
    <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon/favicon-32x32.png"/>
    <link rel="icon" type="image/png" sizes="96x96" href="/static/favicon/favicon-96x96.png"/>
    <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon/favicon-16x16.png"/>
    <link rel="manifest" href="/static/favicon/manifest.json"/>
    <meta name="msapplication-TileColor" content="#ffffff"/>
    <meta name="msapplication-TileImage" content="/static/favicon/ms-icon-144x144.png"/>
    <meta name="theme-color" content="#ffffff"/>
    <meta property="og:url"                content="https://shipmmnt.co" />
    <meta property="og:title"              content="Shipmnt - The Modern Delivery Tracking App" />
    <meta property="og:description"        content="Shipmnt is the new delivery tracking app on the block. With a refreshing UI, unique features, Shipmnt is the best package tracking app on iPhone and iPad." />
    <meta property="og:image"              content="/static/Shot.png" />
    <style>{`
      body {
        background: ${theme.colors.primary};
        font: ${theme.fontSizes.body};
      }
    `}</style>
  </Head>
)

export default withTheme(Header)
