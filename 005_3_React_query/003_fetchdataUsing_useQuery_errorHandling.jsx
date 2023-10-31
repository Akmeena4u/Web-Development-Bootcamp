

//1. Install React Query:Make sure you have React Query installed in your project by running the following command:
   npm install react-query --save
   
//2. Set up React Query Client: In our main application file or a configuration file, set up a React Query client, just like you did in your App component:
    import { QueryClient, QueryClientProvider } from 'react-query';

    const queryClient = new QueryClient();

   // Your existing App component code
   function App() {
     return (
    <QueryClientProvider client={queryClient}>
      {/* Your app components */}
    </QueryClientProvider>
  );
   }

//3.Use useQuery to Fetch Data: In our component, use the useQuery hook to fetch data. The useQuery hook takes two arguments: a unique key for the query and a function to fetch the data
  import { useParams } from 'react-router-dom'
import { useSuperHeroData } from '../hooks/useSuperHeroData'

export const RQSuperHeroPage = () => {
  const { heroId } = useParams()
  const { isLoading, data, isError, error } = useSuperHeroData(heroId)

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  if (isError) {
    return <h2>{error.message}</h2>
  }
  return (
    <div>
      {data.data.name} - {data.data.alterEgo}
    </div>
  )
}
