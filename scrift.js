
const getMovies=async()=>{
  const response=await fetch('https://jsonfakery.com/movies/paginated');
  if(response.status!==200){
    throw new Error('cannot fetch data');
  }
  const data=await response.json();
  return data;
};



getMovies().then(data=>{
 const List=document.querySelector('.main_19 ul');
 List.innerHTML='';
 
 data.data.forEach(movie=>{
  const li=document.createElement('li');
  li.className='main_20';

  li.innerHTML=`
  <img src="${movie.poster_path}" alt="${movie.original_title}">
  <p>${movie.original_title}</p>
  <p>${movie.release_date}</p>
  `;

  li.addEventListener('click', () => {
        const title = movie.original_title;
        const image = movie.poster_path;
        const season = movie.release_date;
        const background=movie.backdrop_path || movie.poster_path;
        const overview=movie.overview;
        const rating=movie.vote_average;
        const popu=movie.popularity;
        const casts=movie.casts;

        localStorage.setItem('movie_cast',JSON.stringify(casts));


        const url = `movie.html?title=${encodeURIComponent(title)}&image=${encodeURIComponent(image)}&season=${encodeURIComponent(season)}&background=${encodeURIComponent(background)}&overview=${encodeURIComponent(overview)}&rating=${encodeURIComponent(rating)}&popu=${encodeURIComponent(popu)}`;
        window.open(url, '_blank');
      });

      List.appendChild(li);
 });
})
.catch(err=>{
  console.log('reject',err.message);
});


getMovies().then(data=>{
 const List=document.querySelector('.main_9 ul');
 List.innerHTML='';
 
 data.data.forEach(movie=>{
  const li=document.createElement('li');
  li.className='main_10';

  li.innerHTML=`
  <img src="${movie.poster_path}" alt="${movie.original_title}">
  <p>${movie.original_title}</p>
  <p>${movie.release_date}</p>
  `;

  li.addEventListener('click', () => {
        const title = movie.original_title;
        const image = movie.poster_path;
        const season = movie.release_date;
        const background=movie.backdrop_path || movie.poster_path;
        const overview=movie.overview;
        const rating=movie.vote_average;
        const popu=movie.popularity;
        const casts=movie.casts;

        localStorage.setItem('movie_cast',JSON.stringify(casts));


        const url = `movie.html?title=${encodeURIComponent(title)}&image=${encodeURIComponent(image)}&season=${encodeURIComponent(season)}&background=${encodeURIComponent(background)}&overview=${encodeURIComponent(overview)}&rating=${encodeURIComponent(rating)}&popu=${encodeURIComponent(popu)}`;
        window.open(url, '_blank');
      });

      List.appendChild(li);
 });
})
.catch(err=>{
  console.log('reject',err.message);
});