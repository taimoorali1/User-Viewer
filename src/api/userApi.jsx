import axios from 'axios';

// Fetch users from dummyjson
export const getUsers = async () => {
  try {
    const response = await axios.get('https://dummyjson.com/users'); // Fetch users
    return response.data.users; // Adjust based on API response structure
  } catch (error) {
    console.error("Error fetching users data:", error);
    return [];
  }
};

// Fetch single user by ID
export const getUserById = async (id) => {
  try {
    const response = await axios.get(`https://dummyjson.com/users/${id}`); // Fetch single user
    return response.data;
  } catch (error) {
    console.error(`Error fetching user with id ${id}:`, error);
    return null;
  }
};
