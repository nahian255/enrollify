import Button from "@/components/home/Button";
import { Container } from "postcss";


export default function Home() {
  return (
    <div className="px-8">
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
            <div className="content-center">
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

      {/* get start part */}
      <div className="py-10 md:flex md:h-80">
        <div className="bg-orange-200 w-1/2">
          img
        </div>
        <div className="bg-gray-200 w-1/2 content-center px-5" >
          <h1 className="text-3xl pb-5"> Ready to make a change </h1>
          <p className="pb-6"> something is writting hererj jfkj fsdio something is writting hererj jfkj fsdio sjf oasjifsa ijf ojfso jsojf soj f ssomething is writting hererj jfkj fsdio sjf oasjifsa ijf ojfso jsojf soj f s sjf oasjifsa ijf ojfso jsojf soj f s </p>
          <Button></Button>
        </div>
      </div>

      {/*  pricing plan  */}

      <div className=" py-5">
        <h1 className="text-center text-4xl font-serif font-semibold "> Gym <span className="text-purple-500"> pricing</span> Plan</h1>
        <div className="flex justify-center ">
          <p className="text-center text-sm py-5 w-1/2"> Briefly emphasize what sets your gym apart and why each tier offers good value. Focus on the benefits members receive, not just the features. Clearly display the monthly price for each membership tier.</p>
        </div>
        <div className=" py-5">
          <div className="md:flex justify-center gap-5">
            {/* pricing model 1 */}
            <div className="border-solid border-1 shadow-lg shadow-stone-400  rounded-lg md:w-1/4 ">
              <div className="py-5">
                <h1 className="text-center text-2xl font-semibold">Regular member</h1>
                <h3 className="text-center"> <span className="text-2xl font-bold">$50 </span>/mounth</h3>
              </div>
              <hr className="border-t-1 border-purple-300"></hr>
              <div className=" p-7">
                <ul className="list-disc list-inside">
                  <li>Unlimated access to the gym</li>
                  <li>Customer Support</li>
                  <li>Customer Support</li>
                  <li>Customer Support</li>
                  <li>Fesonal trainer</li>
                  <li> 5 Classess per week </li>
                </ul>
              </div>
              <div className="text-center pb-5">
                <Button></Button>
              </div>
            </div>
            {/* pricing model 2 */}
            <div className="border-solid border-1 shadow-lg shadow-stone-400  rounded-lg md:w-1/4 ">
              <div className="py-5 bg-purple-500 rounded-t-lg text-white">
                <h1 className="text-center text-2xl font-semibold">Premium member</h1>
                <h3 className="text-center"> <span className="text-2xl font-bold">$70 </span>/mounth</h3>
              </div>
              <hr></hr>
              <div className=" p-7">
                <ul className="list-disc list-inside">
                  <li>Unlimated access to the gym</li>
                  <li>Customer Support</li>
                  <li>Customer Support</li>
                  <li>Customer Support</li>
                  <li>Fesonal trainer</li>
                  <li> 5 Classess per week </li>
                </ul>
              </div>
              <div className="text-center pb-5">
                <Button></Button>
              </div>
            </div>
            {/* pricing model 3 */}
            <div className="border-solid border-1 shadow-2xl md:w-1/4 ">
              <div className="py-5">
                <h1 className="text-center text-2xl font-semibold">Stander member</h1>
                <h3 className="text-center"> <span className="text-2xl font-bold">$100 </span>/mounth</h3>
              </div>
              <hr className="border-t-1 border-purple-300"></hr>
              <div className=" p-7">
                <ul className="list-disc list-inside">
                  <li>Unlimated access to the gym</li>
                  <li>Customer Support</li>
                  <li>Customer Support</li>
                  <li>Customer Support</li>
                  <li>Fesonal trainer</li>
                  <li> 5 Classess per week </li>
                </ul>
              </div>
              <div className="text-center pb-5">
                <Button></Button>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
}
