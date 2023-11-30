
import { useState, RefObject, useEffect } from "react";
import { mainProject, otherProject, product } from "../types"

export const navCol: {name:string, to:string}[] = [
    {name:'Home', to: 'home'},
    {name:'About', to: 'about'},
    {name:'Projects', to: 'projects'},
    {name:'Contact', to: 'contact'}
]

export const mainProjects: mainProject[] = [
    {
        title: 'TechStop(eccomerce website)',
        image: 'shopping.png',
        detail: 'A MERN-based E-commerce website.',
        experience: ['Implemented Google OAuth and user authentication through MongoDb','Deployed an admin page directly connected to the mongoDB backend to update , delete and manipulate the data'],
        code:'https://github.com/tewodrosAe/Shopping_App',
        live: 'https://tech-stop.vercel.app/',
        stack: 'mern'
    },
    {
        title: 'GMusic(Music streaming website)',
        image: 'music.png',
        detail: 'My first complete website using Html,Css and Flask.',
        experience: ['Worked with flask as backend using a sql database capable of user authentication and media management','Created a dynamic page by integrating python into html using the Jinja templating engine'],
        code:'https://github.com/tewodrosAe/Music_Uploading_App',
        live: 'https://gmusic.onrender.com',
        stack: 'flask'
    },
    {
        title: 'IShowey(Movie streaming website)',
        image: 'stream.png',
        detail: 'A React streaming website using TMDB and autoembeded API for media retrieval.',
        experience: ['Working with external APIs has given me the practical experience in working with RESTful APIs','Media handling from a third party website through manipulation of API datas'],
        code:'https://github.com/tewodrosAe/Streaming_App',
        live: 'https://ishowey.vercel.app/',
        stack: 'mern'
    },
]
export const otherProjects: otherProject[] = [
    {
        title: 'Inpost',
        image: '/image.png',
        code:'https://github.com/tewodrosAe/Image_Sharing_App',
        detail: 'A web app for discovering and organizing inspiring images capable of seamless content management, board creation, and pin saving',
        stack: ['React','NodeJs','Sanity','tailwindcss']
    },
    {
        title: 'CarHub',
        image: '/car.png',
        code:'https://github.com/tewodrosAe/Car_Showcase_App',
        detail: 'A website that gives full specifications and showcase the different models and specific types of cars',
        stack: ['Next']
    },
    {
        title: 'Workout Buddy',
        image: '/workout.png',
        code:'https://github.com/tewodrosAe/Workout_Tracker',
        detail: 'A web application designed to help users track and manage their fitness routines. ',
        stack: ['MongoDB','Express','React','NodeJs']
    },
    {
        title: 'Twitty',
        image: '/socialmedia.png',
        code:'https://github.com/tewodrosAe/Social_Media_App',
        detail: 'The Twitter clone is a dynamic web application that replicates the core functionalities of the popular social media platform. ',
        stack: ['MongoDB','Express','React', 'socket.io']
    },
    {
        title: 'TaskRead',
        image: '/todo.png',
        code:'https://github.com/tewodrosAe/taskTracker',
        detail: 'A web application created to help users Maintain their daily Tasks.',
        stack: ['MongoDB','Express','React','NodeJs']
    },
    {
        title: '*Photo Editing Website*',
        image: '/comingsoon.png',
        code:'https://github.com/tewodrosAe/Image_Editing_App',
        detail: 'A web application used to make filters for images/photos that the user provides',
        stack: ['Next']
    },
]
export const skills =[
    "Next.Js",
    "React",
    "Node.Js",
    "MongoDB > Mongoose",
    "Express",
    "Python > Flask"
]

export const prod: product[] = [
    {
        name: 'Techstop',
        url: 'https://ceblog.s3.amazonaws.com/wp-content/uploads/2021/03/10114044/image2-8.png',
        techstack: ['React', 'NodeJs', 'Express']
    },
    {
        name: 'Techstop',
        url: 'https://ceblog.s3.amazonaws.com/wp-content/uploads/2021/03/10114044/image2-8.png',
        techstack: ['React', 'NodeJs', 'Express']
    },
    {
        name: 'Techstop',
        url: 'https://ceblog.s3.amazonaws.com/wp-content/uploads/2021/03/10114044/image2-8.png',
        techstack: ['React', 'NodeJs', 'Express']
    },    
    {
        name: 'Techstop',
        url: 'https://ceblog.s3.amazonaws.com/wp-content/uploads/2021/03/10114044/image2-8.png',
        techstack: ['React', 'NodeJs', 'Express']
    }
]



export function useFollowPointer(ref: RefObject<HTMLElement>) {
  const [point, setPoint] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!ref.current) return;

    const handlePointerMove = ({ clientX, clientY }: MouseEvent) => {
      const element = ref.current!;

      const x = clientX - element.offsetLeft - element.offsetWidth / 2;
      const y = clientY - element.offsetTop - element.offsetHeight / 2;
      setPoint({ x, y });
    };

    window.addEventListener("pointermove", handlePointerMove);

    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  return point;
}

