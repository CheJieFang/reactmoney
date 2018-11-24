import React,{Component} from 'react';
import {Route,Switch,withRouter} from 'react-router-dom';
import Home from './Home';
import Enjoy from './Enjoy';
import Loan from './Loan';
import Mine from './Mine';
import { TabBar } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css'
import '../sass/page.scss'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome,faHandHoldingUsd,faEyeDropper,faUser} from '@fortawesome/free-solid-svg-icons'

library.add(faHome,faHandHoldingUsd,faEyeDropper,faUser)
class App extends Component{
	constructor(){
		super();
		this.state={
			tabs:[
				{
					title:'首页',
					path:'/home',
					icon:'home'
				},
				{
					title:'出借',
					path:'/loan',
					icon:'hand-holding-usd'
				},
				{
					title:'享玩',
					path:'/enjoy',
					icon:'eye-dropper'
				},
				{
					title:'我的',
					path:'/mine',
					icon:'user'
				}
			],
			currentTab:0
		}
		
	}
	handlerClick(index,path){
		this.setState({
			currentTab:index
		})
		this.props.history.push(path)
		console.log(this.props)
	}
    render(){
        return <div className='box'> 
        <Switch>
			<Route path='/home' component={Home}/>
			<Route path='/loan' component={Loan}/>
			<Route path='/enjoy' component={Enjoy}/>
			<Route path='/mine' component={Mine}/>
		</Switch>
        <TabBar
        	tintColor="#000"
        	noRenderContent='true'
        >
        	{
        		this.state.tabs.map((tab,index)=>{
        			return <TabBar.Item
			            title={tab.title}
			            key={tab.path}
			            icon={<FontAwesomeIcon icon={tab.icon}/>}
			            selectedIcon={<FontAwesomeIcon icon={tab.icon}/>}
			            selected={this.state.currentTab === index}
			            onPress={this.handlerClick.bind(this,index,tab.path)}
		          	>
        			
        			</TabBar.Item>
        		})
        	}
          </TabBar> </div>
    }
}
//高阶组件
//App=withRouter(App);
// 暴露接口
export default App;