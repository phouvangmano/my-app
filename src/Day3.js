import { useState } from "react";
import Swal from "sweetalert2";

const Form = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    dateOfBirth: "",
    gender: "",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      formData.name == "" ||
      formData.email == "" ||
      formData.dateOfBirth == "" ||
      formData.gender == "" ||
      formData.message == ""
    ) {
        return Swal.fire({
            title: "ທ່ານປ້ອນຂໍ້ມູນບໍ່ຄົບ",
            text: "ກະລຸນາປ້ອນຂໍ້ມູນບໍ່ຄົບຖ້ວນ",
            icon: "warning",
            confirmButtonText: "ຕົກລົງ",
          });
    }
    // ຖາມລູກຄ້າວ່າຈະສົ່ງຂໍ້ມູນແທ້ບໍ?
    const isSubmit = await Swal.fire({
      title: "ທ່ານຈະສົ່ງຂໍ້ມູນແທ້ບໍ?",
      text: "ຂໍ້ມູນຂອງທ່ານຈະຖືກນຳສົ່ງເຂົ້າລະບົບຫຼັງບ້ານ",
      icon: "question",
      confirmButtonText: "ຕົກລົງ",
      cancelButtonText: "ຍົກເລີກ",
      showCloseButton: true,
      showCancelButton: true,
    });
    if (!isSubmit.isConfirmed) {
      return;
    }

    onSubmit(formData);
    setFormData({
      name: "",
      email: "",
      dateOfBirth: "",
      gender: "",
      message: "",
    });
    Swal.fire({
      title: "ສຳເລັດ!",
      text: "ຂໍ້ມູນຂອງທ່ານໄດ້ຖືກສົ່ງສຳເລັດແລ້ວ",
      icon: "success",
      confirmButtonText: "ຕົກລົງ",
    });
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        value={formData.name}
        onChange={handleChange}
        type="text"
        name="name"
        placeholder="ຊື່"
      ></input>
      <input
        value={formData.email}
        type="email"
        name="email"
        placeholder="ອີເມວ"
        onChange={handleChange}
      ></input>
      <input
        onChange={handleChange}
        value={formData.dateOfBirth}
        type="date"
        name="dateOfBirth"
        placeholder="ວັນເດືອນປີເກີດ"
      ></input>
      <select onChange={handleChange} value={formData.gender} name="gender">
        <option value="">ເລືອກເພດ</option>
        <option value="ຊາຍ">ຊາຍ</option>
        <option value="ຍິງ">ຍິງ</option>
        <option value="ອື່ນໆ">ອື່ນໆ</option>
      </select>
      <textarea
        onChange={handleChange}
        value={formData.message}
        name="message"
        placeholder="ຂໍ້ຄວາມ"
      ></textarea>
      <button type="submit">ສົ່ງ</button>
    </form>
  );
};

const Day3 = () => {
  const [submissions, setSubmissions] = useState([]);
  const handleSubmit = (formData) => {
    setSubmissions([...submissions, formData]);
  };
  return (
    <div className="container">
      <h2>ຟອມໃຫ້ຄຳເຫັນ</h2>
      <Form onSubmit={handleSubmit}></Form>
      <div className="submissions">
        <h3>ຂໍ້ມູນທີ່ໄດ້ຮັບ</h3>
        {submissions.map((ss, index) => (
          <div className="submission-item">
            <p>
              <strong>ຊື່: </strong> {ss.name}
            </p>
            <p>
              <strong>ອີເມວ: </strong> {ss.email}
            </p>
            <p>
              <strong>ວັນເດືອນປີເກີດ: </strong> {ss.dateOfBirth}
            </p>
            <p>
              <strong>ເພດ: </strong> {ss.gender}
            </p>
            <p>
              <strong>ຂໍ້ຄວາມ: </strong> {ss.message}
            </p>
          </div>
        ))}
      </div>
      <style jsx>
        {`
          .container {
            display: flex;
            flex-direction: column;
            align-items: center;
            min-height: 100vh;
            background-color: #f0f0f0;
            padding: 20px;
            max-width: 600px;
            text-align: center;
            margin: 0 auto;
          }
          .form {
            display: flex;
            flex-direction: column;
            width: 300px;
            padding: 20px;
            background-color: white;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            margin-bottom: 20px;
          }
          .form input,
          .form textarea,
          .form select {
            margin: 10px 0;
            padding: 10px;
            border-radius: 4px;
            border: 1px solid #ddd;
            font-size: 16px;
          }
          .form textarea {
            min-height: 100px;
            resize: vertical;
          }
          .form button {
            margin: 10px 0;
            padding: 10px;
            background-color: #4caf50;
            color: white;
            border: none;
            border-radius: 4px;
            font-size: 16px;
            cursor: pointer;
          }
          .submissions {
            width: 100%;
            max-width: 500px;
            margin-top: 20px;
            text-align: left;
          }
          .submission-item {
            background-color: white;
            border-radius: 8px;
            padding: 15px;
            margin-bottom: 15px;
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
          }
        `}
      </style>
    </div>
  );
};

export default Day3;
