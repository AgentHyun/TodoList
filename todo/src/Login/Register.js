import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
const TodoTemplateBlock = styled.div`
  width: 512px;
  height: 768px;

  position: relative; /* 추후 박스 하단에 추가 버튼을 위치시키기 위한 설정 */
  background: white;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);

  margin: 0 auto; /* 페이지 중앙에 나타나도록 설정 */
  align-items: center;
  justify-content: center;
  margin-top: 96px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
`;
const form = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  opacity: 0;
  &:hover {
    color: #ff6b6b;
  }
`;
function TodoTemplate() {
const navigate = useNavigate();
const[Email,setEmail] = useState("")
const[Password,setPassword] = useState("")
const[ConfirmPassword,setConfirmPassword] = useState("")

const onEmailHandler = (event) =>{
  setEmail(event.currentTarget.value)
}

const onPasswordHandler = (event) =>{
  setPassword(event.currentTarget.value)
}
const onConfirmPasswordHandler = (event) =>{
  setConfirmPassword(event.currentTarget.value)
}
const onSubmitHandler = (event) =>{
  event.preventDefalt();
}
const navigateToTodo = () =>{
    navigate("/todo");
}
const navigateToRegister = () =>{
    navigate("/Register");
}
const navigateLogin = ()=>{
  navigate("/");
}
  return <TodoTemplateBlock>
 <form style = {{display:'flex', flexDirection : 'column'}
 }
  onSubmit = {onSubmitHandler}
  >
  <label>Email</label>
  <input type = "email" value = {Email} onChange = {onEmailHandler}/>
  <label>Password</label>
  <input type = "Password" value = {Password} onChange = {onPasswordHandler}/>
  <label>ConfirmPasswordPassword</label>
  <input type = "Password" value = {ConfirmPassword} onChange = {onConfirmPasswordHandler}/>
  </form>
  <button style = {{margin : 20, padding : 3}}type = "submit" onClick = {navigateLogin}> Register</button>
  </TodoTemplateBlock>;
}

export default TodoTemplate;