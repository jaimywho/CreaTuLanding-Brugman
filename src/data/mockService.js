import products from "./products";

function getData() {
  const promiseData = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products);
    }, 1000);
  });
  return promiseData;
}

function getItemData(itemid) {
  const promiseData = new Promise((resolve, reject) => {
    const itemRequested = products.find(
      (item) => String(item.itemid) === itemid
    );
    resolve(itemRequested);
    setTimeout(() => resolve(itemRequested), 1000);
  });

  return promiseData;
}

function getCategoryData(categoryID) {
  return new Promise((resolve, reject) => {
    const itemsCategory = products.filter(
      (item) => item.category === categoryID
    );
    setTimeout(() => {
      resolve(itemsCategory);
    }, 1000);
  });
}

export { getData, getItemData, getCategoryData };
