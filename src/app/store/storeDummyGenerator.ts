// interface Store {
//   storeId: string;
//   storeImgSrcArr?: string[];
//   storeName: string;
//   storeLocation: string;
//   storeCost: number;
//   storeSize: string;
//   storeSales: number;
//   storeCategory: string;
//   storeRevenue: number;
//   manager: string;
//   managerContact: string;
// }

// function getRandomInt(min: number, max: number): number {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// function generateDummyStores(count: number): Store[] {
//   const stores: Store[] = [];

//   for (let i = 0; i < count; i++) {
//     stores.push({
//       storeId: `store-${i}`,
//       storeImgSrcArr: Array.from(
//         { length: getRandomInt(1, 5) },
//         () => `https://example.com/store${getRandomInt(1, 10)}.jpg`,
//       ),
//       storeName: `Store ${i + 1}`,
//       storeLocation: `Location ${getRandomInt(1, 100)}`,
//       storeCost: getRandomInt(1000, 5000),
//       storeSize: `${getRandomInt(20, 200)} sqm`,
//       storeSales: getRandomInt(5000, 20000),
//       storeCategory: ['Clothing', 'Electronics', 'Groceries', 'Furniture'][
//         getRandomInt(0, 3)
//       ],
//       storeRevenue: getRandomInt(20000, 100000),
//       manager: `Manager ${getRandomInt(1, 50)}`,
//       managerContact: `+${getRandomInt(100, 999)}-${getRandomInt(
//         100,
//         999,
//       )}-${getRandomInt(1000, 9999)}`,
//     });
//   }

//   return stores;
// }

// const dummyStores = generateDummyStores(50);
// console.log(dummyStores);
