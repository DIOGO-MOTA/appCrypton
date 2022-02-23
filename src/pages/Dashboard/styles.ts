import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import FeatherIcon from 'react-native-vector-icons/Feather';



export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(20)}px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
`;

export const Logo = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  
  font-size: ${RFValue(30)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
`

export const Icon = styled(FeatherIcon)`
  color: ${({ theme }) => theme.colors.title};
  margin-right: 10px;
`;

export const FilterContainer = styled.View`
  width: 100%;
  padding: 0 24px;
  margin-top: -28px;
`;

export const ListCrypto = styled.ScrollView`
  padding: 0 24px;
`

export const Section = styled.TouchableOpacity`
  padding-top: 20px;
  padding-bottom: 16px;
  

  flex-direction: row;
  justify-content: space-between;
  text-align: center;
`;

export const Currency = styled.View`
  flex-direction: row;
`

export const Image = styled.Image`
  width: ${RFValue(50)}px;
  height: ${RFValue(50)}px;

  border-radius: 5px;
`
export const NameCurrency = styled.View`
  flex-direction: column;
`

export const ItemTitle = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  margin-left: 10px;
  
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  margin-top: 5px;
`;

export const TitleCurrency = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  margin-left: 10px;
  
  font-size: ${RFValue(13)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  margin-top: 5px;
`;

export const PriceCurrency = styled.View`
  align-items: flex-end;
`

export const Price = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  margin-top: 3px;
`
export const PriceTimestamp = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  
  font-size: ${RFValue(13)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  margin-top: 10px;
`
export const TitleMostPopular = styled.Text`
  padding: 0 30px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.title};
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
`

export const ListCryptoPopular = styled.ScrollView`
  padding: 0 24px;
`

export const SectionPopular = styled.TouchableOpacity`
  width: ${RFValue(330)}px;
  height: ${RFValue(100)}px;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 10px;

  margin-right: 16px;
  padding: 0px 40px;

  flex-direction: row;
  justify-content: space-between;
  text-align: center;
`;

export const CurrencyPopular = styled.View`
  flex-direction: row;
  align-items: center;
`

export const ImagePopular = styled.Image`
  width: ${RFValue(30)}px;
  height: ${RFValue(30)}px;

  border-radius: 5px;
`
export const NameCurrencyPopular = styled.View`
  margin-left: 30px;
  flex-direction: column;
  align-items: flex-start;
`

export const TitlePopular = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  margin-top: 5px;
`;

export const PricePopular = styled.Text`
  color: ${({ theme }) => theme.colors.title};
`
