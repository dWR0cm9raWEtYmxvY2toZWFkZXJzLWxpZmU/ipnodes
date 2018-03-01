import React,{Component} from 'react'
import Link from 'gatsby-link'
import '../assets/styles/index.css'
import { InputGroupAddon,InputGroup, Button, Row, Col, Input } from 'reactstrap'
import MButton from 'material-ui/Button'
import Card from 'material-ui/Card'
import LazyLoad from 'react-lazyload'


class IndexPage extends Component{
		state={
				tel:'',
				code:'',
				sended: false
		}
		componentWillMount(){
				let query = this.props.location.search.slice(1)
				console.log(query)
		}
		
		telInput = (e) => {
				this.setState({tel: e.target.value})
		}
		codeInput = (e) => {
				this.setState({code: e.target.value})
		}

		render(){
				const sendMsg = (e) => {
						let str = "phone=+86" + this.state.tel
						fetch('http://ipnodes.io/api/send_phone_code', {
								method: 'POST',
								body:  str,
								headers: {
										"Content-Type": "application/x-www-form-urlencoded"
								}
						}).then(res => res.json()).then(
								(resJSON) => {
										alert(resJSON.message)
										if(res.JSON.message='发送成功!'){
												this.setState({sended: true})
										}
								}
						)
				}
				const verifyMsg = () => {
						let str = "phone=+86" + this.state.tel + "&code=" + this.state.code
						fetch('http://ipnodes.io/api/send_phone_code', {
								method: 'POST',
								body:  str,
								headers: {
										"Content-Type": "application/x-www-form-urlencoded"
								}
						}).then(res => res.json()).then(
								(resJSON) => {
										alert(resJSON.message)
										if(res.JSON.message='发送成功!'){
												this.setState({sended: true})
										}
								}
						)	
				}				
				return(
						<div id="page-ctn">
								<LazyLoad height={200}>
										<section className="is1" style={{height:'100vh',width:'100%'}}>
												<h1>星系节点 IPNodes 重磅限时预约</h1>
												<text className="subtitle" style={{paddingBottom:'2rem'}}>
														IPFS矿机, 私人云盘, 数字钱包 | 2.3G四核, 4T硬盘, 4G内存</text>
												<div className="machine" />						
												<div id="grid1">
														<Input onChange={this.telInput}		style={{marginTop: '2rem'}}
														className="tel" placeholder="请输入手机号码" />
														<InputGroup style={{marginTop:'1rem'}}>
																<Input placeholder="验证码"  onChange={this.codeInput} />
																<InputGroupAddon addonType="append">
																		<Button color="secondary"
																				disabled={this.state.sended}
																				onClick={sendMsg}>获取手机验证码</Button>
																</InputGroupAddon>
														</InputGroup>
														<Button style={{margin:'1rem 0', width:'100%'}}
																disabled={!this.state.sended} color="danger">
																立即预订</Button>
														<h1 id="price">
																<s className="raw">原价3999元/台</s><br/> 2999元/台</h1>
												</div>
										</section></LazyLoad>
								<LazyLoad height={200} ><section className="is2">
										<h1>共享存储获得收益</h1>
										<h6>加入星系节点，获得多项共享收益</h6>
										<Row className="grid">
												<Col md={3} xs={12} className="g2c"><Row>
														<Col md={12} xs={4} ><div className="g2i i1"/></Col>
														<Col>
																<Row><Col className="g2t">IPFS矿机</Col></Row>
																<Row><Col className="g2p">共享存储计划<br/>获得持续收益</Col></Row>
														</Col>
												</Row></Col>
												<Col md={3} xs={12} className="g2c"><Row>
														<Col md={12} xs={4} ><div className="g2i i2"/></Col>
														<Col md={12}>
																<Row><Col className="g2t">送积分</Col></Row>
																<Row><Col className="g2p">共建数据交易OS主网<br/>早期用户，可获得IPN积分赠送</Col></Row>
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
								</section></LazyLoad>
								<LazyLoad height={200}>
										<section className="is3">
												<h1>私人云盘 + 数字钱包</h1>
												<h6>安全管家,守护数据/虚拟资产,只为您敞开</h6>
												<Row className="grid grid2">
														<Col md={2} xs={0}/>
														<Col md={5} xs={12} className="g3iw"><div className="g3i" /></Col>
														<Col >
																<Col className="g2c">
																		<Row className="g2t">数据安全</Row>
																		<Row className="g3p ">
																				防止丢失泄漏<br/>微信文件分享/可控授权访问
																		</Row>
																</Col>
																<Col className="g2c">
																		<Row className="g2t">IOS/安卓, 跨设备同步</Row>
																		<Row className="g3p">
																				IOS/安卓APP，跨设备数据同步<br/>电影 照片 文档 覆盖工作生活
																		</Row>
																</Col>
																<Col className="g2c">
																		<Row className="g2t">数字钱包</Row>
																		<Row className="g3p">
																				管理多种币资产<br/>保管关键资 、密码、重要文件
																		</Row>
																</Col>
														</Col>
												</Row>
										</section></LazyLoad>
								<LazyLoad height={200}><section className="isb">
										<h1>无限扩展的应用场景</h1>
										<h6>保障数据安全的DApp, 智能的服务, 助理级别的体验</h6>
										<Row className="isbgrid">
												<Col md={2} xs={0} />
												<Col md={4} xs={12} className="isbiw">
														<Card><div className="isbi isbi1"/></Card>
														<h6 className="g2t isbt">普通用户</h6>
														<h2 style={{fontSize:'0.6rem',lineHeight:'0.9rem',color:'grey'}}>
																社交， 件共享，最新区块链应用
														</h2>
												</Col>
												<Col md={4} xs={12} className="isbiw">
														<Card><div className="isbi isbi2" /></Card>
														<h6 className="g2t isbt">开发者</h6>
														<h2 style={{fontSize:'0.6rem',lineHeight:'0.9rem',color:'grey'}}>
																智能家居，健康数据 - 隐私场景 DApp</h2>	
												</Col>
										</Row>
								</section></LazyLoad>
								<LazyLoad height={200}><section className="is4">
										<h1>性能与生俱来</h1>
										<h6>专业硬件，性能强大，出众性价比</h6>
										<Row className="grid">
												<Col md={3} xs={6} className="g4c">
														<Row className="g4i i41" />
														<Row><Col className="g4t">空间多</Col></Row>
														<Row className="g4t"><Col>4TNAS硬盘</Col></Row>
												</Col>
												<Col md={3} xs={6} className="g4c">
														<Row className="g4i i42" />
														<Row><Col className="g4t">硬件强</Col></Row>
														<Row className="g4t"><Col>2.3GHz Intel® 四核</Col></Row>
												</Col>
												<Col md={3} xs={6} className="g4c">
														<Row className="g4i i43" />
														<Row><Col className="g4t">网速快</Col></Row>
														<Row className="g4t"><Col>千兆 PCIE</Col></Row>
												</Col>
												<Col md={3} xs={6} className="g4c">
														<Row className="g4i i44" />
														<Row><Col className="g4t">用电省</Col></Row>
														<Row className="g4t"><Col>30W功耗</Col></Row>														
												</Col>
												<text className="tp">
														尺寸265*200*180mm, 4G双通道内存</text>
										</Row>
								</section></LazyLoad>
								<LazyLoad height={200}><section className="is5">
										<h1>未来的智能家居</h1>
										<h6>星系节点致力于为每个人，提供不受监控的智能硬件方案，把数据归还给用户</h6>
										<Link to="/api/invite/new"><MButton
												style={{width:'8rem',marginTop:'1.5rem'}}
												variant="raised" color="secondary" >加入我们</MButton></Link>
										<div className="i51" />
								</section></LazyLoad>
						</div>
				)
		}
}

export default IndexPage