import Button from '@/components/home/Button';
import { PriceList } from '@/components/pricing/PriceList';
import React from 'react';

const page = () => {
  return (
    <div className='mt-16'>
      {/* Pricing Plan */}
      <PriceList/>
    </div>
  );
};

export default page;