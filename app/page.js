import Button from "@/components/home/Button";
import Image from "next/image";
import img2 from "@/public/fitness.jpg";
import img3 from "@/public/fit-Icon.jpg";
import { PriceList } from "@/components/pricing/PriceList";
import Link from "next/link";

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
          <div className="md:flex justify-evenly w-4/5 h-40 bg-purple-500 rounded-xl">
            <div className="content-center flex items-center gap-4 px-5 text-white">
              <Image src={img3} width={60} alt="Healthy Life" />
              <div>
                <h1 className="text-lg">Healthy Life</h1>
                <p className="text-xs">Maintain a balanced lifestyle with regular exercise and a healthy diet.</p>
              </div>
            </div>
            <div className="content-center flex items-center gap-4 text-white">
              <Image src={img3} width={60} alt="Increased Energy" />
              <div>
                <h1 className="text-lg">Increased Energy</h1>
                <p className="text-xs">Boost your energy levels and stay active throughout the day.</p>
              </div>
            </div>
            <div className="content-center flex items-center gap-4 text-white">
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
          <Image src={img2} height={260} width={500} alt="Fitness" />
        </div>
        <div className="w-1/2 flex flex-col justify-center p-8">
          <h1 className="text-4xl font-serif font-semibold">
            Ready to make a <span className="text-purple-500">change?</span>
          </h1>
          <p className="py-6">
            Join our community and start your journey towards a healthier and happier life. We offer personalized fitness plans, expert guidance, and a supportive environment to help you achieve your goals.
          </p>
          <Button>Join Now</Button>
        </div>
      </div>

      {/* Pricing Plan */}
      <PriceList />

      {/* Success Stories */}
      <div className="py-14 px-16 bg-gray-100">
        <h1 className="text-center text-4xl font-serif font-semibold mb-12">
          Success <span className="text-purple-500">Stories</span>
        </h1>

        
        <div className="md:flex justify-center gap-10">
          {/* Story 1 */}
          <div className="md:w-1/3 p-8 shadow-lg bg-white rounded-xl hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold mb-4">John Doe</h2>
            <p className="text-sm text-gray-700 mb-4">
              <i className="fas fa-quote-left mr-2 text-purple-500"></i>
              "Joining Enrolify has transformed my life. The personalized training plans and supportive community have helped me achieve my fitness goals beyond my expectations."
            </p>
            <p className="text-sm text-purple-500">- Lost 20 lbs in 3 months</p>
          </div>

          {/* Story 2 */}
          <div className="md:w-1/3 p-8 shadow-lg bg-white rounded-xl mt-6 md:mt-0 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold mb-4">Jane Smith</h2>
            <p className="text-sm text-gray-700 mb-4">
              <i className="fas fa-quote-left mr-2 text-purple-500"></i>
              "The trainers at Enrolify are top-notch. They provide the motivation and expertise I needed to push myself and achieve results I never thought possible."
            </p>
            <p className="text-sm text-purple-500">- Improved muscle tone and strength</p>
          </div>

          {/* Story 3 */}
          <div className="md:w-1/3 p-8 shadow-lg bg-white rounded-xl mt-6 md:mt-0 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold mb-4">Sam Wilson</h2>
            <p className="text-sm text-gray-700 mb-4">
              <i className="fas fa-quote-left mr-2 text-purple-500"></i>
              "Thanks to Enrolify, I have a newfound confidence and energy. The community is incredibly supportive, and the facilities are top-of-the-line."
            </p>
            <p className="text-sm text-purple-500">- Increased endurance and vitality</p>
          </div>
        </div>
      </div>


      {/* Featured Classes */}
      <div className="py-10 px-16">
        <h2 className="text-center text-4xl font-serif font-semibold mb-8">
          Featured <span className="text-purple-500">Classes</span>
        </h2>
        <div className="container mx-auto px-6 md:flex gap-10 md:justify-around">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-6 md:mb-0 md:w-1/3">
            <img src="/path-to-class-image1.jpg" alt="Class 1" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Yoga</h3>
              <p className="text-gray-700 mb-4">Improve your flexibility and reduce stress with our expert-led yoga classes.</p>
              <a href="#" className="text-purple-500 hover:underline">Learn more</a>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-6 md:mb-0 md:w-1/3">
            <img src="/path-to-class-image2.jpg" alt="Class 2" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">HIIT</h3>
              <p className="text-gray-700 mb-4">Boost your cardiovascular fitness and burn calories with high-intensity interval training.</p>
              <a href="#" className="text-purple-500 hover:underline">Learn more</a>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-6 md:mb-0 md:w-1/3">
            <img src="/path-to-class-image3.jpg" alt="Class 3" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Zumba</h3>
              <p className="text-gray-700 mb-4">Join the party with fun, dance-based Zumba classes that keep you moving and grooving.</p>
              <a href="#" className="text-purple-500 hover:underline">Learn more</a>
            </div>
          </div>
        </div>
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
