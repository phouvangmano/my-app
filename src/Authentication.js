import { useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_URL = "https://sample-api-fwbm.onrender.com/api/v1";

const Authentication = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [activeTab, setActiveTab] = useState("login");
  const [isLoading, setIsLoading] = useState(false);
  const [loginData, setLoginData] = useState({
    email: "olay1@gmail.com",
    password: "12345",
  });

  const [signupData, setSignupData] = useState({
    first_name: "",
    surname: "",
    email: "",
    phone_number: "",
    password: "",
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post(`${API_URL}/users/login`, loginData);
      if (response.data.status === "success") {
        const token = response.data.token;
        localStorage.setItem("token", token);
        setUser(response.data.data.user);
        await Swal.fire({
          icon: "success",
          title: "ເຂົ້າສູ່ລະບົບສຳເລັດ",
          text: `ຍິນດີຕ້ອນຮັບທ່ານ ${response.data.data.user.first_name} ${response.data.data.user.surname}`,
          timer: 1500,
        });
        navigate('/');
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "ເຂົ້າສູ່ລະບົບລົ້ມເຫຼວ",
        text: "ກະລຸນາກວດສອບຂ້ໍມູນຂອງທ່ານແລ້ວລອງໃຫມ່ອີກຄັ້ງ",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post(`${API_URL}/users/signup`, signupData);
      if (response.data.status === "success") {
        const token = response.data.token;
        localStorage.setItem("token", token);
        setUser(response.data.data.user);
       await Swal.fire({
          icon: "success",
          title: "ເຂົ້າສູ່ລະບົບສຳເລັດ",
          text: `ຍິນດີຕ້ອນຮັບທ່ານ ${response.data.data.user.first_name} ${response.data.data.user.surname}`,
          timer: 1500
        });
        navigate('/');
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "ເຂົ້າສູ່ລະບົບລົ້ມເຫຼວ",
        text: "ກະລຸນາກວດສອບຂ້ໍມູນຂອງທ່ານແລ້ວລອງໃຫມ່ອີກຄັ້ງ",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="tabs">
        <button
          className={activeTab === "login" ? "active" : ""}
          onClick={() => setActiveTab("login")}
        >
          ເຂົ້າສູ່ລະບົບ
        </button>
        <button
          className={activeTab === "signup" ? "active" : ""}
          onClick={() => setActiveTab("signup")}
        >
          ລົງທະບຽນ
        </button>
      </div>
      {activeTab === "login" && (
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={loginData.email}
            onChange={(e) =>
              setLoginData({ ...loginData, email: e.target.value })
            }
          ></input>
          <input
            type="password"
            placeholder="Password"
            value={loginData.password}
            onChange={(e) =>
              setLoginData({ ...loginData, password: e.target.value })
            }
          ></input>
          <button type="submit" disabled={isLoading}>
            ເຂົ້າສູ່ລະບົບ
          </button>
        </form>
      )}
      {activeTab === "signup" && (
        <div>
          <form onSubmit={handleSignup}>
            <input
              type="text"
              placeholder="First name"
              value={signupData.first_name}
              onChange={(e) =>
                setSignupData({ ...signupData, first_name: e.target.value })
              }
            ></input>
            <input
              type="text"
              placeholder="Surname"
              value={signupData.surname}
              onChange={(e) =>
                setSignupData({ ...signupData, surname: e.target.value })
              }
            ></input>
            <input
              type="email"
              placeholder="Email"
              value={signupData.email}
              onChange={(e) =>
                setSignupData({ ...signupData, email: e.target.value })
              }
            ></input>
            <input
              type="tel"
              placeholder="Phone number"
              value={signupData.phone_number}
              onChange={(e) =>
                setSignupData({
                  ...signupData,
                  phone_number: e.target.value,
                })
              }
            ></input>
            <input
              type="password"
              placeholder="Password"
              value={signupData.password}
              onChange={(e) =>
                setSignupData({ ...signupData, password: e.target.value })
              }
            ></input>
            <button type="submit" disabled={isLoading}>
              ລົງທະບຽນ
            </button>
          </form>
        </div>
      )}
      <style jsx>
        {`
          .container {
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
          }
          .tabs {
            display: flex;
            margin-bottom: 20px;
          }
          .tabs button {
            flex: 1;
            padding: 10px;
            border: none;
            background-color: #f1f1f1;
            cursor: pointer;
          }
          .tabs button.active {
            background-color: #4caf50;
            color: white;
          }
          form {
            display: flex;
            flex-direction: column;
            margin-bottom: 20px;
          }
          input,
          textarea {
            margin-bottom: 10px;
            padding: 5px;
          }
          button {
            padding: 10px;
            background-color: #4caf50;
            color: white;
            border: none;
            cursor: pointer;
          }
          button:disabled {
            background-color: #cccccc;
            cursor: not-allowed;
          }
          ul {
            list-style-type: none;
            padding: 0;
          }
          li {
            background-color: #f1f1f1;
            margin-bottom: 10px;
            padding: 10px;
            border-radius: 5px;
          }
          .loading {
            text-align: center;
            padding: 20px;
            font-style: italic;
            color: #666;
          }
        `}
      </style>
    </div>
  );
};

export default Authentication;
