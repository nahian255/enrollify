import Button from '@/components/home/Button';
import React from 'react';

const page = () => {
    return (
        <div>
  {/* Pricing Plan */}
  <div className="py-5">
        <h1 className="text-center text-4xl font-serif font-semibold">
          Gym <span className="text-purple-500">Pricing</span> Plan
        </h1>
        <div className="flex justify-center">
          <p className="text-center text-sm py-5 w-1/2">
            Choose the membership plan that fits your needs. Whether you're looking for basic access or comprehensive training and support, we have a plan for you.
          </p>
        </div>
        <div className="py-5">
          <div className="md:flex justify-center gap-5">
            {/* Pricing model 1 */}
            <div className="border-solid border-1 shadow-lg shadow-stone-400 rounded-lg md:w-1/4 hover:scale-105 duration-300 ease-in-out">
              <div className="py-5">
                <h1 className="text-center text-2xl font-semibold">Regular Member</h1>
                <h3 className="text-center">
                  <span className="text-2xl font-bold">$50</span>/month
                </h3>
              </div>
              <hr className="border-t-1 border-purple-300" />
              <div className="p-7">
                <ul className="list-disc list-inside">
                  <li>Unlimited access to the gym</li>
                  <li>Customer Support</li>
                  <li>Access to all classes</li>
                  <li>Locker room access</li>
                  <li>Personal trainer</li>
                  <li>5 Classes per week</li>
                </ul>
              </div>
              <div className="text-center pb-5">
                <Button>Sign Up</Button>
              </div>
            </div>
            {/* Pricing model 2 */}
            <div className="border-solid border-1 shadow-lg shadow-stone-400 rounded-lg md:w-1/4   hover:scale-105 duration-300 ease-in-out">
              <div className="py-5 bg-purple-500 rounded-t-lg text-white">
                <h1 className="text-center text-2xl font-semibold">Premium Member</h1>
                <h3 className="text-center">
                  <span className="text-2xl font-bold">$70</span>/month
                </h3>
              </div>
              <hr />
              <div className="p-7">
                <ul className="list-disc list-inside">
                  <li>Unlimited access to the gym</li>
                  <li>Customer Support</li>
                  <li>Access to all classes</li>
                  <li>Locker room access</li>
                  <li>Personal trainer</li>
                  <li>8 Classes per week</li>
                </ul>
              </div>
              <div className="text-center pb-5">
                <Button>Sign Up</Button>
              </div>
            </div>
            {/* Pricing model 3 */}
            <div className="border-solid border-1 shadow-lg shadow-stone-400 rounded-lg md:w-1/4 hover:scale-105 duration-300 ease-in-out">
              <div className="py-5">
                <h1 className="text-center text-2xl font-semibold">Standard Member</h1>
                <h3 className="text-center">
                  <span className="text-2xl font-bold">$100</span>/month
                </h3>
              </div>
              <hr className="border-t-1 border-purple-300" />
              <div className="p-7">
                <ul className="list-disc list-inside">
                  <li>Unlimited access to the gym</li>
                  <li>Customer Support</li>
                  <li>Access to all classes</li>
                  <li>Locker room access</li>
                  <li>Personal trainer</li>
                  <li>10 Classes per week</li>
                </ul>
              </div>
              <div className="text-center pb-5">
                <Button>Sign Up</Button>
              </div>
            </div>
          </div>
        </div>
      </div>        </div>
    );
};

export default page;