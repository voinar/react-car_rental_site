import { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isFriendly: true,
    employment: "",
    favColor: "",
  });

  // console.log(formData.favColor);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
    console.log(formData)

  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData)
  }

  return (
    <form className="p-20 text-green-700 flex flex-col"
    onSubmit={handleSubmit}>
      <input
        className="mb-4 w-64"
        type="text"
        name="firstName"
        placeholder="First Name"
        onChange={handleChange}
        value={formData.firstName}
      />
      <input
        className="mb-4 w-64"
        type="text"
        name="lastName"
        placeholder="Last Name"
        onChange={handleChange}
        value={formData.lastName}
      />
      <input
        className="mb-4 w-64"
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
        value={formData.email}
      />
      <textarea
        className="mb-4 w-64"
        name="comments"
        placeholder="Enter comments"
        onChange={handleChange}
        value={formData.comments}
      />
      <div>
        <input
          type="checkbox"
          className="mb-4 w-4"
          name="isFriendly"
          id="isFriendly"
          checked={formData.isFriendly}
          onChange={handleChange}
        />
        <label htmlFor="isFriendly" className="mb-4 w-64">
          Are you friendly?
        </label>
      </div>
      <fieldset className="mb-4 w-64 text-green-100">
        <legend>Current employment status:</legend>
        <div>
          <input
            type="radio"
            id="unemployed"
            name="employment"
            value="unemployed"
            checked={formData.employment === "unemployed"}
            onChange={handleChange}
          />
          <label htmlFor="unemployed">Unemployed</label>
        </div>
        <div>
          <input
            type="radio"
            id="part-time"
            name="employment"
            value="part-time"
            checked={formData.employment === "part-time"}
            onChange={handleChange}
          />
          <label htmlFor="part-time">Part-time</label>
        </div>
        <div>
          <input
            type="radio"
            id="full-time"
            name="employment"
            value="full-time"
            checked={formData.employment === "full-time"}
            onChange={handleChange}
          />
          <label htmlFor="full-time">Full-time</label>
        </div>
      </fieldset>
      <select
        id="favColor"
        value={formData.favColor}
        onChange={handleChange}
        name="favColor"
      >
        <option value="">Choose</option>
        <option value="red">Red</option>
        <option value="orange">Orange</option>
        <option value="yellow">Yellow</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
        <option value="indigo">Indigo</option>
        <option value="violet">Violet</option>
      </select>
      <br/>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
