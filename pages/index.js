import Layout from '../components/layout'
import Button from 'antd/lib/button'
import Slider from 'antd/lib/slider'
import Alert from 'antd/lib/alert'

export default () => (
  <Layout>
    <div style={{ padding: 100 }}>
      <div><Slider defaultValue={30} /></div>
      <div><Button>Submit 34555</Button></div>
    </div>
  </Layout>
)
