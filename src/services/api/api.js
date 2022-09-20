import axios from 'axios';

export default async function getImages({ query, page, perPage }) {

  const url = `https://pixabay.com/api/?q=${query}&page=${page}&key=29629491-d8b1867e90b1ff8305b24c06e&image_type=photo&orientation=horizontal&per_page=${perPage}`;

  return await axios.get(url);
}
