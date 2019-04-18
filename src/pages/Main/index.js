import React, { Component } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { Modal, View, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import {
  Container,
  Avatar,
  styles,
  BoxModalOverlay,
  ModalTitle,
  BoxModal,
  Input,
  Button,
  ButtonText,
  ButtonBox,
  SpinnerBox,
  ErrorBox,
  ErrorText,
} from './sytles';

import { Creators as UserActions } from '~/store/ducks/user';

class Main extends Component {
  static propTypes = {
    addUserRequest: PropTypes.func.isRequired,
    user: PropTypes.shape({
      loading: PropTypes.bool,
      error: PropTypes.bool,
      users: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          title: PropTypes.string,
          avatar_url: PropTypes.string,
          coordinate: PropTypes.shape({
            latitude: PropTypes.number,
            longitude: PropTypes.number,
          }),
        }),
      ),
    }).isRequired,
  };

  state = {
    modalVisible: false,
    username: null,
    coordinate: null,
  };

  showModal = visible => (e = null) => {
    const coordinate = e.nativeEvent.coordinate || null;
    this.setState({ modalVisible: visible, coordinate });
  };

  getUser = () => {
    const { username, coordinate } = this.state;
    const { addUserRequest } = this.props;
    addUserRequest(username, coordinate);
    this.setState({ username: '', coordinate: null, modalVisible: false });
  };

  loadUsers = () => {
    const {
      user: { users },
    } = this.props;
    return users.map(user => (
      <Marker key={user.id} coordinate={user.coordinate} title={user.name}>
        <View>
          <Avatar source={{ uri: user.avatar_url }} />
        </View>
      </Marker>
    ));
  };

  render() {
    const { modalVisible, username } = this.state;
    const {
      user: { loading, error },
    } = this.props;
    return (
      <Container>
        <MapView
          style={styles.mapView}
          region={{
            latitude: -27.2177659,
            longitude: -49.6451598,
            latitudeDelta: 0.0042,
            longitudeDelta: 0.0031,
          }}
          scrollEnabled
          onLongPress={this.showModal(!modalVisible)}
        >
          {this.loadUsers()}
        </MapView>
        {loading && (
          <SpinnerBox>
            <ActivityIndicator size="large" />
          </SpinnerBox>
        )}
        {error && (
          <ErrorBox>
            {/* Nao vou validar o erro neste momento. */}
            <ErrorText>Usuário não encontrado.</ErrorText>
          </ErrorBox>
        )}
        <Modal
          animationType="slide"
          transparent
          visible={modalVisible}
          onDismiss={() => this.setState({ username: '', coordinate: null })}
        >
          <BoxModalOverlay>
            <BoxModal>
              <ModalTitle>Adicionar novo local</ModalTitle>
              <Input
                autoCapitalize="none"
                autoCorrect={false}
                value={username}
                placeholder="Usuário no Github"
                onChangeText={text => this.setState({ username: text })}
              />
              <ButtonBox>
                <Button onPress={this.showModal(!modalVisible)}>
                  <ButtonText>Cancelar</ButtonText>
                </Button>
                <Button primary onPress={() => this.getUser()}>
                  <ButtonText>Salvar</ButtonText>
                </Button>
              </ButtonBox>
            </BoxModal>
          </BoxModalOverlay>
        </Modal>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = dispatch => bindActionCreators(UserActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
