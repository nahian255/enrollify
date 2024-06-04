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
      <div className="bg-orange-200 my-10 md:flex h-80">
        <div className="w-1/2">
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
        <h1 className="text-center text-4xl "> Gym pricing Plan</h1>
        <p className="text-center py-5"> lorem skjdljkkkkks    djkdjksjdskdj kjddj jddddddddddddskjdksjdksj     </p>
        <div className=" py-5 bg-lime-100">
          <div className="md:flex justify-center gap-5">
            <div className="bg-orange-200 h-40 w-1/4 ">
              <h1>Regular member</h1>
            </div>
            <div className="bg-red-100 h-40 w-1/4">
              <h1>Regular member</h1>
            </div>
            <div className="bg-orange-200 h-40 w-1/4">
              <h1>Regular member</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
