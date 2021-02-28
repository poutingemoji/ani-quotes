import authorQuotes from "../data/authorQuotes"
export function randomBetween(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
export function randomChoice(arr) {
  return arr[randomBetween(0, arr.length - 1)];
}

export function groupBy(arr, fn) {
  return arr.reduce((result, item) => {
    const keys = Array.isArray(fn(item)) ? fn(item) : [fn(item)];
    keys.map((key) => {
      if (!result[key]) result[key] = [];
      result[key].push(item);
    });
    return result;
  }, {});
}

export const query = `
        query ($id_in: [Int], $page: Int, $perPage: Int) {
          Page (page: $page, perPage: $perPage) {
            pageInfo {
              total
              currentPage
              lastPage
              hasNextPage
              perPage
            }
            characters (id_in: $id_in) {
              id
              image {
                large
              }
              name {
                full
              }
            }
          }
        }
      `;
