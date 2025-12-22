import { react, useState,useEffect } from "react";
import MyButton from "./myButton";
function Test1() {
  let [count, setCount] = useState(0);
  let changeCount = () => {
    setCount(count + 1)
  }
  useEffect(() => {
    console.log(count)
  },[count])
  // 渲染
  return (
    <>
    <MyButton onClick={changeCount} count={count} />
    <MyButton onClick={changeCount} count={count} />
    </>
  );
}

export default Test1;
