import axios from 'axios';

export const fetchCardsData = async () => {
  try {
    const response = await axios.get(
      'https://sherwoodprojectdata.blob.core.windows.net/tech-challenge/projects.json'
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw new Error('Failed to fetch data from the API.');
  }
};
