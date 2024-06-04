import Button from "@/components/home/Button";
import { Container } from "postcss";


export default function Home() {
  return (
    <div>
      {/* Header part  */}
     <header className=" md:flex ">
       <div className=" md:w-1/2 h-96 bg-red-100 content-center justify-items-center">
          <h1 className="text-3xl">exercise is the key to a healthy lifestyle</h1>
          <p> somethig is writting here. yes kfskj skjfoouj  jdjfs</p>
          <Button></Button>
       </div>
       <div className="w-1/2 content-center">
        img
       </div>
     </header>

     {/*  benefits */}
     <div className="bg-green-200 my-10">
        <h1 className="text-center text-4xl "> Benefits of exercise</h1>
        <p className="text-center "> lorem skjdljkkkkks       djkdjksjdskdj kjddj jddddddddddddskjdksjdksj     </p>
        <div className="flex justify-center py-5">     
        <div className=" md:flex justify-evenly w-1/2 h-40 bg-purple-400"> 
          <div className="content-center"> 
             <h1> img </h1>
             <div>
              <h1> Healthy Life </h1>
             </div>
          </div>
          <div  className="content-center"> 
             <h1> img </h1>
             <div>
              <h1> Healthy Life </h1>
             </div>
          </div>
          <div className="content-center"> 
             <h1> img </h1>
             <div>
              <h1> Healthy Life </h1>
             </div>
          </div>
        </div>
        </div>
     </div>
       
    </div>
  );
}
