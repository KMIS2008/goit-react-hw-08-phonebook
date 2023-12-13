import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Label =styled.label`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  align-items: center;
  font-size: large;
  text-align: left;
  padding: 10px;
`
export const Button = styled.button`
  margin-top: 10px;
  background-color: ${p=>p.theme.colors.darkblue};
  border: 3px solid ${p=>p.theme.colors.gray};
  border-radius: 5px;
  color: ${p=>p.theme.colors.rose};
  flex-grow: 1;
  font-family: SFProText-Regular, Helvetica, Arial, sans-serif;
  font-size: 15px;
  height: 36px;
  line-height: 20px;
  min-width: 180px;
  padding: 0 15px;
  cursor: pointer;

&:hover {
  background-color: ${p=>p.theme.colors.gray};
  cursor: pointer;}
`