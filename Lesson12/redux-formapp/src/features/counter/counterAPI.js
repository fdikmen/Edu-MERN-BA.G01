// fetchCount adında bir fonksiyon tanımlanır.
// Bu fonksiyon 500 milisaniye sonra bir sayı döndürür.
// asenkron şekilde çalışır.
export function fetchCount(amount = 1) {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ data: amount }), 500)
  );
}
// Promise, JS asenkron işlemler için kullanılan bir yapıdır.
// Promise, bir işlemin tamamlanması için beklenmesini sağlar.
// Promise, gelecekteki bir çalışmayı temsil eder.


export function fetchPosts() {
  const url = 'https://jsonplaceholder.typicode.com/posts';
  return fetch(url)
                  .then((response) => response.json())
                  .then((data) => data);
}

export async function fetchPostsAsyc() {
  const url = 'https://jsonplaceholder.typicode.com/posts';
  return await fetch(url)
                  .then((response) => response.json())
                  .then((data) => data);
}