import useAxios from 'axios-hooks';
import { Banner, PageContainer } from 'components';
import { BuviBuBanner, SonDakika, AllHotels, AdBanner } from './components';

function Home() {
  const [{ data: hotelList = {} as any, loading: loadingHotel }] = useAxios({
    url: '/hotels?limit=16&page=1&shuffle=true',
  });

  if (loadingHotel) return <p>Loading...</p>;

  return (
    <PageContainer>
      <Banner />
      <BuviBuBanner />
      {/* <Loading load={loadingHotel}> */}
      <SonDakika hotels={hotelList} />
      <AdBanner />
      <AllHotels hotels={hotelList} />
      {/* </Loading> */}
    </PageContainer>
  );
}

export default Home;
