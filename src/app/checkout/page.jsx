import React from "react";

function page() {
  return (
    <div className="flex justify-center items-center">
      <div class="container mx-auto relative px-6 pt-8 sm:px-16 sm:pt-10 lg:px-32 lg:pt-12">
        <h1 class="text-4xl font-bold mb-4 px-3">Checkout</h1>
        <div class="block md:flex mb-3 p-3">
          <div class="lg:max-w-sm sm:order-last mb-10 lg:mb-0 md:ml-10 lg:ml-24 p-4 sm:p-6 bg-gray-200 fit-content-height rounded-2xl">
            <div class="grid grid-cols-1 gap-8">
              <div class="flex">
                <div class="w-1/3">
                  <img
                    class="object-cover rounded-lg overflow-hidden"
                    src="/download2.jpg"
                    alt="vintage bag"
                  />
                </div>
                <div class="flex flex-col justify-between w-2/3 pl-6">
                  <div class="">
                    <h4 class="text-xl lg:text-2xl text-gray-700 font-semibold leading-none">
                      Vintage Backbag
                    </h4>
                    <p class="whitespace-no-wrap">
                      <span class="text-lg text-orange-400 font-semibold">
                        $54.99
                      </span>
                      <span class="ml-2 lg:ml-4 text-base text-gray-700 font-semibold line-through">
                        $94.99
                      </span>
                    </p>
                  </div>

                  <div class="flex items-center p-1 rounded-lg border border-gray-800 fit-content ">
                    <button class="flex items-center p-1 bg-gray-300 rounded-lg">
                      <i class="material-icons md-18 text-gray-600">remove</i>
                    </button>
                    <span class="mx-4 lg:mx-8 font-bold text-xl">1</span>
                    <button class="flex items-center p-1 bg-gray-300 rounded-lg">
                      <i class="material-icons md-18 text-gray-600">add</i>
                    </button>
                  </div>
                </div>
              </div>

              <div class="flex">
                <div class="w-1/3">
                  <img
                    class="object-cover rounded-lg overflow-hidden"
                    src="/download2.jpg"
                    alt="vintage bag"
                  />
                </div>
                <div class="flex flex-col justify-between w-2/3 px-6">
                  <div class="">
                    <h4 class="text-xl lg:text-2xl text-gray-700 font-semibold leading-none">
                      Levi Shoes
                    </h4>
                    <p class="">
                      <span class="text-lg text-orange-400 font-semibold">
                        $74.99
                      </span>
                      <span class="ml-2 lg:ml-4 text-base text-gray-700 font-semibold line-through">
                        $124.99
                      </span>
                    </p>
                  </div>

                  <div class="flex items-center p-1 rounded-lg border border-gray-800 fit-content ">
                    <button class="flex items-center p-1 bg-gray-300 rounded-lg">
                      <i class="material-icons md-18 text-gray-600">remove</i>
                    </button>
                    <span class="mx-4 lg:mx-8 font-bold text-xl">1</span>
                    <button class="flex items-center p-1 bg-gray-300 rounded-lg">
                      <i class="material-icons md-18 text-gray-600">add</i>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div class="mt-20">
              <div class="flex items-center justify-between border-t-2 py-2">
                <span class="font-bold text-gray-800 text-2xl">Shipping</span>
                <span class="font-bold text-gray-800 text-lg">$19</span>
              </div>
              <div class="flex items-center justify-between border-t-2 py-2">
                <span class="font-bold text-gray-800 text-2xl">Total</span>
                <span class="font-bold text-gray-800 text-lg">$148.98</span>
              </div>
            </div>
          </div>

          <div class="max-w-4xl mr-5 lg:mr-10">
            <form name="checkoutForm" onsubmit="return validate()">
              <h3 class="text-lg font-bold mb-3">Contact information</h3>
              <div class="relative mb-4">
                <label class="block text-gray-700 text-sm font-semibold mb-2">
                  Email
                </label>
                <input
                  class="shadow appearance-none border rounded-lg w-full py-3 px-8 text-gray-700  border-gray-800 focus:outline-none focus:shadow-outline font-semibold"
                  id="email"
                  type="email"
                  placeholder="Enter your email..."
                  required
                />
              </div>
              <div class="relative mb-10">
                <label
                  class="block text-gray-700 text-sm font-semibold mb-2"
                  for="email"
                >
                  Phone
                </label>
                <input
                  class="shadow appearance-none border rounded-lg w-full py-3 px-8 text-gray-700 leading-tight border-gray-800 focus:outline-none focus:shadow-outline font-semibold"
                  id="phone"
                  type="number"
                  placeholder="Enter your phone..."
                  required
                />
              </div>

              <h3 class="text-lg font-bold mt-2 mb-3">Shipping address</h3>
              <div class="relative mb-4">
                <label
                  class="block text-gray-700 text-sm font-semibold mb-2"
                  for="name"
                >
                  Full name
                </label>
                <input
                  class="shadow appearance-none border rounded-lg w-full py-3 px-8 text-gray-700 leading-tight border-gray-800 focus:outline-none focus:shadow-outline placeholder-gray-500 font-semibold"
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div class="relative mb-4">
                <label
                  class="block text-gray-700 text-sm font-semibold mb-2"
                  for="address"
                >
                  Address
                </label>
                <input
                  class="shadow appearance-none border rounded-lg w-full py-3 px-8 text-gray-700 leading-tight border-gray-800 focus:outline-none focus:shadow-outline placeholder-gray-500 font-semibold"
                  id="address"
                  type="text"
                  placeholder="Your address..."
                  required
                />
              </div>
              <div class="relative mb-4">
                <label
                  class="block text-gray-700 text-sm font-semibold mb-2"
                  for="city"
                >
                  City
                </label>
                <input
                  class="shadow appearance-none border rounded-lg w-full py-3 px-8 text-gray-700 leading-tight border-gray-800 focus:outline-none focus:shadow-outline placeholder-gray-500 font-semibold"
                  id="city"
                  type="text"
                  placeholder="Your city..."
                  required
                />
              </div>
              <div class="flex mb-4">
                <div class="relative flex-1">
                  <label
                    class="block text-gray-700 text-sm font-semibold mb-2"
                    for="country"
                  >
                    Country
                  </label>
                  <select
                    class="shadow appearance-none border rounded-lg w-full py-3 px-8 text-gray-700 leading-tight border-gray-800 focus:outline-none focus:shadow-outline placeholder-gray-500 font-semibold"
                    id="country"
                    required
                  >
                    <option>South African</option>
                    <option>Zambia</option>
                    <option>Zimbabwe</option>
                  </select>
                </div>
                <div class="relative ml-6 flex-1">
                  <label
                    class="block text-gray-700 text-sm font-semibold mb-2"
                    for="postal-code"
                  >
                    Postal Code
                  </label>
                  <input
                    class="shadow appearance-none border rounded-lg w-full py-3 px-8 text-gray-700 leading-tight border-gray-800 focus:outline-none focus:shadow-outline placeholder-gray-500 font-semibold"
                    type="text"
                    id="postal-code"
                    placeholder="Your postal code..."
                    required
                  />
                </div>
              </div>
              <div class="mb-4">
                <label class="block text-gray-700 font-semibold">
                  <input class="mr-2 leading-tight" type="checkbox" required />
                  <span class="">Save this information for next time.</span>
                </label>
              </div>
              <div class="flex justify-end">
                <button
                  class="px-8 py-3 bg-orange-500 text-white font-semibold rounded-lg"
                  type="submit"
                  id="submitted"
                >
                  Continue
                </button>
              </div>
            </form>
          </div>
        </div>

        <div id="demo"></div>

        <footer class="relative  bottom-0 left-0 w-full text-center my-4">
          Alick Mwanza @ DevChallenge.io
        </footer>
      </div>
    </div>
  );
}

export default page;
