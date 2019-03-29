import Taro, { Component } from '@tarojs/taro'
import { View, Text,Image } from '@tarojs/components'
import { AtSearchBar } from 'taro-ui'
import './index.scss'
import Data from '../data/list'
import Img1 from '../../static/1.png'
export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }
  state = {
    search: ''
  }
  componentDidMount() {
    console.log(Data)
  }
  changeSearch = (e) => {
    this.setState({ search: e })
  }
  searchMusic = (e) => {
    console.log(e)
  }
  render() {
    let a = '../../static/1.png';
    const { search } = this.state;
    return (
      <View className='index'>
        <AtSearchBar
          actionName='搜索'
          value={search}
          onChange={this.changeSearch}
          onActionClick={this.searchMusic}
        />
        <View className='title'>
          <Text className='name'>热门歌单</Text>
          <Text className='all'>全部></Text>
        </View>
        <View className='playlist'>
          {
            Data.map((i, key) => {
              return <View className='card' key={key}>
                <Text className='name'>{i.name}</Text>
                <Text className='love'>❤</Text>
                <Text className='play'>play</Text>
                <Text className='time'>4:09</Text>
              </View>
            })
          }
        </View>
        <View className='title'>
          <Text className='name'>热门歌手</Text>
          <Text className='all'>全部></Text>
        </View>
        <View className='playerlist'>
          {
            Data.map((i, key) => {
              return <View className='card' key={key}>
                <Image className='img' src={a}></Image>
              </View>
            })
          }
        </View>
      </View>
    )
  }
}

