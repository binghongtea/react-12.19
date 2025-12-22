import { react, useState } from "react";
import TableList from "./tableList";
function Test1() {
  let [isShow, setisShow] = useState(true);
  let showFun = () => {
    return isShow && "123";
  };
  let changeShow = (num,e) => {
    console.log(num,e)

    let _show = !isShow
    setisShow(_show)
  }
  // 渲染
  return (
    <>
    <TableList />
    <div>
      {showFun()}
    </div>
    <button onClick={(e) => changeShow(124, e)}>{ isShow ? '隐藏' : '展示' }</button>
    </>
  );
}

export default Test1;
