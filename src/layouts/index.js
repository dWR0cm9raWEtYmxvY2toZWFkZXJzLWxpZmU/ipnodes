import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="IPNodes"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <div
      style={{
        margin: '0 auto',
//        maxWidth: 960,
//        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
		<Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
