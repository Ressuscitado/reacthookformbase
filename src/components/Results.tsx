import { Question } from "@/types/Question";

type Props = {
    questions: Question[];
    answers: number[];
}

export const Results = ({ questions, answers }: Props) => {
    return (
        <div className="text-xl">
            {questions.map((item, key) => (
                <div key={key} className="mb-7">
                    <div className="font-bold">
                        {key + 1}. {item.question}  
                    </div>
                    <div> 
                        <span className={item.answer === answers[key] ? 'text-green-500 font-bold' : 'text-red-500 font-bold'}>
                            {item.answer === answers[key] ? 'Correct' : 'Incorrect'}
                        </span>
                        <span className="font-bold text-green-500">
                            {" - "}
                            {item.options[item.answer]}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    );
}