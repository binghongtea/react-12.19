import { react, useState } from "react";

function Test1() {
  let [objA, setA] = useState({
    a: 1,
    arr: [
      { title: "title1", content: "content1" },
      { title: "title2", content: "content2" },
      { title: "title3", content: "content3" },
    ],
  });
  let b = "2025-12-9";
  let [isShow, setisShow] = useState(true);
  let [numTab, setNumTab] = useState(0);
  let showTab = () => {
    if (numTab == 0) {
      return <div>i am 0</div>;
    } else if (numTab == 1) {
      return <div>i am 1</div>;
    } else {
      return <div>i am 2</div>;
    }
  };
  setTimeout(() => {
    setNumTab(1);
  }, 1000);
  let showFun = () => {
    return isShow && "展示";
  };
  //   setTimeout(() => {
  //     setisShow(!isShow);
  //     let _a = objA;
  //     _a.a = 999;
  //     setA(_a);
  //   }, 1000);
  let createArrList = () => {
    let arr = [];
    objA.arr.forEach((item, index) => {
      arr.push(
        <div>
          <p>title: {item.title}</p>
          <p>content: {item.content}</p> 
        </div>
      );
    });
    return arr;
  };

  // 渲染
  return (
    <div>
      {createArrList()}
      {showFun()}
      {(() => {
        if (numTab == 0) {
          return <div>i am 0</div>;
        } else if (numTab == 1) {
          return <div>i am 1</div>;
        } else {
          return <div>i am 2</div>;
        }
      })()}
    </div>
  );
}

export default Test1;
