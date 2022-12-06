import Head from 'next/head'
import { TbDots } from 'react-icons/tb';
import { BiPhoneCall } from 'react-icons/bi';
import { useQuery } from '@tanstack/react-query';


import Layout from '../components/Layout';
import PageHero from '../components/PageHero';
import CategoryBox from '../components/CategoryBox';
import SliderHotels from '../components/Sliders/SliderHotels';
import PromotionBanner from '../components/PromotionBanner';
import GridContainer from '../components/GridContainer';
import LogoCard from '../components/Cards/LogoCard';
import SliderEvents from '../components/Sliders/SliderEvents';

import { TextureTriangleContainer } from './styles';
import { BGLight, FlexContainer, Section } from '../styles/general';
import { SubHeader } from '../styles/typography';

import TextureTriangle from '../assets/texture-triangle.svg';
import TaxiBanner from '../assets/order-taxi.svg';
import MuseumBanner from '../assets/museum.svg';

/** Data */
import boxes from '../lib/data/boxes.json';
import hotels from '../lib/data/hotels.json';
import restaurants from '../lib/data/restaurants.json';
import events from '../lib/data/events.json';
import posts from '../lib/data/posts.json';
// import { fetchPosts } from '../lib/api/fetchPosts';
import SliderPosts from '../components/Sliders/SliderPosts';
import FooterBanner from '../components/FooterBanner';


const Home = () => {
  // fetch blog posts from xml feed
  // const { data, status, isLoading } = useQuery({ queryKey: ['blogPosts'], queryFn: fetchPosts })

  return (

    <>

      <Head>

        <title>iVolos Community | Ανακαλύψτε την πόλη μας</title>

      </Head>

      <Layout>

        <TextureTriangleContainer>

          <TextureTriangle />

        </TextureTriangleContainer>

        <PageHero
          header='Καλως ηρθατε στο Volos Ins!'
          subheader='Βρείτε ό,τι ψάχνετε, στην αγαπημένη μας πόλη!'
          paragraph='Επαγγελματίες της πόλης, εστιατόρια, καφετέριες, εκδηλώσεις, αγγελίες και ό,τι άλλο μπορείς να φανταστείς, σε περιμένει να τα ανακαλύψεις!'
          cta='Εγγραφή'
        />

        <Section padding='0 0 20px' margin='80px auto'>

          <FlexContainer gap={50}>

            {boxes.map((box) => <CategoryBox key={box.id} title={box.title} url={box.url} />)}

            <CategoryBox title={'Περισσότερα'} icon={<TbDots size={18} />} />

          </FlexContainer>

        </Section>

        <Section padding='0 0 100px'>

          <SliderHotels sliderTitle='Ξενοδοχεία της περιοχής' data={hotels} />

        </Section>

        <Section padding='0 0 100px'>

          <FlexContainer gap={50} className='__1-2--flex'>

            <PromotionBanner
              title='Taxi'
              phone='488'
              titleIcon={<BiPhoneCall />}
              description='Δίπλα σου, με ένα τηλεφώνημα!'
              svg={<TaxiBanner />}
              minHeight={540}
            />

            <div>

              <SubHeader capitalize black xl mb={40}>Εστιατόρια στον Βόλο</SubHeader>

              <GridContainer gap={50} columns={2} columnWidth={'1fr'}>

                {restaurants.map(restaurant =>
                  <LogoCard
                    key={restaurant.id}
                    title={restaurant.title}
                    address={restaurant.address}
                    ratings={restaurant.ratings}
                    restaurantURL={restaurant.restaurantURL}
                    featuredImageURL={restaurant.featuredImageURL} />
                )}

              </GridContainer>

            </div>

          </FlexContainer>

        </Section>

        <BGLight marginY='0 0 100px'>

          <Section padding='100px 0 100px'>

            <SliderEvents sliderTitle='Επερχόμενες εκδηλώσεις' data={events} slidesPerView={2} spaceBetween={0} />

          </Section>

        </BGLight>

        <Section padding='0 0 100px'>

          <FlexContainer gap={50} className='__1-2--flex' reversed>

            <PromotionBanner
              title='Lorem Ipsum'
              phone='588'
              titleIcon={<BiPhoneCall />}
              description='Lorem ipsum dolor amet.'
              svg={<MuseumBanner />}
              minHeight={540}
            />

            <div>

              <SubHeader capitalize black xl mb={40}>Πολιτισμός & δραστηριότητες στον Βόλο</SubHeader>

              <GridContainer gap={50} columns={3} columnWidth={'1fr'}>

                {restaurants.map(restaurant =>
                  <LogoCard
                    key={restaurant.id}
                    title={restaurant.title}
                    address={restaurant.address}
                    ratings={restaurant.ratings}
                    restaurantURL={restaurant.restaurantURL}
                    featuredImageURL={restaurant.featuredImageURL} />
                )}

              </GridContainer>

            </div>

          </FlexContainer>

        </Section>

        <Section padding='0 0 100px'>

          <SliderPosts sliderTitle='Τι νέο υπάρχει στον Βόλο' data={posts} slidesPerView={1} />

        </Section>

        <FooterBanner />

      </Layout>

    </>

  )

}

export default Home;