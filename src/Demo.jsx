import { useState } from "react";

const Demo = () => {

  const [page,setPage]=useState(1)
  const [formData,setFormData]=useState({
    name:"",
    email:"",
    role:"",
terms:false


  })

  return <h2>Hello</h2>;
};

export default Demo;
