import { useState } from "react"
import '../style/tableList.scss'

export default function TableList() {
    let [state, setState] = useState({
        type: '1',
        arr1: [{title: '西瓜',content: 'content1'},{title: '苹果',content: 'content2'},{title: '香蕉',content: 'content3'}],
        arr2: [{title: '手机',content: 'content1'},{title: '电脑',content: 'content2'},{title: '耳机',content: 'content3'}],
    })
    let changeType = (type) => {
        setState({
            ...state,
            type: type
        })
    }
    let deleteItem = (type,index) => {
        let arr = type == '1' ? state.arr1 : state.arr2
        arr.splice(index,1)
        setState({
            ...state,
            [type == '1' ? 'arr1' : 'arr2']: arr
        })
    }
    let createArr = () => {
        let arr = state.type == '1' ? state.arr1 : state.arr2
        return arr.map((item,index) => {
            return (
                <div key={item.title} style={{display: 'flex',justifyContent: 'center'}}>
                    <p>title: { item.title}</p>
                    <p>content: { item.content}</p>
                    <button onClick={() => deleteItem(state.type,index)}>删除</button>
                </div>
            )
        })
    }
    return (
        <>
          <button className={state.type == '1' ? 'activeBtn' : 'normalBtn'} onClick={() => changeType('1')}>水果</button>
          <button className={state.type == '2' ? 'activeBtn' : 'normalBtn'} onClick={() => changeType('2')}>科技</button>
          {createArr()}
        </>
    )
}