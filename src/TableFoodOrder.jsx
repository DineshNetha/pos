import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineDining } from "react-icons/md";
import { HiOutlineUserGroup } from "react-icons/hi";
import { IoPersonOutline } from "react-icons/io5";
import { MdOutlineNoteAlt } from "react-icons/md";
import { FaHandHolding } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { FiMinus } from "react-icons/fi";
import { IoAddOutline } from "react-icons/io5";
import { useParams } from "react-router-dom";

const FastFoodCategories = [
  {
    Categories: [
      "Favorite Items",
      "Beverages",
      "Burgers",
      "Egg",
      "Chicken",
      "Chakhna",
      "Chinese Snacks",
      "Chinese Soups",
      "Garlic Bread",
      "Gravy Items",
      "Japanese Noodles",
      "Dessert",
    ],
  },
];

const FastFoodSubCategories = [
  {
    category: "Favorite Items",
    items: [
      { name: "Cheeseburger", type: "veg" },
      { name: "Fries", type: "veg" },
      { name: "Ice Cream", type: "veg" },
      { name: "Veggie Burger", type: "veg" },
      { name: "Juice", type: "veg" },
      { name: "Omelette", type: "egg" },
      { name: "Spring Rolls", type: "veg" },
      { name: "Dumplings", type: "nonveg" },
      { name: "Wontons", type: "nonveg" },
      { name: "Chicken Rolls", type: "nonveg" },
      { name: "Cheeseburger", type: "veg" },
      { name: "Fries", type: "veg" },
      { name: "Ice Cream", type: "veg" },
      { name: "Veggie Burger", type: "veg" },
      { name: "Juice", type: "veg" },
      { name: "Omelette", type: "egg" },
      { name: "Spring Rolls", type: "veg" },
      { name: "Dumplings", type: "nonveg" },
      { name: "Wontons", type: "nonveg" },
      { name: "Chicken Rolls", type: "nonveg" },
      { name: "Cheeseburger", type: "veg" },
      { name: "Fries", type: "veg" },
      { name: "Ice Cream", type: "veg" },
      { name: "Veggie Burger", type: "veg" },
      { name: "Juice", type: "veg" },
      { name: "Omelette", type: "egg" },
      { name: "Spring Rolls", type: "veg" },
      { name: "Dumplings", type: "nonveg" },
      { name: "Wontons", type: "nonveg" },
      { name: "Chicken Rolls", type: "nonveg" },
    ],
  },
  {
    category: "Beverages",
    items: [
      { name: "Soda", type: "veg" },
      { name: "Coffee", type: "veg" },
      { name: "Juice", type: "veg" },
    ],
  },
  {
    category: "Burgers",
    items: [
      { name: "Classic Burger", type: "nonveg" },
      { name: "Veggie Burger", type: "veg" },
      { name: "Double Cheese Burger", type: "veg" },
    ],
  },
  {
    category: "Egg",
    items: [
      { name: "Boiled Egg", type: "egg" },
      { name: "Omelette", type: "egg" },
      { name: "Egg Salad", type: "egg" },
    ],
  },
  {
    category: "Chicken",
    items: [
      { name: "Fried Chicken", type: "nonveg" },
      { name: "Chicken Wings", type: "nonveg" },
      { name: "Grilled Chicken", type: "nonveg" },
    ],
  },
  {
    category: "Chakhna",
    items: [
      { name: "Nuts", type: "veg" },
      { name: "Chips", type: "veg" },
      { name: "Popcorn", type: "veg" },
    ],
  },
  {
    category: "Chinese Snacks",
    items: [
      { name: "Spring Rolls", type: "veg" },
      { name: "Dumplings", type: "nonveg" },
      { name: "Wontons", type: "nonveg" },
    ],
  },
  {
    category: "Chinese Soups",
    items: [
      { name: "Hot and Sour Soup", type: "veg" },
      { name: "Wonton Soup", type: "nonveg" },
      { name: "Egg Drop Soup", type: "egg" },
    ],
  },
  {
    category: "Garlic Bread",
    items: [
      { name: "Cheesy Garlic Bread", type: "veg" },
      { name: "Herb Garlic Bread", type: "veg" },
    ],
  },
  {
    category: "Gravy Items",
    items: [
      { name: "Butter Chicken", type: "nonveg" },
      { name: "Paneer Tikka Masala", type: "veg" },
      { name: "Mutton Rogan Josh", type: "nonveg" },
    ],
  },
  {
    category: "Japanese Noodles",
    items: [
      { name: "Ramen", type: "nonveg" },
      { name: "Udon", type: "veg" },
      { name: "Soba", type: "veg" },
    ],
  },
  {
    category: "Dessert",
    items: [
      { name: "Chocolate Cake", type: "veg" },
      { name: "Ice Cream Sundae", type: "veg" },
      { name: "Fruit Salad", type: "veg" },
    ],
  },
];

const TableFoodOrder = () => {
  const [selectedCategory, setSelectedCategory] = useState("Favorite Items");
  const [cartItems, setCartItems] = useState([]);
  const { tableNumber } = useParams();

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const typecolouring = (input) => {
    switch (input) {
      case "veg":
        return "#399918";
      case "nonveg":
        return "#F95454";
      case "egg":
        return "#e4d321";
      default:
        return "";
    }
  };

  const handleAddItem = (item) => {
    const existingItem = cartItems.find(
      (cartItem) => cartItem.name === item.name
    );
    if (existingItem) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.name === item.name
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1, price: 130 }]);
    }
  };

  const handleRemoveItem = (name) => {
    setCartItems(cartItems.filter((item) => item.name !== name));
  };

  const handleQuantityChange = (name, change) => {
    setCartItems(
      cartItems.map((item) =>
        item.name === name
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };
  let count = 0;
  const CountTotal = (e) => {
    count = count + e;
  };
  return (
    <div className="mt-4">
      <div className="bg-[#000000B3] gap-x-1 flex items-center justify-between w-full h-[45px]">
        <div className="flex w-[59%] gap-x-2">
          <div className="text-white flex items-center w-[170px] cursor-pointer justify-around font-semibold bg-blue-400 py-[9px]">
            Fast Food <FaAngleDown className="text-[20px]" />
          </div>
          <div className="flex justify-center items-center">
            <IoSearchOutline className="absolute mr-[245px] opacity-30 text-[22px]" />
            <input
              className="px-2 pl-10 h-[40px] outline-none placeholder:text-gray-400 w-[290px] border border-gray-300 rounded-[3px]"
              placeholder="Search item"
            />
          </div>
          <input
            className="px-3 h-[40px] outline-none placeholder:text-gray-400 w-[290px] border border-gray-300 rounded-[3px]"
            placeholder="Short code"
          />
        </div>
        <div className="flex items-center w-[41%]">
          <div className="py-[10px] w-[33%] text-center font-semibold text-white text-[16px] border-r border-white border-opacity-40 hover:bg-[#e40039de] cursor-pointer">
            Dine In
          </div>
          <div className="py-[10px] w-[34%] text-center font-semibold text-white text-[16px] border-r border-white border-opacity-40 hover:bg-[#e40039de] cursor-pointer">
            Delivery
          </div>
          <div className="py-[10px] w-[33%] text-center font-semibold text-white text-[16px] hover:bg-[#e40039de] cursor-pointer">
            Pick Up
          </div>
        </div>
      </div>

      <div className="flex w-full h-[calc(100vh-150px)] justify-between">
        <div className="bg-[#000000c9] w-[14%] text-white font-normal h-full overflow-y-auto">
          {FastFoodCategories[0].Categories.map((category, index) => (
            <div
              key={index}
              onClick={() => handleCategoryClick(category)}
              className={`px-4 py-4 border-y border-white border-opacity-[33%] hover:bg-[#e40039de] hover:font-semibold cursor-pointer ${
                selectedCategory === category ? "bg-[#e40039de]" : ""
              }`}
            >
              {category}
            </div>
          ))}
        </div>

        <div
          className="bg-white w-[45%] text-black font-normal overflow-y-auto"
          style={{ minHeight: "calc(100% - 45px)" }}
        >
          {selectedCategory && (
            <div className="mt-6 grid grid-cols-4 ml-4">
              {FastFoodSubCategories.filter(
                (subCat) => subCat.category === selectedCategory
              )
                .flatMap((subCat) => subCat.items)
                .map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    onClick={() => handleAddItem(item)}
                    className={`py-9 mb-4 w-[130px] h-[65px] rounded-sm flex items-center shadow-md justify-start px-3 pl-4 text-wrap border border-[#00000023] border-l-4 border-l-[${typecolouring(
                      item.type
                    )}] hover:bg-[#0000000D] cursor-pointer`}
                  >
                    {item.name}
                  </div>
                ))}
            </div>
          )}
        </div>

        <div className="w-[42%]">
          <div className="border border-[#0000003b] ml-5 h-[calc(100vh-150px)]">
            <div className="flex justify-between items-center border border-r-black border-b-black border-opacity-25">
              <div className="flex justify-between items-center">
              <div className="flex flex-col"><MdOutlineDining className="text-[58px] border border-r-black border-opacity-25 px-4 py-2" /><div className="absolute mt-[37px] ml-[24px] font-semibold text-[16px] text-[#e40039de]">{tableNumber}</div></div>
                <IoPersonOutline className="text-[58px] border border-r-black border-opacity-25 px-4 py-2" />
                <HiOutlineUserGroup className="text-[58px] border border-r-black border-opacity-25 px-4 py-2" />
                <MdOutlineNoteAlt className="text-[58px] border border-r-black border-opacity-25 px-4 py-2" />
                <FaHandHolding className="text-[58px] border border-r-black border-opacity-25 px-4 py-2" />
              </div>
              <div className="font-semibold border bg-orange-300 border-l-black px-4 py-4 border-opacity-25 pr-3">
                Ground Floor
              </div>
            </div>

            <div>
              <table className="min-w-full">
                <thead>
                  <tr className="w-full flex justify-between py-2  bg-black bg-opacity-10">
                    <th className="font-normal w-[33%]">ITEMS</th>
                    <th className="font-normal w-[34%]">QTY.</th>
                    <th className="font-normal w-[33%]">PRICE</th>
                  </tr>
                </thead>
                <tbody>
                  <div className="h-[320px] overflow-y-auto">
                    {cartItems.map((item, index) => (
                      <tr
                        key={index}
                        className="flex w-full justify-between border-b py-[7px] border-gray-300"
                      >
                        <td className="w-[33%] gap-x-1 justify-start pl-7 items-center flex font-semibold underline">
                          <RxCross2
                            className="cursor-pointer mr-2 bg-[#e40039de] text-white  text-[23px] p-[3px] rounded-full"
                            onClick={() => handleRemoveItem(item.name)}
                          />
                          {item.name}
                        </td>
                        <td className="w-[34%] space-x-1 justify-center items-center flex">
                          <button
                            onClick={() => handleQuantityChange(item.name, -1)}
                            className="px-1 py-1 border border-black border-opacity-35"
                          >
                            <FiMinus />
                          </button>
                          <div className="px-4 border border-black border-opacity-35">
                            {item.quantity}
                          </div>
                          <button
                            onClick={() => handleQuantityChange(item.name, 1)}
                            className="px-1 py-1 border border-black border-opacity-35"
                          >
                            <IoAddOutline />
                          </button>
                        </td>
                        <td className="w-[33%] flex flex-col justify-center items-center">
                          {(item.price * item.quantity).toFixed(2)}
                          <div className="underline text-black text-opacity-65 text-[14px]">
                            {item.price.toFixed(2)}
                          </div>
                        </td>
                        {/* {count = count + item.price * item.quantity} */}
                        {CountTotal(item.price * item.quantity)}
                      </tr>
                    ))}
                  </div>
                </tbody>
              </table>
              <div className="bg-black flex justify-end items-center text-[18px] px-7 font-semibold bg-opacity-65 text-white h-[36px]">
                Total - {count.toFixed(2)}
              </div>
            </div>
            <div>
              <ul className="flex bg-black bg-opacity-45 py-1 justify-evenly">
                <li className="flex items-center gap-x-2 text-white">
                  <input
                    className="cursor-pointer"
                    type="radio"
                    name="payment"
                    value="cash"
                    defaultChecked
                  />
                  <div>Cash</div>
                </li>
                <li className="flex items-center gap-x-2 text-white">
                  <input
                    className="cursor-pointer"
                    type="radio"
                    name="payment"
                    value="cash"
                  />
                  <div>Card</div>
                </li>
                <li className="flex items-center gap-x-2 text-white">
                  <input
                    className="cursor-pointer"
                    type="radio"
                    name="payment"
                    value="cash"
                  />
                  <div>Due</div>
                </li>
                <li className="flex items-center gap-x-2 text-white">
                  <input
                    className="cursor-pointer"
                    type="radio"
                    name="payment"
                    value="cash"
                  />
                  <div>Other</div>
                </li>
              </ul>
            </div>
            <div className="flex justify-between pt-4 px-5">
                <button className="bg-[#d81848ef] px-[20px] py-[7px] rounded-[5px] text-white font-semibold">Save</button>
                <button className="bg-[#d81848ef] px-[13px] py-[7px] rounded-[5px] text-white font-semibold">Save & Print</button>
                <button className="bg-[#d81848ef] px-[13px] py-[5px] rounded-[5px] text-white font-semibold">Save & eBill</button>
                <button className="bg-black bg-opacity-75 px-[20px] py-[5px] rounded-[5px] text-white font-semibold">KOT</button>
                <button className="bg-black bg-opacity-75 px-[13px] py-[5px] rounded-[5px] text-white font-semibold">KOT & Print</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableFoodOrder;
