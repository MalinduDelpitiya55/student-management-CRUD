import axios from 'axios';

export const getStudents = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching students:', error);
        throw error;
    }
};

export const addStudent = async (student) => {
    try {
        const response = await axios.post(API_URL, student);
        return response.data;
    } catch (error) {
        console.error('Error adding student:', error);
        throw error;
    }
};