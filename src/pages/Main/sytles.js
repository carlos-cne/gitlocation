import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  mapView: {
    flex: 1,
  },
});

export const Container = styled.View`
  flex: 1;
`;

export const Avatar = styled.Image`
  border-radius: 25;
  width: 40px;
  height: 40px;
`;

export const BoxModalOverlay = styled.View`
  flex: 1;
  background: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
`;

export const BoxModal = styled.View`
  width: 90%;
  justify-content: center;
  align-items: center;
  background: #fff;
  padding: 20px 20px;
  border-radius: 5px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  height: 45px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  width: 100%;
  background: #fff;
  font-size: 14px;
  padding: 0 10px;
  margin-top: 20px;
  margin-bottom: 10px;
  border-radius: 5px;
`;

export const ModalTitle = styled.Text`
  font-size: 18;
  font-weight: bold;
  color: #333;
`;

export const Button = styled.TouchableOpacity`
  background: ${props => (props.primary ? '#9DCA8E' : '#D2D2D2')};
  height: 40px;
  justify-content: center;
  align-items: center;
  width: 48%;
`;

export const ButtonBox = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 16;
  font-weight: bold;
`;

export const SpinnerBox = styled.View`
  position: absolute;
  top: 50;
  left: 50%;
`;

export const ErrorBox = styled.View`
  position: absolute;
  top: 60;
  background: rgba(0, 0, 0, 0.2);
  height: 30px;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const ErrorText = styled.Text`
  color: #f00;
  font-size: 13px;
  /* font-weight: bold; */
`;

export const CalloutBox = styled.View`
  width: 200;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export const CalloutTextName = styled.Text`
  color: #333;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const CalloutTextBio = styled.Text`
  color: #666;
  font-size: 12px;
`;
