import React from "react";

function Info() {
  const onSubmit = () => {

  };
  
  return (
    <div>
      <span>정보 수정</span>
      <form>
        <input type="text" name="name" placeholder="이름을 입력하세요"></input>
        <input type="submit" name="name" value="제출"></input>
      </form>
    </div>
  );
}

export default Info;
