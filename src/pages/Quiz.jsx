import React,{useState} from 'react';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
import Question from '@/shared/Question';
import { Progress } from "@/components/ui/progress"
import { Label } from "@/components/ui/label";
import AnimatedNumbers from "react-animated-numbers";
import { Separator } from "@/components/ui/separator"
import ConfettiExplosion from 'react-confetti-explosion';
import { Button } from '@/components/ui/button';
import { Link } from "react-router-dom";

const Quiz = () => {
    const confettiOptions = {
        force: 0.9,
        duration: 6000,
        particleCount: 100,
        width: 800,
    }
    const [question,setQuestion] = useState(1);
    const [answers,setAnswers] = useState([]);
    const [quizdone,setQuizdone] = useState(false);
    const [score,setScore] = useState(0);
    const quiz = [
        {text:'What is openAI 1 ?',options:['Opt 1','Opt 2','Opt 3','Opt 4'],answer:'Opt 2'},
        {text:'What is openAI 2 ?',options:['Opt 1','Opt 2','Opt 3','Opt 4'],answer:'Opt 3'},
        {text:'What is openAI 3 ?',options:['Opt 1','Opt 2','Opt 3','Opt 4'],answer:'Opt 4'},
        {text:'What is openAI 4 ?',options:['Opt 1','Opt 2','Opt 3','Opt 4'],answer:'Opt 1'},
    ];
    const saveAnswer = (e,q) => {
        let newAnswers = answers;
        newAnswers.push({
            question:q,answer:e
        });
        setAnswers(newAnswers);
        if(e){setScore(score + 1)}
        if(question < quiz.length){
            setQuestion(question + 1);
        }
        if(question == quiz.length){
            setQuizdone(true);
        }
    }
    return (
        <Card>
        <CardHeader>
            {!quizdone && <div>
            <Progress className='h-[2px] mb-5 opacity-50' value={question * 100 / quiz.length} />
            <CardTitle className='text-sm'>Question {question}/{quiz.length}</CardTitle>
            </div>}
        </CardHeader>
        <CardContent>
            <div className='w-[400px]'>

                {!quizdone && quiz.map((x,i) => {
                    if((i + 1) == question){
                        return <Question key={i} data={x} save={(e)=>saveAnswer(e,(i+1))}></Question>
                    }
                })}

                {quizdone && <div className='flex flex-col items-center'>
                    <Label className='text-3xl'>Quiz Result</Label>
                    <Separator className="my-2" />
                    <ConfettiExplosion {...confettiOptions} />
                    <span className='text-2xl'>{score}/{quiz.length} Questions are correct !</span>
                    <AnimatedNumbers
                        transitions={(index) => ({
                            type: "spring",
                            duration: index + 0.1,
                        })}
                        animateToNumber={score * 100}
                        fontStyle={{
                            fontSize: 60,
                        }}
                    />
                    
                    <span className='text-2xl'>Points</span>
                    
                        <Link to='/'><Button className='mt-5'>Back to Home</Button></Link>
                    
                </div>

                }

            </div>
        </CardContent>
        </Card>
    );
}

export default Quiz;
