import AuthAxios from "../../AuthAxios";

export async function getmovies(page) {
  try {
    const res = await AuthAxios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=21d64656ed935bd96c47b31f3811b145&video=true&page=${page}`)
    return res.data;
  } catch (err) {
    if (err.response.status === 400) {
      throw new Error(err.response.data.message);
    } else if (err.response.status !== 200) {
      throw new Error("failed");
    }
  }
}

export async function getTrendingMovies() {
  try {
    const res = await AuthAxios.get('https://api.themoviedb.org/3/trending/all/week?api_key=21d64656ed935bd96c47b31f3811b145&language=In&video=true&page=1')
    return res.data;
  } catch (err) {
    if (err.response.status === 400) {
      throw new Error(err.response.data.message);
    } else if (err.response.status !== 200) {
      throw new Error("failed");
    }
  }
}

export async function getdetail(id) {
  try {
    const res = await AuthAxios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=21d64656ed935bd96c47b31f3811b145&language=en-US`)
    return res.data;
  } catch (err) {
    if (err.response.status === 400) {
      throw new Error(err.response.data.message);
    } else if (err.response.status !== 200) {
      throw new Error("failed");
    }
  }
}

export async function getshowDetail(id) {
  try {
    const res = await AuthAxios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=21d64656ed935bd96c47b31f3811b145&language=en-US`)
    return res.data;
  } catch (err) {
    if (err.response.status === 400) {
      throw new Error(err.response.data.message);
    } else if (err.response.status !== 200) {
      throw new Error("failed");
    }
  }
}

export async function getsearchMovie(query) {
  try {
    const res = await AuthAxios.get(`https://api.themoviedb.org/3/search/movie?api_key=21d64656ed935bd96c47b31f3811b145&query=${query}`)
    return res.data;
  } catch (err) {
    if (err.response.status === 400) {
      throw new Error(err.response.data.message);
    } else if (err.response.status !== 200) {
      throw new Error("failed");
    }
  }
}

export async function getsearchTvShows(query) {
  try {
    const res = await AuthAxios.get(`https://api.themoviedb.org/3/search/tv?api_key=21d64656ed935bd96c47b31f3811b145&query=${query}`)
    return res.data;
  } catch (err) {
    if (err.response.status === 400) {
      throw new Error(err.response.data.message);
    } else if (err.response.status !== 200) {
      throw new Error("failed");
    }
  }
}
