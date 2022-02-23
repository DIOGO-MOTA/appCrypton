import { ScrollView } from 'react-native';

import SearchInput from '../../components/SearchInput';


import {
  Container,
  Header,
  Logo,
  Icon,
  FilterContainer,
  ListCrypto,
  Section,
  Currency,
  Image,
  NameCurrency,
  ItemTitle,
  TitleCurrency,
  PriceCurrency,
  Price,
  PriceTimestamp,
  ListCryptoPopular,
  TitleMostPopular,
  SectionPopular,
  CurrencyPopular,
  ImagePopular,
  NameCurrencyPopular,
  TitlePopular,
  PricePopular,

} from './styles';

export function Dashboard() {

  const data = [
    {
      id: 'BTC',
      name: "Bitcoin",
      logo_url: 'https://cdn-icons-png.flaticon.com/512/825/825540.png',
      currency: 'BTC',
      price: '$24,150.17',
      price_timestamp: "2019-06-14T 12:35:00Z",
    },
    {
      id: 'ETH',
      name: "Ethereum",
      logo_url: 'https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/1024/Ethereum-ETH-icon.png',
      currency: 'ETH',
      price: '$2,606.82',
      price_timestamp: "2019-06-14T 12:35:00Z",
    },
    {
      id: 'tether',
      name: "Tether",
      logo_url: 'https://assets.coingecko.com/coins/images/325/large/Tether-logo.png?1598003707',
      currency: 'TETHER',
      price: '$1.002',
      price_timestamp: "2019-06-14T 12:35:00Z",
    },
    {
      id: 'binancecoin',
      name: "BNB",
      logo_url: 'https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png?1644979850',
      currency: 'BNB',
      price: '$372.11',
      price_timestamp: "2019-06-14T 12:35:00Z",
    },
    {
      id: 'usd-coin',
      name: "USD Coin",
      logo_url: 'https://assets.coingecko.com/coins/images/6319/large/USD_Coin_icon.png?1547042389',
      currency: 'USD COIN',
      price: '$1.002',
      price_timestamp: "2019-06-14T 12:35:00Z",
    },
    
  ]

  const data2 = [
    {
      id: 'BTC',
      name: "Bitcoin",
      logo_url: 'https://cdn-icons-png.flaticon.com/512/825/825540.png',
      currency: 'BTC',
      price: '$24,150.17',
      price_timestamp: "2019-06-14T 12:35:00Z",
    },
    {
      id: 'ETH',
      name: "Ethereum",
      logo_url: 'https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/1024/Ethereum-ETH-icon.png',
      currency: 'ETH',
      price: '$2,606.82',
      price_timestamp: "2019-06-14T 12:35:00Z",
    },
  ]



  // function handleListeBook(books: DataListBookProps) {
  //   navigation.navigate('bookDetails', { books })
  // }

  return (
    <Container>
      <Header>
        <Logo>Market</Logo>
        <Icon
          name="bell"
          size={30}
        />
      </Header>

      <FilterContainer>
        <SearchInput
          placeholder="search..."
        />
      </FilterContainer>

      <ScrollView>

        <ListCrypto
          contentContainerStyle={{
            paddingHorizontal: 8,
          }}
          showsVerticalScrollIndicator={false}
        >
          {data.map(crypto => (
            <Section
              key={crypto.id}
            // onPress={() => {
            //   handleListeBook(books);
            // }}
            >
              <Currency>
                <Image
                  source={{ uri: crypto.logo_url }}
                />
                <NameCurrency>
                  <ItemTitle>{crypto.currency} </ItemTitle>
                  <TitleCurrency>{crypto.name}</TitleCurrency>
                </NameCurrency>
              </Currency>
              <PriceCurrency>
                <Price>{crypto.price}</Price>
                <PriceTimestamp>{crypto.price_timestamp}</PriceTimestamp>
              </PriceCurrency>
            </Section>
          ))}
        </ListCrypto>

      </ScrollView>

      <TitleMostPopular>Most Popular</TitleMostPopular>
      <ListCryptoPopular
        contentContainerStyle={{
          paddingHorizontal: 8,
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {data2.map(crypto => (
          <SectionPopular
            key={crypto.id}
          // onPress={() => {
          //   handleListeBook(books);
          // }}
          >
            <CurrencyPopular>
              <ImagePopular
                source={{ uri: crypto.logo_url }}
              />
              <NameCurrencyPopular>
                <TitlePopular>{crypto.name} </TitlePopular>
                <PricePopular>{crypto.price}</PricePopular>
              </NameCurrencyPopular>
            </CurrencyPopular>

          </SectionPopular>
        ))}
      </ListCryptoPopular>


    </Container>
  );
}

