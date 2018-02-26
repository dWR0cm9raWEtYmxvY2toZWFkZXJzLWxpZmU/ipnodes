
import React from 'react'
import Link from 'gatsby-link'
import { Col, Row } from 'reactstrap'
import './index.css'

const Footer = () => (
		<div id="footer">
				<div className="flw">
						<div>
								<h3 className="flt">友情链接</h3>
								<h3 className="flt">future.sh</h3>								
						</div>
						<div>
								<h3 className="flt">合作项目</h3>
								<h3 className="flt">newnodes</h3>								
						</div>
						<div>
								<h3 className="flt">联系方式</h3>
								<h3 className="flt">400-000000</h3>								
						</div>						
				</div>
				<div className="cpn">
						<h3 className="flt">®2018 - 版权所有</h3>
						<h3 className="flt">讲师招聘 | 人才招聘 | 企业合作 | 常见问题 | 友情链接</h3>						
				</div>
		</div>
)

export default Footer