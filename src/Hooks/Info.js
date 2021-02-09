import React,{ useMemo } from "react";

const getName = (name) => {
    console.log("이름 호출!")
    return `안녕하세요 제 이름은 ${name} 입니다.`;
}

const getAge = (age) => {
    console.log("나이 호출!")
    return `나이는 ${age}살 입니다.`
}

const Info = ({name,age}) => {
    const sumName = useMemo(()=>getName(name),[name]);
    const sumAge = useMemo(()=>getAge(age),[age]);
    return (
        <div>
            {sumName}<br/>
            {sumAge}
        </div>
    )
}

export default Info;