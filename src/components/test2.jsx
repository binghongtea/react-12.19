import React from 'react'

class Test2 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            a:1,
            arr: [{title: 'title1',content: 'content1'},{title: 'title2',content: 'content2'},{title: 'title3',content: 'content3'}],
            obj: {
                obj1: 1
            }
        }
    }
    createArr() {
        let arr = []
        this.state.arr.forEach((item,index) => {
            arr.push(
                <div key = { item.title}>
                    <p>title: { item.title}</p>
                    <p>content: { item.content}</p>
                </div>
            )
        })
        return arr
    }
    render() {
        
        setTimeout(() => {
            let _obj = this.state.obj
            _obj.obj1 = 999
            this.setState({
                obj: _obj
            })

        }, 1000);
        return (
            <div>
                { 
                    
                }
            </div>
        )
    }
}

export default Test2