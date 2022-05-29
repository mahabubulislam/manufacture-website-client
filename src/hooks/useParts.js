import { useQuery } from "react-query"

const useParts = () => {
    const { data: parts, isLoading, refetch } = useQuery('parts', () => fetch('https://murmuring-retreat-70420.herokuapp.com/parts').then(res => res.json()))
   
    return { parts, isLoading, refetch }
}
export default useParts