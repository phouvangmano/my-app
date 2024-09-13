import { useState } from "react";

const SampleList = () => {
  const fruits = ["ໝາກກ້ວຍ", "ໝາກແອັບເປີ້ນ", "ໝາກສົ້ມ", "ໝາກມ່ວງ"];
  return (
    <div>
      <h2>ລາຍການໝາກໄມ້</h2>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>
            {index + 1}. {fruit}
          </li>
        ))}
      </ul>
    </div>
  );
};

const ASEANCoutries = () => {
  const countries = [
    "ລາວ",
    "ໄທ",
    "ຫວຽດນາມ",
    "ກຳປູເຈຍ",
    "ມຽນມາ",
    "ສິງກາໂປ",
    "ມາເລເຊຍ",
    "ອິນໂດເນເຊຍ",
    "ຟິລິບປິນ",
    "ບຣູໄນ",
  ];
  return (
    <div>
      <h2>ປະເທດອາຊຽນ</h2>
      <ul>
        {countries.map((country, index) => (
          <li key={index}>
            {index + 1}. {country}
          </li>
        ))}
      </ul>
    </div>
  );
};

const StudentList = () => {
  const students = [
    {
      name: "ສົມສະໜຸກ",
      class: "C1",
      gender: "MALE",
    },
    {
      name: "ສົມຫວັງ",
      class: "A1",
      gender: "MALE",
    },
    {
      name: "ສົມສີ",
      class: "A1",
      gender: "FEMALE",
    },
  ];
  return (
    <div>
      <h2>ລາຍຊື່ນັກຮຽນ</h2>
      <ul>
        {students
          .filter(
            (student) => student.class === "A1" && student.gender === "FEMALE"
          )
          .map((student, index) => (
            <li key={index}>
              {index + 1}. {student.name}, ຫ້ອງ {student.class}
            </li>
          ))}
      </ul>
    </div>
  );
};

const TodoList = () => {
  const [todos, setTodos] = useState([
    {
      text: "ຮຽນ React",
      completed: false,
    },
    {
      text: "ສ້າງ To-do app",
      completed: false,
    },
    {
      text: "ຝຶກຫັດໃຊ້ Lists & Keys",
      completed: true,
    },
  ]);
  const [newTodo, setNewTodo] = useState("");

  const onToggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const addTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, { text: newTodo, completed: false }]);
    setNewTodo("");
  };

  return (
    <div>
      <h2>ລາຍການສິ່ງທີ່ຕ້ອງເຮັດ</h2>
      <form onSubmit={addTodo}>
        <input
          onChange={(event) => setNewTodo(event.target.value)}
          value={newTodo}
          type="text"
          placeholder="ເພີ່ມລາຍການໃຫມ່..."
        ></input>
        <button type="submit">ເພີ່ມ</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li
            onClick={() => onToggleTodo(index)}
            key={index}
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };
  return (
    <div className="carousel">
      <button className="carousel-button prev" onClick={prevSlide}>
        &#10094;
      </button>
      {images.map((image, index) => (
        <img
          src={image}
          key={index}
          alt={`Slide ${index + 1}`}
          className={`carousel-image ${index === currentIndex ? "active" : ""}`}
        ></img>
      ))}
      <button className="carousel-button next" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

const Day5 = () => {
  const carouselImages = [
   'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/African_Bush_Elephant.jpg/220px-African_Bush_Elephant.jpg',
   'data:image/jpeg;base64,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'
  ]
  return (
    <div className="container">
      <h2>ການສອນ Lists ແລະ Keys ໃນ React</h2>
      <hr></hr>
      <SampleList></SampleList>
      <hr></hr>
      <ASEANCoutries></ASEANCoutries>
      <hr></hr>
      <StudentList></StudentList>
      <hr></hr>
      <TodoList></TodoList>
      <hr></hr>
      <ImageCarousel images={carouselImages}></ImageCarousel>
      <style jsx>{`
        .container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          display: flex;
          flex-direction: column;
          align-items: start;
          min-height: 100vh;
          background-color: white;
          text-align: start;
        }
        ul {
          list-style-type: none;
          padding: 0;
        }
        li {
          margin-bottom: 10px;
          padding: 10px;
          background-color: #f0f0f0;
          border-radius: 5px;
        }
        button {
          margin-left: 10px;
          cursor: pointer;
          padding: 5px 10px;
          background-color: #ff4444;
          color: white;
          border: none;
          border-radius: 3px;
        }
        hr {
          color: black;
          width: 100%;
        }
        .carousel {
          position: relative;
          width: 100%
          max-width: 600px;
          margin: 0 auto;
        }
        .carousel-image {
          width: 100%;
          height: auto;
          display: none;
        }
        .carousel-image.active {
          display: block;
        }
        .carousel-button {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background-color: rgba(0, 0, 0, 0.5);
          color: white;
          border: none;
          padding: 10px 15px;
          cursor: pointer;
          font-size: 18px;
        }
        .prev {
          left: 10px;
        }
        .next {
          right: 10px;
        }
      `}</style>
    </div>
  );
};

export default Day5;
