import React from 'react'
import Link from 'gatsby-link'
import '../assets/styles/index.css'
import { Button, Row, Col } from 'reactstrap'



const IndexPage = () => (
		<div id="page-ctn">
				<section className="is1" style={{height:'100vh',width:'100%'}}>
						<h1>2018 IPFS超级节点IPNodes</h1>
						<h1 >重磅预售</h1>
						<text className="subtitle">IPFS矿机, 私人云盘, 数字钱包 | 2.3G四核, 4T硬盘, 4G内存</text>
						<div className="machine" />						
						<Row id="grid1">
								<Col md={6} xs={12} >
										<Link to="/purchase"><Button color="danger" className="btn">立即抢购</Button></Link>
								</Col>								
								<Col md={6} xs={12} ><h1 id="price"><s className="raw">原价3999元/台</s><br/> 2999元/台</h1></Col>
						</Row>

				</section>
				<section className="is2">
						<h1>IPFS共享存储 &  多收益</h1>
						<h6>节点是区块链的基础，加IPnodes计划，获得多项共享收益</h6>
						<Row className="grid">
								<Col md={3} xs={12} className="g2c"><Row>
										<Col md={12} xs={4} ><div className="g2i i1"/></Col>
										<Col>
												<Row><Col className="g2t">IPFS矿机</Col></Row>
												<Row><Col className="g2p">火爆共享存储计划<br/>获得持续收益</Col></Row>
										</Col>
								</Row></Col>
								<Col md={3} xs={12} className="g2c"><Row>
										<Col md={12} xs={4} ><div className="g2i i2"/></Col>
										<Col md={12}>
												<Row><Col className="g2t">送积分</Col></Row>
												<Row><Col className="g2p">共建数据交易OS主网<br/>早期用户，可获得ICOLOS积分赠送</Col></Row>
										</Col>
								</Row></Col>
								<Col md={3} xs={12} className="g2c"><Row>
										<Col md={12} xs={4} ><div className="g2i i3"/></Col>
										<Col>
												<Row><Col className="g2t">多链挖矿</Col></Row>
												<Row><Col className="g2p">区块链节点软件商城<br/>可运行多种挖矿应用</Col></Row>
										</Col>
								</Row></Col>
								<Col md={3} xs={12} className="g2c"><Row>
										<Col md={12} xs={4} ><div className="g2i i4"/></Col>
										<Col>
												<Row><Col className="g2t">共享CDN</Col></Row>
												<Row><Col className="g2p">出售闲置宽带<br/>获得积分收益</Col></Row>
										</Col>
								</Row></Col>
						</Row>
				</section>
				<section className="is3">
						<h1>私人云存储空间 + 数字资产保险箱 = IPNodes</h1>
						<h6>您的个人数据安全管家，IPNodes完全由您掌控，只听从您一个人。 数据泄漏/被控制风险</h6>
						<Row className="grid grid2">
								<Col md={7} xs={12} className="g3iw"><div className="g3i" /></Col>
								<Col >
										<Col className="g2c">
												<Row className="g2t">数据安全可靠</Row>
												<Row className="g3p ">
														防止丢失泄漏<br/>微信文件分享/可控授权访问
												</Row>
										</Col>
										<Col className="g2c">
												<Row className="g2t">高速多设备访问</Row>
												<Row className="g3p">
														IOS/安卓APP，跨设备数据同步<br/>电影、照片、文档、资料、覆盖工作生活
												</Row>
										</Col>
										<Col className="g2c">
												<Row className="g2t">数字钱包</Row>
												<Row className="g3p">
														管理多种币资产，主流币种钱包功能<br/>安全保管关键资料、密码、重要文件等
												</Row>
										</Col>
								</Col>
						</Row>
				</section>
				<section className="isb">
						<h1>盒子App商城，无限扩展的应用场景</h1>
						<h6>提供丰富的去中 化应 ，在保障数据安全的前提下，提供智能服务</h6>
						<Row className="isbgrid">
								<Col md={6} xs={12} className="isbiw">
										<div className="isbi isbi1"/>
										<h6 className="g2t isbt">普通用户</h6>
								</Col>
								<Col md={6} xs={12} className="isbiw">
										<div className="isbi isbi2" />
										<h6 className="g2t isbt">开发者</h6>
								</Col>
						</Row>
				</section>
				<section className="is4">
						<h1>强悍硬件配置，性能与生俱来</h1>
						<h6>专业的任务需要专业的硬件，IPNodes使用Intel主机架构芯片,不同于其他安卓盒子。拥有更强大的性能，和出众性价比。</h6>
						<Row className="grid">
								<Col md={3} xs={6} className="g4c">
										<Row className="g4i i41" />
										<Row><Col className="g4t">空间大</Col></Row>
								</Col>
								<Col md={3} xs={6} className="g4c">
										<Row className="g4i i42" />
										<Row><Col className="g4t">硬件强</Col></Row>
								</Col>
								<Col md={3} xs={6} className="g4c">
										<Row className="g4i i43" />
										<Row><Col className="g4t">存储强</Col></Row>										
								</Col>
								<Col md={3} xs={6} className="g4c">
										<Row className="g4i i44" />
										<Row><Col className="g4t">配置高</Col></Row>
								</Col>								
						</Row>
						<h2>盒子配置详情</h2>
						<Row className="t">
								<Col md={3} xs={3}/>
								<Col md={3} xs={9} className="tc">
										<Row className="tt"><div>CPU<span className="tp">2.3GHz Intel® 四核</span></div></Row>
										<Row className="tt"><div>存储<span className="tp">4T NAS硬盘</span></div></Row>
										<Row className="tt"><div>内存<span className="tp">4G 双通道</span></div></Row>										
								</Col>
								<Col md={1} xs={3}/>
								<Col md={3} xs={9} className="tc">
										<Row className="tt"><text>网卡<span className="tp">千兆 PCIE</span></text></Row>										
										<Row className="tt"><text>功耗<span className="tp">30W</span></text></Row>
										<Row className="tt"><text>尺寸<span className="tp">265*200*180mm</span></text></Row>
								</Col>
						</Row>
				</section>
				<section className="is5">
						<h1>未来的智能家居 + 个人健康中心</h1>
						<h6>现有的智能硬件，暴露大量私密数据(作息起居/健康数据/音视频)给商业公司，对人的安全造成威胁</h6>
						<div className="i51" />
				</section>
		</div>
)

export default IndexPage