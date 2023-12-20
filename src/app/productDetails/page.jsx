"use client";
import { useState } from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import { RadioGroup } from "@headlessui/react";

const product = {
  name: "Basic crop tops",
  price: "₹192",
  href: "#",
  breadcrumbs: [
    { id: 1, name: "Women", href: "#" },
    { id: 2, name: "Clothing", href: "#" },
  ],
  images: [
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
      alt: "Two each of gray, white, and black shirts laying flat.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg",
      alt: "Model wearing plain black basic tee.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg",
      alt: "Model wearing plain gray basic tee.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg",
      alt: "Model wearing plain white basic tee.",
    },
  ],
  colors: [
    { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
    { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
    { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
  ],
  sizes: [
    { name: "XXS", inStock: false },
    { name: "XS", inStock: true },
    { name: "S", inStock: true },
    { name: "M", inStock: true },
    { name: "L", inStock: true },
    { name: "XL", inStock: true },
    { name: "2XL", inStock: true },
    { name: "3XL", inStock: true },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    "Hand cut and sewn locally",
    "Dyed with our proprietary colors",
    "Pre-washed & pre-shrunk",
    "Ultra-soft 100% cotton",
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
};
const reviews = { href: "#", average: 4, totalCount: 117 };

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function productDetail() {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[2]);

  return (
    // <div className="bg-white">
    //   <div className="pt-6">
    //     <nav aria-label="Breadcrumb">
    //       <ol
    //         role="list"
    //         className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
    //       >
    //         {product.breadcrumbs.map((breadcrumb) => (
    //           <li key={breadcrumb.id}>
    //             <div className="flex items-center">
    //               <a
    //                 href={breadcrumb.href}
    //                 className="mr-2 text-sm font-medium text-gray-900"
    //               >
    //                 {breadcrumb.name}
    //               </a>
    //               <svg
    //                 width={16}
    //                 height={20}
    //                 viewBox="0 0 16 20"
    //                 fill="currentColor"
    //                 aria-hidden="true"
    //                 className="h-5 w-4 text-gray-300"
    //               >
    //                 <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
    //               </svg>
    //             </div>
    //           </li>
    //         ))}
    //         <li className="text-sm">
    //           <a
    //             href={product.href}
    //             aria-current="page"
    //             className="font-medium text-gray-500 hover:text-gray-600"
    //           >
    //             {product.name}
    //           </a>
    //         </li>
    //       </ol>
    //     </nav>

    //     {/* Image gallery */}
    //     <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
    //       {/* <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
    //         <img
    //           src={product.images[0].src}
    //           alt={product.images[0].alt}
    //           className="h-full w-full object-cover object-center"
    //         />
    //       </div>
    //       <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
    //         <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
    //           <img
    //             src={product.images[1].src}
    //             alt={product.images[1].alt}
    //             className="h-full w-full object-cover object-center"
    //           />
    //         </div>
    //         <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
    //           <img
    //             src={product.images[2].src}
    //             alt={product.images[2].alt}
    //             className="h-full w-full object-cover object-center"
    //           />
    //         </div>
    //       </div> */}
    //       <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
    //         <img
    //           src="/download111.jpg"
    //           //   src={product.images[3].src}
    //           //   alt={product.images[3].alt}
    //           className="h-full w-full object-cover object-center"
    //         />
    //       </div>
    //     </div>

    //     {/* Product info */}
    //     <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
    //       <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
    //         <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
    //           {product.name}
    //         </h1>
    //       </div>

    //       {/* Options */}
    //       <div className="mt-4 lg:row-span-3 lg:mt-0">
    //         <h2 className="text-sm title-font text-gray-500 tracking-widest">
    //           ROSH ATTIRES
    //         </h2>
    //         <h1 className="text-gray-900 text-3xl title-font font-medium mb-3 mt-3 ">
    //           Pink Crop Top
    //         </h1>
    //         <h2 className="sr-only">Product information</h2>
    //         <p className="text-3xl tracking-tight text-gray-900 ">
    //           {product.price}
    //         </p>

    //         {/* Reviews */}
    //         <div className="mt-6">
    //           <h3 className="sr-only">Reviews</h3>
    //           <div className="flex items-center">
    //             <div className="flex items-center">
    //               {[0, 1, 2, 3, 4].map((rating) => (
    //                 <StarIcon
    //                   key={rating}
    //                   className={classNames(
    //                     reviews.average > rating
    //                       ? "text-gray-900"
    //                       : "text-gray-200",
    //                     "h-5 w-5 flex-shrink-0"
    //                   )}
    //                   aria-hidden="true"
    //                 />
    //               ))}
    //             </div>
    //             <p className="sr-only">{reviews.average} out of 5 stars</p>
    //             <a
    //               href={reviews.href}
    //               className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
    //             >
    //               {reviews.totalCount} reviews
    //             </a>
    //           </div>
    //         </div>

    //         <form className="mt-10">
    //           {/* Colors */}
    //           <div>
    //             <h3 className="text-sm font-medium text-gray-900">Color</h3>

    //             <RadioGroup
    //               value={selectedColor}
    //               onChange={setSelectedColor}
    //               className="mt-4"
    //             >
    //               <RadioGroup.Label className="sr-only">
    //                 Choose a color
    //               </RadioGroup.Label>
    //               <div className="flex items-center space-x-3">
    //                 {product.colors.map((color) => (
    //                   <RadioGroup.Option
    //                     key={color.name}
    //                     value={color}
    //                     className={({ active, checked }) =>
    //                       classNames(
    //                         color.selectedClass,
    //                         active && checked ? "ring ring-offset-1" : "",
    //                         !active && checked ? "ring-2" : "",
    //                         "relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none"
    //                       )
    //                     }
    //                   >
    //                     <RadioGroup.Label as="span" className="sr-only">
    //                       {color.name}
    //                     </RadioGroup.Label>
    //                     <span
    //                       aria-hidden="true"
    //                       className={classNames(
    //                         color.class,
    //                         "h-8 w-8 rounded-full border border-black border-opacity-10"
    //                       )}
    //                     />
    //                   </RadioGroup.Option>
    //                 ))}
    //               </div>
    //             </RadioGroup>
    //           </div>

    //           {/* Sizes */}
    //           <div className="mt-10">
    //             <div className="flex items-center justify-between">
    //               <h3 className="text-sm font-medium text-gray-900">Size</h3>
    //               <a
    //                 href="#"
    //                 className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
    //               >
    //                 Size guide
    //               </a>
    //             </div>

    //             <RadioGroup
    //               value={selectedSize}
    //               onChange={setSelectedSize}
    //               className="mt-4"
    //             >
    //               <RadioGroup.Label className="sr-only">
    //                 Choose a size
    //               </RadioGroup.Label>
    //               <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
    //                 {product.sizes.map((size) => (
    //                   <RadioGroup.Option
    //                     key={size.name}
    //                     value={size}
    //                     disabled={!size.inStock}
    //                     className={({ active }) =>
    //                       classNames(
    //                         size.inStock
    //                           ? "cursor-pointer bg-white text-gray-900 shadow-sm"
    //                           : "cursor-not-allowed bg-gray-50 text-gray-200",
    //                         active ? "ring-2 ring-indigo-500" : "",
    //                         "group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6"
    //                       )
    //                     }
    //                   >
    //                     {({ active, checked }) => (
    //                       <>
    //                         <RadioGroup.Label as="span">
    //                           {size.name}
    //                         </RadioGroup.Label>
    //                         {size.inStock ? (
    //                           <span
    //                             className={classNames(
    //                               active ? "border" : "border-2",
    //                               checked
    //                                 ? "border-indigo-500"
    //                                 : "border-transparent",
    //                               "pointer-events-none absolute -inset-px rounded-md"
    //                             )}
    //                             aria-hidden="true"
    //                           />
    //                         ) : (
    //                           <span
    //                             aria-hidden="true"
    //                             className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
    //                           >
    //                             <svg
    //                               className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
    //                               viewBox="0 0 100 100"
    //                               preserveAspectRatio="none"
    //                               stroke="currentColor"
    //                             >
    //                               <line
    //                                 x1={0}
    //                                 y1={100}
    //                                 x2={100}
    //                                 y2={0}
    //                                 vectorEffect="non-scaling-stroke"
    //                               />
    //                             </svg>
    //                           </span>
    //                         )}
    //                       </>
    //                     )}
    //                   </RadioGroup.Option>
    //                 ))}
    //               </div>
    //             </RadioGroup>
    //           </div>

    //           <button
    //             type="submit"
    //             className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
    //           >
    //             Add to bag
    //           </button>
    //         </form>
    //       </div>

    //       <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
    //         {/* Description and details */}
    //         <div>
    //           <h3 className="sr-only">Description</h3>

    //           <div className="space-y-6">
    //             <p className="text-base text-gray-900">{product.description}</p>
    //           </div>
    //         </div>

    //         <div className="mt-10">
    //           <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

    //           <div className="mt-4">
    //             <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
    //               {product.highlights.map((highlight) => (
    //                 <li key={highlight} className="text-gray-400">
    //                   <span className="text-gray-600">{highlight}</span>
    //                 </li>
    //               ))}
    //             </ul>
    //           </div>
    //         </div>

    //         <div className="mt-10">
    //           <h2 className="text-sm font-medium text-gray-900">Details</h2>

    //           <div className="mt-4 space-y-6">
    //             <p className="text-sm text-gray-600">{product.details}</p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div>
      <section className="py-20 overflow-hidden bg-white font-poppins dark:bg-gray-800">
        <div className="max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4 md:w-1/2 ">
              <div className="sticky top-0 z-50 overflow-hidden ">
                <div
                  className="relative mb-6 lg:mb-10"
                  style={{ height: "450px" }}
                >
                  <img
                    src="/download111.jpg"
                    alt=""
                    className="object-contain w-full h-full "
                  />
                </div>
                <div className="flex-wrap hidden md:flex justify-center items-center  ">
                  <div className="w-1/2 p-2 sm:w-1/4">
                    <a
                      href="#"
                      className="block border border-blue-100 dark:border-gray-700 dark:hover:border-gray-600 hover:border-blue-300 "
                    >
                      <img
                        src="/download111.jpg"
                        alt=""
                        className="object-cover w-full lg:h-32"
                      />
                    </a>
                  </div>
                  <div className="w-1/2 p-2 sm:w-1/4">
                    <a
                      href="#"
                      className="block border border-blue-100 dark:border-transparent dark:hover:border-gray-600 hover:border-blue-300"
                    >
                      <img
                        src="/download111.jpg"
                        alt=""
                        className="object-cover w-full lg:h-32"
                      />
                    </a>
                  </div>
                  <div className="w-1/2 p-2 sm:w-1/4">
                    <a
                      href="#"
                      className="block border border-blue-100 dark:border-transparent dark:hover:border-gray-600 hover:border-blue-300"
                    >
                      <img
                        src="/download111.jpg"
                        alt=""
                        className="object-cover w-full lg:h-32"
                      />
                    </a>
                  </div>
                  {/* <div className="w-1/2 p-2 sm:w-1/4">
                    <a
                      href="#"
                      className="block border border-blue-100 dark:border-transparent dark:hover:border-gray-600 hover:border-blue-300"
                    >
                      <img
                           src="/download111.jpg"
                        alt=""
                        className="object-cover w-full lg:h-32"
                      />
                    </a>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 ">
              <div className="lg:pl-20">
                <div className="pb-6 mb-8 border-b border-gray-200 dark:border-gray-700">
                  <span className="text-lg font-medium text-gray-500 dark:text-rose-200 font-serif">
                    ROSH ATTIRES
                  </span>
                  <h2 className="max-w-xl mt-2 mb-6 text-xl font-bold dark:text-gray-300 md:text-4xl font-serif">
                    Pink crop top
                  </h2>
                  <div className="flex flex-wrap items-center mb-6">
                    <ul className="flex mb-4 mr-2 lg:mb-0">
                      <li>
                        <a href="#">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star "
                            viewBox="0 0 16 16"
                          >
                            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star "
                            viewBox="0 0 16 16"
                          >
                            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star "
                            viewBox="0 0 16 16"
                          >
                            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star "
                            viewBox="0 0 16 16"
                          >
                            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                          </svg>
                        </a>
                      </li>
                    </ul>
                    <a
                      className="mb-4 text-xs underline dark:text-gray-400 dark:hover:text-gray-300 lg:mb-0 font-serif"
                      href="#"
                    >
                      Be the first to review the product
                    </a>
                  </div>
                  <p className="max-w-md mb-8 text-gray-700 dark:text-gray-400 font-serif">
                    Lorem ispum dor amet Lorem ispum dor amet Lorem ispum dor
                    amet Lorem ispum dor amet Lorem ispum dor amet Lorem ispum
                    dor amet Lorem ispum dor amet Lorem ispum dor amet
                  </p>
                  {/* <div className="p-4 mb-8 border border-gray-300 dark:border-gray-700">
                    <h2 className="mb-4 text-xl font-semibold dark:text-gray-400">
                      Real time{" "}
                      <span className="px-2 bg-blue-500 text-gray-50">26</span>
                      visitors right now!{" "}
                    </h2>
                    <div className="mb-1 text-xs font-medium text-gray-700 dark:text-gray-400">
                      Hurry up! left 23 in Stock
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5  dark:bg-gray-600">
                      <div
                        className="bg-blue-600 dark:bg-blue-400 h-2.5 rounded-full"
                        style={{ width: "45% " }}
                      ></div>
                    </div>
                  </div> */}
                  <p className="inline-block text-2xl font-semibold text-gray-700 dark:text-gray-400 font-sans ">
                    <span>$994.00</span>
                    <span className="text-base font-normal text-gray-500 line-through dark:text-gray-400 font-sans">
                      $1500.00
                    </span>
                  </p>
                </div>
                <form className="mt-10">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">Color</h3>

                    <RadioGroup
                      value={selectedColor}
                      onChange={setSelectedColor}
                      className="mt-4"
                    >
                      <RadioGroup.Label className="sr-only font-serif ">
                        Choose a color
                      </RadioGroup.Label>
                      <div className="flex items-center space-x-3">
                        {product.colors.map((color) => (
                          <RadioGroup.Option
                            key={color.name}
                            value={color}
                            className={({ active, checked }) =>
                              classNames(
                                color.selectedClass,
                                active && checked ? "ring ring-offset-1" : "",
                                !active && checked ? "ring-2" : "",
                                "relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none"
                              )
                            }
                          >
                            <RadioGroup.Label as="span" className="sr-only">
                              {color.name}
                            </RadioGroup.Label>
                            <span
                              aria-hidden="true"
                              className={classNames(
                                color.class,
                                "h-8 w-8 rounded-full border border-black border-opacity-10"
                              )}
                            />
                          </RadioGroup.Option>
                        ))}
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="mt-10">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-medium text-gray-900 font-serif">
                        Size
                      </h3>
                      <a
                        href="#"
                        className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Size guide
                      </a>
                    </div>

                    <RadioGroup
                      value={selectedSize}
                      onChange={setSelectedSize}
                      className="mt-4"
                    >
                      <RadioGroup.Label className="sr-only font-serif">
                        Choose a size
                      </RadioGroup.Label>
                      <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                        {product.sizes.map((size) => (
                          <RadioGroup.Option
                            key={size.name}
                            value={size}
                            disabled={!size.inStock}
                            className={({ active }) =>
                              classNames(
                                size.inStock
                                  ? "cursor-pointer bg-white text-gray-900 shadow-sm"
                                  : "cursor-not-allowed bg-gray-50 text-gray-200",
                                active ? "ring-2 ring-indigo-500" : "",
                                "group relative flex items-center justify-center border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 rounded-full"
                              )
                            }
                          >
                            {({ active, checked }) => (
                              <>
                                <RadioGroup.Label as="span">
                                  {size.name}
                                </RadioGroup.Label>
                                {size.inStock ? (
                                  <span
                                    className={classNames(
                                      active ? "border" : "border-2",
                                      checked
                                        ? "border-indigo-500"
                                        : "border-transparent",
                                      "pointer-events-none absolute -inset-px rounded-full"
                                    )}
                                    aria-hidden="true"
                                  />
                                ) : (
                                  <span
                                    aria-hidden="true"
                                    className="pointer-events-none absolute -inset-px rounded-full border-2 border-gray-200"
                                  >
                                    <svg
                                      className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                      viewBox="0 0 100 100"
                                      preserveAspectRatio="none"
                                      stroke="currentColor"
                                    >
                                      <line
                                        x1={0}
                                        y1={100}
                                        x2={100}
                                        y2={0}
                                        vectorEffect="non-scaling-stroke"
                                      />
                                    </svg>
                                  </span>
                                )}
                              </>
                            )}
                          </RadioGroup.Option>
                        ))}
                      </div>
                    </RadioGroup>

                    {/* <div className="pb-6 mb-8 mt-4 border-b border-gray-300 dark:border-gray-700">
                            
                            <div className="flex flex-wrap -mb-2">
                                <button
                                    className="py-1 mb-2 mr-1 border w-11 hover:border-blue-400 dark:border-gray-400 hover:text-blue-600 dark:hover:border-gray-300 dark:text-gray-400">XL
                                </button>
                                <button
                                    className="py-1 mb-2 mr-1 border w-11 hover:border-blue-400 hover:text-blue-600 dark:border-gray-400 dark:hover:border-gray-300 dark:text-gray-400">S
                                </button>
                                <button
                                    className="py-1 mb-2 mr-1 border w-11 hover:border-blue-400 hover:text-blue-600 dark:border-gray-400 dark:hover:border-gray-300 dark:text-gray-400">M
                                </button>
                                <button
                                    className="py-1 mb-2 mr-1 border w-11 hover:border-blue-400 hover:text-blue-600 dark:border-gray-400 dark:hover:border-gray-300 dark:text-gray-400">XS
                                </button>
                            </div>
                        </div> */}
                  </div>
                </form>
                {/* <div className="flex flex-wrap items-center ">
                  <div className="mb-4 mr-4 lg:mb-0">
                    <div className="w-28">
                      <div className="relative flex flex-row w-full h-10 bg-transparent rounded-lg">
                        <button className="w-20 h-full text-gray-600 bg-gray-100 border-r rounded-l outline-none cursor-pointer dark:border-gray-700 dark:hover:bg-gray-700 dark:text-gray-400 hover:text-gray-700 dark:bg-gray-900 hover:bg-gray-300">
                          <span className="m-auto text-2xl font-thin">-</span>
                        </button>
                        <input
                          type="number"
                          className="flex items-center w-full font-semibold text-center text-gray-700 placeholder-gray-700 bg-gray-100 outline-none dark:text-gray-400 dark:placeholder-gray-400 dark:bg-gray-900 focus:outline-none text-md hover:text-black"
                          placeholder="1"
                        />
                        <button className="w-20 h-full text-gray-600 bg-gray-100 border-l rounded-r outline-none cursor-pointer dark:border-gray-700 dark:hover:bg-gray-700 dark:text-gray-400 dark:bg-gray-900 hover:text-gray-700 hover:bg-gray-300">
                          <span className="m-auto text-2xl font-thin">+</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="mb-4 mr-4 lg:mb-0">
                    <button className="w-full h-10 p-2 mr-4 bg-blue-500 dark:text-gray-200 text-gray-50 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-500">
                      Buy Now
                    </button>
                  </div>
                  <div className="mb-4 mr-4 lg:mb-0">
                    <button className="flex items-center justify-center w-full h-10 p-2 text-gray-700 border border-gray-300 lg:w-11 hover:text-gray-50 dark:text-gray-200 dark:border-blue-600 hover:bg-blue-600 hover:border-blue-600 dark:bg-blue-600 dark:hover:bg-blue-500 dark:hover:border-blue-500 dark:hover:text-gray-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-cart"
                        viewBox="0 0 16 16"
                      >
                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                      </svg>
                    </button>
                  </div>
                  <div className="mb-4 lg:mb-0">
                    <button className="flex items-center justify-center w-full h-10 p-2 text-gray-700 border border-gray-300 lg:w-11 hover:text-gray-50 dark:text-gray-200 dark:border-blue-600 hover:bg-blue-600 hover:border-blue-600 dark:bg-blue-600 dark:hover:bg-blue-500 dark:hover:border-blue-500 dark:hover:text-gray-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className=" bi bi-heart"
                        viewBox="0 0 16 16"
                      >
                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                      </svg>
                    </button>
                  </div>
                </div> */}
                <div className="w-32 mb-8 mt-6">
                  <label
                    for=""
                    className="w-full text-md  text-gray-700 dark:text-gray-400 font-serif"
                  >
                    Quantity
                  </label>
                  <div className="relative flex flex-row w-full h-10 mt-4 bg-transparent rounded-lg">
                    <button className="w-20 h-full text-gray-600 bg-gray-300 rounded-l outline-none cursor-pointer dark:hover:bg-gray-700 dark:text-gray-400 hover:text-gray-700 dark:bg-gray-900 hover:bg-gray-400">
                      <span className="m-auto text-2xl font-thin">-</span>
                    </button>
                    <input
                      type="number"
                      className="flex items-center w-full font-semibold text-center text-gray-700 placeholder-gray-700 bg-gray-300 outline-none dark:text-gray-400 dark:placeholder-gray-400 dark:bg-gray-900 focus:outline-none text-md hover:text-black"
                      placeholder="1"
                    />
                    <button className="w-20 h-full text-gray-600 bg-gray-300 rounded-r outline-none cursor-pointer dark:hover:bg-gray-700 dark:text-gray-400 dark:bg-gray-900 hover:text-gray-700 hover:bg-gray-400">
                      <span className="m-auto text-2xl font-thin">+</span>
                    </button>
                  </div>
                </div>
                <div className="flex flex-wrap items-center -mx-4 ">
                  <div className="w-full px-4 mb-4 lg:w-full lg:mb-0">
                    <button className="flex items-center justify-center  font-serif w-full p-4 text-red-500 border border-rose-500 rounded-md dark:text-gray-200 dark:border-rose-600 hover:bg-[#471c48] hover:border-rose-600 hover:text-gray-100 dark:bg-rose-600 dark:hover:bg-rose-700 dark:hover:border-rose-700 dark:hover:text-gray-300">
                      Add to Cart
                    </button>
                  </div>
                  {/* <div className="w-full px-4 mb-4 lg:mb-0 lg:w-1/2">
                    <button className="flex items-center justify-center w-full p-4 text-red-500 border border-red-500 rounded-md dark:text-gray-200 dark:border-red-600 hover:bg-red-600 hover:border-red-600 hover:text-gray-100 dark:bg-red-600 dark:hover:bg-red-700 dark:hover:border-red-700 dark:hover:text-gray-300">
                      Add to wishlist
                    </button>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
