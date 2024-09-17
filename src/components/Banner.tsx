// importing google font for NextJS
import { Griffy } from 'next/font/google';
const griffy = Griffy({weight: "400", subsets: ['latin']});

export default function Banner() {
    return (
        <div className="flex flex-nowrap items-center justify-center 
          bg-accent bg-[url('./../lib/images/background.jpg')] bg-no-repeat bg-center bg-cover
          border-solid border-b-4 border-accent min-h-[220px] p-5 text-white">

        <header className="grow text-center md:text-left">
          <div className={`${griffy.className} text-6xl`}>Antonio&apos;s Online Pizzaria</div>
          <div className="text-sm">If it&apos;s not Antonio&apos;s, it&apos;s rubbish!</div>
        </header>

        <div className="hidden md:block">
          <i className="fab fa-facebook-square fa-2x ml-1"></i>
          <i className="fab fa-twitter-square fa-2x ml-1"></i>
          <i className="fab fa-instagram fa-2x ml-1"></i>
        </div>
      </div>
    );
}