import axios from "axios";

export const axiosSeciour = axios.create({
    baseURL: 'http://localhost:5000/'
})
const useAxiox = () => {
    return axiosSeciour;
};

export default useAxiox;