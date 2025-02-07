import { SignUpForm } from "@/types/SignUpForm";
import { useController, UseControllerProps } from "react-hook-form";

export const Input = (props: UseControllerProps<SignUpForm>) => {
    const {field, fieldState} = useController(props);
    return (
        <div className="my-3">
            <input 
                {...field}
                placeholder={props.name} 
                className={`border ${fieldState.invalid ? "border-red-500" : "border-white"} p-3 text-black`}
            />
            {fieldState.error?.type === 'required' && <p>Esse campo é obrigatório!</p>}

        </div>
    );
}