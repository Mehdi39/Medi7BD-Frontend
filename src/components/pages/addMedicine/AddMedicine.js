import React from "react";
import { useForm } from "react-hook-form";
import axios from 'axios'

const AddMedicine = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    axios.post('https://floating-peak-99575.herokuapp.com/addmedicine', data)
      .then(res => {
        if (res.data.insertedId) {
          alert('Data Added Successfully')
          reset()
        }
      })
  };

  
  return (
    <>
      <div className="container mx-auto bg-blue-50 py-5">
        <div className="my-container py-20">
          <form
            className="lg:-mt-24 w-full md:w-1/2 lg:w-1/3 mx-auto flex flex-col  justify-center space-y-2"
            onSubmit={handleSubmit(onSubmit)}
          >
            <label
              className="text-left mt-8 inline-block text-xl text-lightBlue"
              htmlFor="title"
            >
              Medicine Name
            </label>
            <input
              id="title"
              type="text"
              className="rounded-full w-full px-4 py-1 border-2 border-blue-400 focus:outline-none focus:border-blue-600"
              defaultValue="Napa extra"
              {...register("title")}
            />
            <div className="flex items-center space-x-2">
              <div className="price">
                <label
                  className="text-left inline-block text-xl text-lightBlue"
                  htmlFor="price"
                >
                  Price
                </label>
                <input
                  id="price"
                  type="number"
                  className="rounded-full w-full px-4 py-1 border-2 border-blue-400 focus:outline-none focus:border-blue-600"
                  defaultValue="10"
                  {...register("price")}
                />
              </div>
              <div className="price">
                <label
                  className="text-left inline-block text-xl text-lightBlue"
                  htmlFor="duration"
                >
                  Company Name
                </label>
                <input
                  id="companyName"
                  type="text"
                  className="rounded-full w-full px-4 py-1 border-2 border-blue-400 focus:outline-none focus:border-blue-600"
                  defaultValue="Beximco Pharmaceuticals Ltd"
                  {...register("companyName")}
                />
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="price">
                <label
                  className="text-left inline-block text-xl text-lightBlue"
                  htmlFor="price"
                >
                  In-stock
                </label>
                <input
                  id="inStock"
                  type="number"
                  className="rounded-full w-full px-4 py-1 border-2 border-blue-400 focus:outline-none focus:border-blue-600"
                  defaultValue="100"
                  {...register("inStock")}
                />
              </div>
              <div className="price">
                <label
                  className="text-left inline-block text-xl text-lightBlue"
                  htmlFor="duration"
                >
                  Mg
                </label>
                <input
                  id="mg"
                  type="text"
                  className="rounded-full w-full px-4 py-1 border-2 border-blue-400 focus:outline-none focus:border-blue-600"
                  defaultValue="500mg"
                  {...register("mg")}
                />
              </div>
            </div>

            <label
              className="text-left mt-8 inline-block text-xl text-lightBlue"
              htmlFor="img"
            >
              Generic Name
            </label>
            <input
              id="genericName"
              type="text"
              className="rounded-full w-full px-4 py-1 border-2 border-blue-400 focus:outline-none focus:border-blue-600"
              defaultValue="Paracetamol + Caffeine"
              {...register("genericName")}
            />

            <label
              className="text-left mt-8 inline-block text-xl text-lightBlue"
              htmlFor="img"
            >
              Package Thumb
            </label>
            <input
              id="img"
              type="text"
              className="rounded-full w-full px-4 py-1 border-2 border-blue-400 focus:outline-none focus:border-blue-600"
              defaultValue="https://emedi.com.bd/wp-content/uploads/2020/09/Napa-Extra-Tablet.jpg"
              {...register("img")}
            />
            <label
              className="text-left mt-8 inline-block text-xl text-lightBlue"
              htmlFor="description"
            >
              Package Description
            </label>
            <textarea
              id="description"
              className="rounded-lg w-full px-4 py-1 border-2 border-blue-400 focus:outline-none focus:border-blue-600"
              defaultValue="The is indicated in the following condition-
                Headache
                Migraine
                Toothache
                Neuralgia
                Feverishness
                Period pain
                Sore throat
                Backache
                Help to reduce the temperature
                Aches and pain of colds and flu"
              {...register("description")}
            />

            <input
              className="bg-blue-400 text-white border-none focus:outline-none focus:ring-2 focus:ring-blue-800 focus:ring-offset-2 hover:bg-blue-600 hover:shadow-lg cursor-pointer py-2 rounded-full text-lg"
              value="Add Medicine"
              type="submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default AddMedicine;
