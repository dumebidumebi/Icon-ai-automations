"use client"
import Image from 'next/image'
import Link from 'next/link'
import { Button, buttonVariants } from '@/components/ui/button'
import { SignInButton, SignOutButton } from '@clerk/nextjs'
import React, { useEffect } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import ReactPlayer from 'react-player'

export default function Home() {

  useEffect(() => {
    if (window.chatWidgetScriptLoaded) return;
    window.ChatWidgetConfig = {
      projectId: "65f2485b173b5b62c1edcdee",  
      autoLaunch: true,  
    };
    const chatWidgetScript = document.createElement("script");
    chatWidgetScript.type = 'text/javascript';
    chatWidgetScript.src = "https://storage.googleapis.com/chatwidgetcdn/dist/assets/js/index.js";
    window?.chatWidgetScriptLoaded = true;
    const chatWidgetContainer = document.getElementById("chatwidget-container");
    chatWidgetContainer?.appendChild(chatWidgetScript);
  
  }, []);

  return (
    <>
     <div id="chatwidget-container" className={'mt-8 mb-12'}    style={{width: "100%", height: "100vh;" ,fontFamily: 'Inter, sans-serif',}} />
    
       
      <div className='flex flex-col items-center justify-center mt-35 mb-10'>
        <h1 className='text-center max-w-4xl text-6xl font-bold md:text-6xl lg:text-6xl'>
          <span className='text-blue-600'>Icon AI</span> Automations
        </h1>
      </div>
      <div className='flex flex-col items-center'>
      <div className='mx-auto mb-4  max-w-fit flex items-center justify-center space-x-2 rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50'>
        <p className='text-sm font-semibold text-gray-700'>
          The #1 AI and Automation Agency
        </p>
      </div>
      <Link href='https://calendly.com/icon-ai-automations/30min'>
            <Button variant={"link"}>
            Book a Free Consultation
            </Button>
          </Link>
      </div>
      <div className='flex flex-col items-center justify-center'>
        <p className='text-center max-w-2xl text-l mt-5 mb-10 mx-5'>
          We combine artificial intelligence with automation to create incredibly efficient processes that connect your apps and automate actions between them, which replaces manual work for massive gains in your team’s bandwidth, quality, speed and customer experience. Fully custom and done-for-you.
        </p>
     
        <ReactPlayer url='https://www.youtube.com/watch?v=LXb3EKWsInQ' />     
    
      </div>

      {/* Features section */}
      <div className='mx-auto mb-32 mt-28 max-w-5xl sm:mt-28'>
        <div className=' flex flex-col mb-12 px-6 lg:px-8'>
          <div className=' mx-auto max-w-xl '>
            <h3 className='mt-2 mx-2 font-bold text-3xl text-gray-900 sm:text-4xl text-center'>
              <span className='text-blue-600'>50,000+ Hours </span>of manual work
              Replaced with  <span className='text-blue-600'>AI and Automation</span>
            </h3>
          </div>
          <div className='mt-5 flex justify-center mb-10'>
          <Link href='https://calendly.com/icon-ai-automations/30min'>
            <Button>
            Book a Free Consultation
            </Button>
          </Link>
        </div>
        </div>

        <div className='mx-auto max-w-6xl px-6 lg:px-8'>
          <div className='mt-16 sm:mt-24 flex flex-center'>
            <div className='-m-2 rounded-xl bg-gray-900//5 p-2 lg:-m-4 lg:rounded-2xl '>
              {/* How it works */}
              <h2 className='mt-2 mb-0 font-bold text-center text-4xl'>
                How our AI Automation agency works
              </h2>
              <ol className='my-8 space-y-4 pt-8 md:flex md:space-x-12 md:space-y-0'>
        <li className='md:flex-1 mx-2'>  
          <div className='flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4'>
          <span className='text-xl font-semibold text-blue-600'>Map out your processes</span>
          </div>
        </li>
        <li className='md:flex-1 mx-2'>  
        <div className='flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4'>
          <span className='text-xl font-semibold text-blue-600'>Find areas to add AI and automate</span>
          </div>
        </li>
        <li className='md:flex-1 mx-2'>  
        <div className='flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4'>
          <span className='text-xl font-semibold text-blue-600'>build and test</span>
          </div>
        </li>
        <li className='md:flex-1 mx-2'>  
        <div className='flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4'>
          <span className='text-xl font-semibold text-blue-600'>Manage and iterate</span>
          </div>
        </li>
      </ol>
            </div>
          </div>
        </div>

        {/* Endless use cases section */}
        <div className='mx-auto max-w-6xl px-6 lg:px-8'>
          <div className='mt-16 flow-root sm:mt-24'>
            <div className='-m-2 rounded-xl bg-gray-900//5 p-2  lg:-m-4 lg:rounded-2xl lg:p-4'>
              {/* Endless use cases */}
              <h2 className='mt-2 mb-10 text-center font-bold text-4xl text-gray-900 sm:text-4xl'>
                Endless use cases of AI Automation
              </h2>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>Manage and Nurture inbound leads</AccordionTrigger>
                  <AccordionContent>
                  Implement an AI chatbot trained on your company information, on your website that collects user data and automates appointment bookings. New leads are automatically transferred to your CRM or spreadsheet.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Sales and marketing automation</AccordionTrigger>
                  <AccordionContent>
                  Content creation, full-funnel automation, lead routing, CRM, outbound, payments, contracts and much more. </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Image, voice, text recognition and analysis</AccordionTrigger>
                  <AccordionContent>
                  Analyse and parse documents, biometrics, emotion, facial, products, videos and more to summarise or automate actions based off keywords, identity, sentiment, etc.
                   </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>Predictive analytics</AccordionTrigger>
                  <AccordionContent>
                  Data-driven decision making through risk analytics, demand or inventory forecasting and other future planning tasks.
                 </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>Conversational AI</AccordionTrigger>
                  <AccordionContent>
                  Prompt engineering, automatic replies and more for customer service, sales, chat bots, front-office and marketing.
                 </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                  <AccordionTrigger>Conversational AI</AccordionTrigger>
                  <AccordionContent>
                  Prompt engineering, automatic replies and more for customer service, sales, chat bots, front-office and marketing.
                 </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-7">
                  <AccordionTrigger>Project management</AccordionTrigger>
                  <AccordionContent>
                  We connect all manual, repetitive steps in a process, from task handoff to completion. Such as onboarding, admin, accounting, invoicing.
                 </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-8">
                  <AccordionTrigger>Staff augmentation</AccordionTrigger>
                  <AccordionContent>
                  {`Save employees hours a day by automating their most tedious daily tasks. We've even replaced entire teams of virtual assistants.`}
                 </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-9">
                  <AccordionTrigger>Connect apps</AccordionTrigger>
                  <AccordionContent>
                  Most of your apps can be integrated with each-other for instant handoffs of data and consolidation of information.
                 </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Testimonials section */}
        <div className='mx-auto max-w-6xl px-6 lg:px-8'>
          <div className='mt-16 flow-root sm:mt-24'>
            <div className='-m-2 rounded-xl bg-gray-900//5 p-2  lg:-m-4 lg:rounded-2xl lg:p-4'>
              {/* Testimonials */}
              <h2 className='mt-2 text-center font-bold text-4xl text-gray-900 sm:text-4xl'>
                Our clients achieve operational excellence
              </h2>
              {/* Inserted your provided testimonials here */}
              <ol className='my-8 space-y-4 pt-8 md:flex md:space-x-12 md:space-y-0'>
        <li className='md:flex-1 mx-2'>  
          <div className='flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4'>
          <span className='text-xl font-semibold text-blue-600'>Sarah M.</span>
          <span className='mb-2'>Director, Finance</span>
          <span className='mt-2 text-zinc-700'>{`"Our company was struggling to keep up with the demands of our growing business until we found this automation agency. They helped us streamline our workflow and cut down our workload significantly. We are now able to focus on what matters most to our business, and it has resulted in a noticeable increase in productivity."`}</span>
           </div>
        </li>
        <li className='md:flex-1 mx-2'>  
        <div className='flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4'>
          <span className='text-xl font-semibold text-blue-600'>{`John D.`}</span>
          <span className='mb-2'>CEO</span>
          <span className='mt-2 text-zinc-700'>{`"Our company was struggling to keep up with the demands of our growing business until we found this automation agency. They helped us streamline our workflow and cut down our workload significantly. We are now able to focus on what matters most to our business, and it has resulted in a noticeable increase in productivity."`}</span>
           </div>
        </li>
      </ol>
      <Link href='https://www.linkedin.com/in/chidumebi-nkata-35b454224/'>
            <Button variant={"secondary"}>
            About Us
            </Button>
          </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
