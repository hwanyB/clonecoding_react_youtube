import React, {useState} from 'react';
import styled from '@emotion/styled/macro';





const Base = styled.div`
    /* margin: 100px auto; */
    width: 250px;
`;

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 10px 0;
`;

const Label = styled.label`
    font-size: 15px;
    width: 50px;
    margin: 0;
    margin-right: 10px;
    text-align: left;    
    color: rgb(63, 117, 179);
    font-weight: 700;
`;

const Input = styled.input`
    width: 200px;
    margin: 0;
    border: 1px rgba(114, 154, 201, 0.6) solid;
    color: rgb(63, 117, 179);
    padding: 5px;
    border-radius: 5px;
    outline: none;
`;

const Button = styled.button`
    :not(:disabled) {
        border: 2px rgba(114, 154, 201, 0.6) solid;
        color: rgb(63, 117, 179);
        cursor: pointer;
    }
    border: 2px #d3d3d3 solid;
    width: 250px;
    padding: 5px 10px;
    box-sizing: border-box;
    border-radius: 5px;
    font-weight: 100;
    line-height: 36px;
    margin-right: 10px;
    font-size: 12px;
    background-color: transparent;
    font-weight: 700;
    
`;



export default function AssignmentInfo({isLogged, onClick}) {
    const [id, setId] = useState("");
    const [pw, setPw] = useState("");


    const handleIdChange = (e) => {
        setId(e.target.value);
    }
    const handlePwChange = (e) => {
        setPw(e.target.value);
    }

  return <div>
      {
                isLogged === false ? (
                    <Base>
                        <Container>
                            <Label>ID</Label>
                            <Input onChange={handleIdChange} value={id} type='text' />
                        </Container>
                        <Container>
                            <Label>PW</Label>
                            <Input onChange={handlePwChange} value={pw} type='password' />
                        </Container>
                        <Button isLogged={isLogged} onClick={onClick} disabled={id.length < 1 || pw.length < 1}>로그인</Button>
                    </Base>
                ) : (
                    <Base>
                        <Button isLogged={isLogged} onClick={onClick}>로그아웃</Button>
                    </Base>
                )
            }
  </div>;
}
