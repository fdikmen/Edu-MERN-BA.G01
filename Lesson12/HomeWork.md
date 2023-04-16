
## HomeWork

**Proje Adı:** Movie App

Proje Açıklaması: Movie App, mockapi'den veri çekerek bir film uygulamasıdır. Kullanıcılar, ana sayfada film kartlarını görüntüleyebilir, filtreleyebilir ve arayabilirler. Yeni film ekleme formu ile yeni filmler ekleyebilirler. Uygulama, React Bootstrap kullanılarak oluşturulmuştur ve Redux Toolkit Slice yapısına uygun olarak tasarlanmıştır.
***
**Componentler:**

1.  ActorList.js: Film oyuncularını görüntüler.
2.  Footer.js: Sayfanın alt kısmında yer alan footer bileşenidir.
3.  Header.js: Sayfanın üst kısmında yer alan header bileşenidir.
4.  MovieCard.js: Film kartlarını görüntüler.
5.  MoviesList.js: Film kartlarını liste halinde görüntüler.
6.  NewMovieForm.js: Yeni film ekleme formunu görüntüler.

**Sayfalar:**

1.  HomePage.js: Ana sayfa, film kartlarını görüntüleyebilir, filtreleyebilir ve arayabilirsiniz.
2.  MoviesPage.js: Tüm filmleri listeler ve filtrelemeye izin verir.
3.  NewMoviesPage.js: Yeni film ekleme formunu görüntüler.

**Redux Toolkit Slice yapısı:**

1.  moviesSlice.js: Film kartlarını ve filtreleme bilgilerini içeren state'i yönetir.
2.  newMovieSlice.js: Yeni film ekleme formu bilgilerini içeren state'i yönetir.
***
**Ek Bilgiler:**

-   Uygulama, React Router kullanılarak yönlendirme yapar.
-   Tüm bileşenler, Bootstrap ve CSS kullanarak tasarlanmıştır.
-   Veriler, axios ile mockapi'den çekilir ve state güncellemeleri için Redux Toolkit kullanılır.

**Not:** Bu ödevi tamamlamak için öncelikle React, React Router, Redux Toolkit, React-Bootstrap ve axios konularına hakim olmanız gerekmektedir.

***
Bu ödevi tamamladıktan sonra, aşağıdaki kazanımları elde edersiniz:

-   React ve React Bootstrap kullanarak basit bir web uygulaması oluşturma becerisi
-   Axios kütüphanesi kullanarak API istekleri gönderme ve verileri işleme becerisi
-   Redux Toolkit ve Slice yapısına uygun olarak state yönetimi yapma becerisi
-   Component bazlı bir yapıya sahip olma ve modüler kod yazma becerisi
-   Form verilerini toplama ve kontrol etme becerisi
-   UI tasarımı için Bootstrap kullanarak sayfa oluşturma becerisi

Bu kazanımlar, React ve Redux kullanarak daha karmaşık uygulamalar geliştirmek için temel sağlayacaktır. Ayrıca, bu ödev size React ve Redux ekosisteminde bulunan diğer araçları keşfetme ve öğrenme imkanı da sunabilir.
***
Bu proje için aşağıdaki kurallar geçerlidir:

1.  En az bir class component ve en az bir functional component kullanılmalıdır.
2.  En az bir props type kullanılmalıdır.
3.  En az bir state ve props kullanımı yapılmış olmalıdır.
4.  En az bir kez inline CSS ve external CSS kullanılmalıdır.
***
**Örnek & Notes **
- https://redux.js.org/introduction/examples

- https://medium.com/@fdikmen/a-redux-toolkit-project-structure-guide-58093baa88a5

- https://codesandbox.io/s/github/reduxjs/redux-essentials-example-app/tree/checkpoint-1-postAdded/?from-embed=&file=/src/features/posts/PostsList.js

- https://codesandbox.io/s/simple-fetch-api-using-redux-toolkit-axios-forked-evd9v3?file=/src/features/todoSlice.js


```bash
src/
  |- app/
     |- App.js                # Main React component
     |- store.js              # Redux Toolkit store configuration
  |- features/
     |- movies/
        |- moviesSlice.js    # Redux Toolkit Slice configuration for movies
        |- MoviesPage.js     # MoviesPage component
        |- MovieForm.js      # MovieForm component
        |- NewMoviePage.js   # NewMoviePage component
        |- MovieAPI.js       # API calls related to movies
        |- MovieCard.js      # MovieCard component
        |- MoviesList.js     # MoviesList component
  |- components/
     |- Header.js             # Header component
     |- Footer.js             # Footer component
  |- pages/
     |- HomePage.js           # HomePage component
  |- hooks/
     |- useLocalStorage.js    # Custom hook for storing data in localStorage
     |- useFetch.js           # Custom hook for fetching data from an API
  |- utils/
     |- utilityFunctions.js   # Helper functions
  |- API/
     |- index.js              # API exports
  |- config/
     |- config.js             # Application configuration file
  |- router/
     |- index.js              # React Router configuration
  |- .env                     # Environment variables
  |- index.js                 # Application entry file
```