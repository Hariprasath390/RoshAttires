import Link from "next/link";
// import ProductLists from "./productLists";

// const bread = {
//   name: "Basic crop tops",
//   price: "₹192",
//   href: "#",
//   breadcrumbs: [
//     { id: 1, name: "Women", href: "#" },
//     { id: 2, name: "Clothing", href: "#" },
//   ],
// };

const products = [
  {
    id: 1,
    name: "Pink crop top ❤️",
    href: "#",
    price: "₹399",
    imageSrc: "/download111.jpg",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 2,
    name: "Cropped Ribbed Top ❤️ ",
    href: "#",
    price: "₹450",
    imageSrc: "/download2.jpg",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 3,
    name: "Blue crop top ❤️",
    href: "#",
    price: "₹400",
    imageSrc: "/download3.jpg",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 4,
    name: "White cute top ❤️",
    href: "#",
    price: "₹460",
    imageSrc: "/download4.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 5,
    name: "Orange crop top ❤️",
    href: "#",
    price: "₹499",
    imageSrc: "/download5.jpg",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 6,
    name: "Red cute top ❤️",
    href: "#",
    price: "₹399",
    imageSrc: "/download6.jpg",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 7,
    name: " Pink crop top ❤️",
    href: "#",
    price: "₹350",
    imageSrc: "/download7.jpg",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 8,
    name: "Striped crop top ❤️",
    href: "#",
    price: "₹299",
    imageSrc: "/download8.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  // More products...
];

export default function productItems() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-black/70 text-[30px]  font-serif  py-3">Cute Tops</h2>
        {/* {bread.breadcrumbs.map((breadcrumb) => (
            <li key={breadcrumb.id}>
              <div className="flex items-center">
                <a
                  href={breadcrumb.href}
                  className="mr-2 text-sm font-medium text-gray-900"
                >
                  {breadcrumb.name}
                </a>
                <svg
                  width={16}
                  height={20}
                  viewBox="0 0 16 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-5 w-4 text-gray-300"
                >
                  <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                </svg>
              </div>
            </li>
          ))} */}

        {/* <ProductLists /> */}

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <Link
              legacyBehavior
              href="/productDetails"
              as="productDetails"
            >
              <a key={product.id} href={product.href} className="group">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700 font-serif">{product.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900 font-serif">
                  {product.price}
                </p>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
