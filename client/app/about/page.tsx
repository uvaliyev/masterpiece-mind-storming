"use client"
import React, { useState } from 'react';

const Faq = () => {
    const [faq, setFaq] = useState([
        {
            question: 'Тіркелгіні қалай жасауға болады?',
            answer: 'Біз сіздің деректеріңізді жинағымыз келмейді, сондықтан сайтты пайдалану арқылы сіз қауіпсіз екеніңізге сенімді бола аласыз.',
            open: false
        },
        {
            question: 'Жобаны қалай қолдау керек?',
            answer: 'Жоба әзірлеушінің жеке қаражаты есебінен жүзеге асырылады. VISA картасы 4400 4302 0494 8225. Kaspi: +7 705 875 32 80',
            open: false
        },
        {
            question: 'Әзірлеушімен қалай байланысуға болады?',
            answer: 'Telegram арқылы, <a href="@uvaliyev_a" title="" class="text-blue-600 transition-all duration-200 hover:underline">@uvaliyev_a</a>.',
            open: false
        }
    ]);

    const toggleFaq = (index: number) => {
        setFaq(faq.map((item, i) => {
            if (i === index) {
                item.open = !item.open;
            } else {
                item.open = false;
            }

            return item;
        }));
    }

    return (
        <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Жиі қойылатын сұрақтар</h2>
                    <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">Syllabus AI, - пайдаланушыларға қамқорлық туралы❤️
                    </p>
                </div>

                <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
                    {faq.map((item, index) => (
                        <div key={index} className="transition-all duration-200 bg-white border border-gray-200 cursor-pointer hover:bg-gray-50">
                            <button type="button" className="flex items-center justify-between w-full px-4 py-5 sm:p-6" onClick={() => toggleFaq(index)}>
                                <span className="flex text-lg font-semibold text-black"> {item.question} </span>

                                <svg className={`w-6 h-6 text-gray-400 ${item.open ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            <div className={`${item.open ? 'block' : 'hidden'} px-4 pb-5 sm:px-6 sm:pb-6`}>
                                <p dangerouslySetInnerHTML={{ __html: item.answer }}></p>
                            </div>
                        </div>
                    ))}
                </div>

                <p className="text-center text-gray-600 textbase mt-9">Сұрағыңызға жауап таба алмадыңыз ба? <a href="https://t.me/uvaliyev_a" title="" className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline">Менімен хабарласыңыз</a></p>
            </div>
        </section>
    );
}

export default Faq;