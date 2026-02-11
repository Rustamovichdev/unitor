import { useState, type FC } from "react";
import { Button, Checkbox } from "antd";

const Auth: FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function loginFunc() {
    console.log(username);
    console.log(password);
  }
  return (
    <>
      <div className="flex justify-center items-center bg-[url(https://img.freepik.com/premium-photo/interior-modern-gym-with-professional-fitness-equipment_841543-84290.jpg)] bg-center bg-no-repeat bg-cover h-screen">
        <div className="bg-[#292c33] rounded px-[80px] py-[40px] opacity-[0.9]">
          <div className="text-center mb-[20px]">
            <h1>Logo</h1>
          </div>
          <h1 className="text-center mb-[20px] text-[#fff]">WELCOME</h1>
          <div className="inputs">
            <div className="input__text">
              <p className="text-[12px] text-[#fff] mb-[10px]">Login</p>
            </div>
            <div className="input__container">
               <input
                type="text"
                placeholder="Javlon"
                onInput={(e) =>
                  setUsername((e.target as HTMLInputElement).value)
                }
                              className="px-[15px] py-[5px] bg-[#343743] border-0 rounded-[20px] outline-0"
              />
            </div>
            <div className="input__text">
              <p className="text-[12px] text-[#fff] my-[10px]">Password</p>
            </div>
            <div className="input__container">
               <input
                type="password"
                placeholder="********"
                onInput={(e) =>
                  setPassword((e.target as HTMLInputElement).value)
                }
             className="px-[15px] py-[5px] bg-[#343743] border-0 rounded-[20px] outline-0"

              />
            </div>
            <div className="my-[10px]">
              <Checkbox>
                <p className="checkbox__p">Remember me</p>
              </Checkbox>
            </div>
            
              <Button className="py-[15px]! px-[90px]! text-[18px]! bg-[#9b74f0]! border-0! rounded-[20px]!">Login</Button>
              
            </div>
          </div>
        </div>
      
    </>
  );
};
export default Auth;
