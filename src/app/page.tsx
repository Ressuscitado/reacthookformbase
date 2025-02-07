"use client";

import { Input } from "@/components/Input";
import { SignUpForm } from "@/types/SignUpForm";
import { SubmitHandler, useForm } from "react-hook-form";



const Page = () => {
  
  const { 
    control,
    handleSubmit,
  } = useForm<SignUpForm>();

  const handleFormSumit: SubmitHandler<SignUpForm> = (data) => {
    console.log(data)
  }
  
  return (
    <div className="container mx-auto">
      <form onSubmit={handleSubmit(handleFormSumit)}>

        <Input 
          control={control}
          name='name'
          rules={{ required: true, minLength: 2, maxLength: 20 }}
        />
        <Input 
          control={control}
          name='lastName'
        />
        <Input 
          control={control}
          name='age'
          rules={{required: 'Campo idade obrigatório', min:18, max:120}}
        
        />

        <input type="submit" value="Enviar" />

      </form>
    </div>
  );
};

export default Page;