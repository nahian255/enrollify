import Button from "@/components/home/Button";
import Image from "next/image";
import img2 from "@/public/runningMan.jpg";
import img3 from "@/public/fit-Icon.jpg";
import img4 from '@/public/Image4.jpg'
import img5 from '@/public/Image5.jpg'
import img6 from '@/public/Image6.jpg'
import { PriceList } from "@/components/pricing/PriceList";
import Link from "next/link";
import SuccessStory from "@/components/home/SuccessStory";
import CourseCard from "@/components/courses/CourseCard";
import FeaturedClasses from "@/components/home/FeaturedClasses";

export default function Home() {
  return (
    <div>

      {/* Header part */}
      <header className="px-16 md:flex gap-10">
        <div className="md:w-1/2  flex flex-col justify-center">
          <h1 className="text-5xl font-serif font-semibold pb-5 ">
            Exercise is the key to a <span className="text-purple-500">healthy</span> lifestyle
          </h1>
          <p className="mb-6 text-lg ">
            Embrace a healthier you with our comprehensive exercise plans tailored to meet your fitness goals.
            Embrace a healthier you with our comprehensive exercise plans tailored to meet your fitness goals.
          </p>
          <Link href={'/course'}> <Button>Get Started</Button>
          </Link>
        </div>
        <div className="md:w-1/2 flex items-center justify-center">
          <Image src={img2} height={400} width={400} alt="Exercise" />
        </div>
      </header>

      {/* Benefits */}
      <div className="mt-20 py-">
        <h1 className="text-center text-4xl font-serif font-semibold">
          Benefits of <span className="text-purple-500">Exercise</span>
        </h1>
        <div className="flex justify-center">
          <p className="text-center text-sm py-5 w-1/2">
            Discover the myriad benefits of regular exercise, from improved mental health to increased physical strength and endurance.
          </p>
        </div>
        <div className="flex justify-center py-">
          <div className="md:flex justify-evenly gap-4 md:w-4/5 md:h-40 bg-purple-500 rounded-xl">
            <div className="content-center flex items-center md:gap-4 gap-10 px-5 text-white">
              <Image src={img3} width={60} alt="Healthy Life" />
              <div>
                <h1 className="text-lg">Healthy Life</h1>
                <p className="text-xs">Maintain a balanced lifestyle with regular exercise and a healthy diet.</p>
              </div>
            </div>
            <div className="content-center flex items-center md:gap-4 gap-10 text-white">
              <Image src={img3} width={60} alt="Increased Energy" />
              <div>
                <h1 className="text-lg">Increased Energy</h1>
                <p className="text-xs">Boost your energy levels and stay active throughout the day.</p>
              </div>
            </div>
            <div className="content-center flex items-center md:gap-4 gap-10 text-white">
              <Image src={img3} width={60} alt="Better Mood" />
              <div>
                <h1 className="text-lg">Better Mood</h1>
                <p className="text-xs">Experience an improved mood and reduced stress through regular workouts.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Get Started */}
      <div className="md:flex px-10 my-14">
        <div className="w-1/2 flex justify-center">
          <Image src={img6} height={260} width={400} alt="Fitness" />
        </div>
        <div className="w-1/2 flex flex-col justify-center p-8">
          <h1 className="text-4xl font-serif font-semibold">
            Ready to make a <span className="text-purple-500">change?</span>
          </h1>
          <p className="py-6">
            Join our community and start your journey towards a healthier and happier life. We offer personalized fitness plans, expert guidance, and a supportive environment to help you achieve your goals.
          </p>
          <Link href={'/course'}> <Button>Join Now</Button> </Link>
        </div>
      </div>

      {/* Pricing Plan */}
      <PriceList />

      {/* Success Stories */}
      <div className="py-14 px-16 bg-gray-100">
        <h1 className="text-center text-4xl font-serif font-semibold mb-12">
          Success <span className="text-purple-500">Stories</span>
        </h1>
        <SuccessStory></SuccessStory>       
      </div>


      {/* Featured Classes */}
      <div className="py-10 px-16">
        <h2 className="text-center text-4xl font-serif font-semibold mb-8">
          Featured <span className="text-purple-500">Classes</span>
        </h2>
        {/* this is show all the top courses  */}
       <FeaturedClasses/>

      </div>

      {/* Scroll to Top Button */}

      <div className="fixed bottom-4 right-4">
        <a
          href="#"
          className="bg-purple-500 text-white p-3 rounded-full shadow-lg flex items-center justify-center hover:bg-purple-700 transition-all"
          title="Scroll to Top"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 15l7-7 7 7"
            />
          </svg>
        </a>
      </div>


      {/* Footer */}
      <footer className="bg-gray-800 text-white py-10">
        <div className="container mx-auto px-6">
          <div className="md:flex md:justify-between">
            <div className="md:w-1/3">
              <h3 className="text-lg font-semibold mb-4">About Enrolify</h3>
              <p className="text-gray-400">Enrolify is dedicated to helping you achieve your fitness goals through personalized plans, expert guidance, and a supportive community.</p>
            </div>
            <div className="md:w-1/3 mt-6 md:mt-0">
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="text-gray-400">
                <li><a href="#" className="hover:underline">Home</a></li>
                <li><a href="#" className="hover:underline">About</a></li>
                <li><a href="#" className="hover:underline">Services</a></li>
                <li><a href="#" className="hover:underline">Contact</a></li>
              </ul>
            </div>
            <div className="md:w-1/3 mt-6 md:mt-0">
              <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
              <p className="text-gray-400">123 Fitness Ave, Wellness City, Healthstate, 45678</p>
              <p className="text-gray-400">Email: info@enrolify.com</p>
              <p className="text-gray-400">Phone: +1 234 567 890</p>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
