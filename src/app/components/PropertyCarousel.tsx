import * as React from "react"
//import { Card, CardContent } from "@/components/ui/card"
import PropertyCard,{Property} from './PropertyCard';
import Autoplay from "embla-carousel-autoplay"

function seeMore(){

}

export function Example() {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 10000,
        }),
      ]}
    >
      // ...
    </Carousel>
  )
}

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
const allProperties = [
    { id: 1, type: 'House', location: 'Sandton', beds: 4, baths: 3, parking: 2, price: 4500000, image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=800&auto=format&fit=crop' },
    { id: 2, type: 'Apartment', location: 'Cape Town', beds: 2, baths: 2, parking: 1, price: 3200000, image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=800&auto=format&fit=crop' },
    { id: 3, type: 'Townhouse', location: 'Pretoria', beds: 3, baths: 2, parking: 2, price: 2100000, image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop' },
    { id: 4, type: 'House', location: 'Durban', beds: 5, baths: 4, parking: 3, price: 6800000, image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=800&auto=format&fit=crop' },
    { id: 5, type: 'Apartment', location: 'Sandton', beds: 1, baths: 1, parking: 1, price: 1850000, image: 'https://images.unsplash.com/photo-1493809842344-ab5a42a16a9a?q=80&w=800&auto=format&fit=crop' },
    { id: 6, type: 'House', location: 'Stellenbosch', beds: 3, baths: 2, parking: 2, price: 3950000, image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop' },
    { id: 7, type: 'Apartment', location: 'Pretoria', beds: 2, baths: 1, parking: 1, price: 1300000, image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop' },
    { id: 8, type: 'Townhouse', location: 'Cape Town', beds: 2, baths: 2, parking: 1, price: 2750000, image: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?q=80&w=800&auto=format&fit=crop' },
    { id: 9, type: 'House', location: 'Sandton', beds: 6, baths: 5, parking: 4, price: 12500000, image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=800&auto=format&fit=crop' },
    { id: 10, type: 'Apartment', location: 'Durban', beds: 3, baths: 2, parking: 2, price: 2400000, image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=800&auto=format&fit=crop' },
    { id: 11, type: 'House', location: 'Constantia', beds: 4, baths: 4, parking: 3, price: 8900000, image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=800&auto=format&fit=crop' },
    { id: 12, type: 'Townhouse', location: 'Midrand', beds: 3, baths: 2, parking: 2, price: 1950000, image: 'https://images.unsplash.com/photo-1628744448845-51ae4a434468?q=80&w=800&auto=format&fit=crop' },
];


export function CarouselSize() {
  return (
    <>
    <div className="h-50"/>
     <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Featured Properties For Sale</h2>
        <p className="text-slate-500  mt-2 max-w-xl mx-auto">Discover our curated selection of premium properties in the most sought-after locations.</p>
      </div>
    <div className="flex flex-row items-center justify-center  ">

    <Carousel
      opts={{
        align: "start",
        loop: true,
        
      }}
            plugins={[
        Autoplay({
          delay: 3000,
          
        }),
      ]}
      className="w-[90vw] "
    >
      <CarouselContent>
        {allProperties.map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">

                                { <PropertyCard key={allProperties[index].id} property={allProperties[index]} />}

            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    </div>
                <div className="text-center mt-12">
              <button onClick={seeMore} className="bg-[#14449c] text-white px-8 py-3 rounded-lg hover:bg-[#ff9138] transition-colors font-semibold"> More</button>
            </div>
    </>
  )
}
