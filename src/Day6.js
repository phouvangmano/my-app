import { useEffect, useState } from "react";

function BasicForm() {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`ຊື່ທີ່ຖືກສົ່ງ:${name} `);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={name}
          type="text"
          placeholder="ກະລຸນາປ້ອນຊື່ຂອງທ່ານ"
          onChange={(e) => setName(e.target.value)}
        ></input>
        <button type="submit">ສົ່ງຂໍ້ມູນ</button>
      </form>
    </div>
  );
}

const MultipleInputsForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`ຂໍ້ມູນທີ່ຖືກສົ່ງ ${JSON.stringify(formData)}`);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={formData.firstName}
          name="firstName"
          placeholder="ຊື່"
        ></input>
        <input
          onChange={handleChange}
          value={formData.lastName}
          name="lastName"
          placeholder="ນາມສະກຸນ"
        ></input>
        <input
          onChange={handleChange}
          value={formData.email}
          name="email"
          placeholder="email"
        ></input>
        <button type="submit">ສົ່ງຂ້ໍມູນ</button>
      </form>
    </div>
  );
};

const SelectAndRadio = () => {
  const [selectedFruit, setSelectFruit] = useState("");
  const [gender, setGender] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <select
          value={selectedFruit}
          onChange={(e) => setSelectFruit(e.target.value)}
        >
          <option value="">ເລືອກໝາກໄມ້</option>
          <option value="ໝາກແອັບເປິ້ນ">ໝາກແອັບເປິ້ນ</option>
          <option value="ໝາກກ້ວຍ">ໝາກກ້ວຍ</option>
          <option value="ໝາກກ້ຽງ">ໝາກກ້ຽງ</option>
        </select>
        {selectedFruit && <h4>ໝາກໄມ້ທີ່ທ່ານເລືອກ: {selectedFruit}</h4>}
        <div>
          <input
            onChange={(e) => setGender(e.target.value)}
            type="radio"
            id="male"
            name="gender"
            value="ເພດຊາຍ"
          />
          <label>ຊາຍ</label>
          <input
            onChange={(e) => setGender(e.target.value)}
            type="radio"
            id="female"
            name="gender"
            value="ເພດຍິງ"
          ></input>
          <label>ຍິງ</label>
        </div>
        {gender && <h4>ເພດຂອງທ່ານແມ່ນ: {gender}</h4>}
        <button type="submit">ສົ່ງຂໍ້ມູນ</button>
      </form>
    </div>
  );
};

const ProductSearch = () => {
  const [sortOrder, setSortOrder] = useState("asc");
  const [priceFilter, setPriceFilter] = useState({ min: "", max: "" });
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;
  const products = [
    {
      id: 1,
      name: "ໂທລະສັບມືຖື",
      price: 5,
    },
    {
      id: 2,
      name: "ແລັບທັອບ",
      price: 7,
    },
    {
      id: 3,
      name: "ຫູຟັງ",
      price: 1,
    },
    {
      id: 4,
      name: "ກ້ອງຖ່າຍຮູບ",
      price: 4,
    },
    {
      id: 5,
      name: "ລຳໂພງບູທູດ",
      price: 2,
    },
  ];
  const [results, setResults] = useState([...products]);

  useEffect(() => {
    handleSearch();
  }, [sortOrder, priceFilter, currentPage]);

  const handleSearch = () => {
    let filterProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Filter by price
    if (priceFilter.min !== "") {
      filterProducts = filterProducts.filter(
        (product) => product.price >= parseInt(priceFilter.min)
      );
    }

    if (priceFilter.max !== "") {
      filterProducts = filterProducts.filter(
        (product) => product.price <= parseInt(priceFilter.max)
      );
    }

    filterProducts.sort((a, b) => {
      return sortOrder === "asc" ? a.price - b.price : b.price - a.price;
    });
    setResults(filterProducts);
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  const handlePriceFilterChange = (e) => {
    setPriceFilter({ ...priceFilter, [e.target.name]: [e.target.value] });
  };

  // ການແບ່ງໜ້າ
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = results.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(results.length / itemsPerPage);
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSearch();
        }}
      >
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        ></input>
        <button type="submit">ຄົ້ນຫາ</button>
      </form>

      <div>
        <label>
          ຈັດລຽງຕາມລາຄາ:{" "}
          <select onChange={handleSortChange}>
            <option value="asc">ລາຄາ (ຕໍ່າ-ສູງ)</option>
            <option value="desc">ລາຄາ (ສູງ-ຕ່ຳ)</option>
          </select>
        </label>
      </div>

      <div>
        <label>
          ລາຄາຕ່ຳສຸດ:
          <input
            type="number"
            name="min"
            value={priceFilter.min}
            onChange={handlePriceFilterChange}
          ></input>
        </label>
        <label>
          ລາຄາສູງສຸດ:
          <input
            type="number"
            name="max"
            value={priceFilter.max}
            onChange={handlePriceFilterChange}
          ></input>
        </label>
      </div>
      <ul>
        {currentItems.map((product, index) => (
          <li key={product.id}>
            {index + 1}. {product.name}, ລາຄາ: {product.price} LAK
          </li>
        ))}
      </ul>
      <div>
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          ກ່ອນໜ້າ
        </button>
        <span>
          ໜ້າ {currentPage} ຈາກ {totalPages}
        </span>
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
        >
          ຖັດໄປ
        </button>
      </div>
    </div>
  );
};

function Day6() {
  return (
    <div className="container">
      <h1>ມຶ້ທີ6 ການສອນ Forms ແລະ Controlled Components ໃນ React</h1>
      <h2>ແບບຟອມພື້ນຖານ</h2>
      <BasicForm></BasicForm>
      <h2>ແບບຟອມທີ່ມີຫລາຍ Input</h2>
      <MultipleInputsForm></MultipleInputsForm>
      <h2>ການເລືອກ Radio ແລະ Dropdown</h2>
      <SelectAndRadio></SelectAndRadio>
      <h2>ລະບົບຄົ້ນຫາສິນຄ້າ</h2>
      <ProductSearch></ProductSearch>
      <style jsx>
        {`
          .container {
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
          }
          form {
            margin-bottom: 20px;
          }
          input,
          select {
            margin: 5px 0;
            padding: 5px;
          }
          button {
            margin-top: 10px;
            padding: 5px 10px;
            background-color: #4caf50;
            color: white;
            border: none;
            cursor: pointer;
          }
          .error {
            color: red;
            font-size: 20px;
          }
          ul {
            list-style-type: none;
            padding: 0;
          }
          li {
            margin: 5px 0;
            padding: 5px;
            background-color: #f0f0f0;
            border-radius: 3px;
          }
        `}
      </style>
    </div>
  );
}

export default Day6;
