import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import fetcher from "../../api";

const AddService = () => {
  const [imageURL, setImageURL] = useState("");
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
    const serviceData = {
      ...data,
      image: imageURL,
    };
    const res = await fetcher.post("/add-service", serviceData);
    console.log(res);
    reset();
    setImageURL("");
    console.log(data);
  };
  const uploadHandleImage = (event) => {
    setLoading(true);
    const image = event.target.files[0];
    const formData = new FormData();
    formData.set("image", image);
    axios
      .post("https://api.imgbb.com/1/upload?key=000090", formData)
      .then((res) => {
        setImageURL(res.data.data.diplay_url);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="flex justify-center items-center h-screen bg-accent">
      <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div class="card-body">
          <h1 className="text-2xl text-center">Add a service</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="form-control">
              <label htmlFor="serviceName" class="label">
                <span class="label-text">service name</span>
              </label>
              <input
                type="text"
                id="serviceName"
                class="input input-bordered"
                {...register("serviceName")}
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Service charge</span>
              </label>
              <input
                type="text"
                class="input input-bordered"
                {...register("serviceCharge")}
              />
            </div>
            <div class="form-control">
              <label htmlFor="image" class="label">
                <span class="label-text">Image</span>
              </label>
              <input
                type="file"
                id="image"
                class="input input-bordered"
                onChange={uploadHandleImage}
              />
            </div>
            <div class="form-control mt-6">
              <button type="submit" class="btn btn-primary">
                Add service
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddService;
