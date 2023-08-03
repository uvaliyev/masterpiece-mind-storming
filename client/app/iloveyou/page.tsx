"use client"
import React, { useState } from "react";
import Image from 'next/image'
import axios from "axios";
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@radix-ui/react-label';
import { Input } from '@/components/ui/input';
import Doner from "/public/cats.png"
import Markdown, { compiler } from 'markdown-to-jsx';
import { render } from "react-dom";

const LessonPlanGenerator = () => {
    const [lessonTopic, setLessonTopic] = useState("");
    const [studentClass, setStudentClass] = useState("");
    const [description, setDescription] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [output, setOutput] = useState("");

    const handleSubmit = async () => {
        setIsLoading(true);
        setOutput("");

        const question = `Imagine you are a teacher, write a lesson plan on ${lessonTopic} for ${studentClass}, more in detail: ${description}. Give me plan in markdown format.`;
        try {
            const result = await axios.post('https://tyan.by/app/api', { question });
            setOutput(result.data.result);
        } catch (error) {
            setOutput('An error occurred while fetching the response.');
        }
        setIsLoading(false);
    };
    const markdownOptions = {
        overrides: {
            h1: {
                props: { className: 'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl' }
            },
            h2: {
                props: { className: 'scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0' }
            },
            h3: {
                props: { className: 'scroll-m-20 text-2xl font-semibold tracking-tight' }
            },
            h4: {
                props: { className: 'scroll-m-20 text-xl font-semibold tracking-tight' }
            },
            p: {
                props: { className: 'leading-7 [&:not(:first-child)]:mt-6' }
            },
            blockquote: {
                props: { className: 'mt-6 border-l-2 pl-6 italic' }
            },
        }
    };

    return (

        <div id="asddas" className="grid grid-cols-10 rounded-xl shadow-md p-5 gap-4">
            <div className="col-span-5 rounded-3xl bg-white p-5 space-y-4">
                <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-4xl">
                    Сгенерировать план урока
                </h1>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="lessonTopic">Название урока</Label>
                    <Input type="text" id="lessonTopic" value={lessonTopic} onChange={e => setLessonTopic(e.target.value)} placeholder="Топология" />
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="studentClass">Класс ученика</Label>
                    <Input type="text" id="studentClass" value={studentClass} onChange={e => setStudentClass(e.target.value)} placeholder="8-й класс" />
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="description">Описание урока</Label>
                    <Textarea value={description} onChange={e => setDescription(e.target.value)} placeholder="Открытые множества, компактность." />
                </div>

                <Button onClick={handleSubmit} >{isLoading ? 'Генерируем...' : 'Сэкономить время (кнопка)'}</Button>
            </div>
            <div className="col-span-5 rounded-3xl bg-white p-5 flex flex-col items-center justify-center">
                <div className='space-y-4'>
                    {isLoading ? (
                        <>
                            Идет генерация
                        </>
                    ) : output ? (
                        <div className="scroll-m-20 tracking-tight text-base break-words whitespace-pre-line">
                            <Markdown options={markdownOptions}>{output}</Markdown> {/* Rendering markdown with Tailwind CSS styles */}
                        </div>
                    ) : (
                        <>
                            <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-4xl">
                                Введите данные и нажмите "Сгенерировать".
                            </h1>
                            <h2 className="scroll-m-20 text-xl font-bold tracking-tight lg:text-xl">
                                Almaty incubator students
                            </h2>
                            <Image className="rounded-xl" src={Doner} alt="Big doner" width={500} height={300} />
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default LessonPlanGenerator;
