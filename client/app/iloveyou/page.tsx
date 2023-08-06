"use client"
import React, { useState } from "react";
import Image from 'next/image'
import axios from "axios";
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@radix-ui/react-label';
import { Input } from '@/components/ui/input';
import Doner from "/public/teach-hero.png"
import Markdown from 'markdown-to-jsx';

const Page = () => {
    const [lessonTopic, setLessonTopic] = useState("");
    const [studentClass, setStudentClass] = useState("");
    const [description, setDescription] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [output, setOutput] = useState("");

    const handleSubmit = async () => {
        setIsLoading(true);
        setOutput("");

        const question = `Өзіңізді мұғалім ретінде елестетіп көріңіз, ТАҚЫРЫП: [${lessonTopic}] СТУДЕНТ СЫНЫПЫ: [${studentClass}] бойынша сабақ жоспарын жазыңыз, толығырақ: ${description}. Сабақ тақырыбы немесе студенттік сынып орыс тілінде берілсе, ЖОСПАРЫҢЫЗДЫ АҒЫЛШЫН ТІЛІНДЕ ЕМЕС, ОРЫС ТІЛІНДЕ ЖАЗУ КЕРЕК. Markdown пайдаланыңыз.
        `;
        try {
            const result = await axios.post('https://api.tyan.by/app/api', { question });
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
        <>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 space-x-8 mx-auto max-w-4xl p-4">
                <div className="w-full md:w-2/5 md:items-center">
                    <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-4xl">
                        Сабақ жоспарын құру (БЕТА)
                    </h1>
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="lessonTopic">Сабақтың атауы</Label>
                        <Input type="text" id="lessonTopic" value={lessonTopic} onChange={e => setLessonTopic(e.target.value)} placeholder="Топология" />
                    </div>
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="studentClass">Оқушыларының сыныбы</Label>
                        <Input type="text" id="studentClass" value={studentClass} onChange={e => setStudentClass(e.target.value)} placeholder="8-й класс" />
                    </div>
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="description">Сабақтың сипаттамасы</Label>
                        <Textarea value={description} onChange={e => setDescription(e.target.value)} placeholder="Ашық жиынтықтар, жинақылық." />
                    </div>

                    <Button onClick={handleSubmit} >{isLoading ? 'Генерация процесінде...' : 'Уақытты үнемдеу '}</Button> {/* Escaped the quotes */}
                </div>
                <div className="w-full md:w-3/5 md:items-center">
                    <div className='space-y-4'>
                        {isLoading ? (
                            <>
                                Жасалуда...
                            </>
                        ) : output ? (
                            <div className="scroll-m-20 tracking-tight text-base break-words whitespace-pre-line">
                                <Markdown options={markdownOptions}>{output}</Markdown> {/* Rendering markdown with Tailwind CSS styles */}
                            </div>
                        ) : (
                            <>
                                <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-4xl">
                                    Деректерді енгізіп, «Жасау» түймесін басыңыз.
                                </h1>
                                <h2 className="scroll-m-20 text-xl font-bold tracking-tight lg:text-xl">
                                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">Syllabus AI</span> қалай пайдалануға болады?
                                </h2>
                                Сізге енгізу керек:
                                <ul>
                                    <li>• Сабақтың тақырыбы</li>
                                    <li>• Жас санаты</li>
                                </ul>Одан кейін арнайы талаптарды қосуға немесе шығармашылық өрісті ашық қалдыруға болады. 💫Және воила!💫 Сабағың дайын.
                                <Image className="rounded-xl" src={Doner} alt="Big doner" width={500} height={300} />
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Page;
