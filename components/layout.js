import Head from 'next/head'
import LocaleProvider from 'antd/lib/locale-provider'
import enUS from 'antd/lib/locale-provider/en_US'

export default ({ children }) => (
  <LocaleProvider locale={enUS}>
    <div>
      <Head>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/antd/2.12.0/antd.min.css" rel="stylesheet" />
      </Head>
      { children }
    </div>
  </LocaleProvider>
)
