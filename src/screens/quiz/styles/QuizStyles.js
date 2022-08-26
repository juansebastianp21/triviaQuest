import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#193252',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  categoryContainer: {
    paddingVertical: height * 0.01,
    paddingHorizontal: 30,
    borderRadius: 20,
  },
  categoryText: {
    color: '#FFF',
    fontSize: 14,
  },
  questionContainer: {
    width: '90%',
    backgroundColor: '#FFF',
    height: undefined,
    aspectRatio: 1.5,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  shadowProps: {
    shadowOffset: { width: -2, height: 4 },
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  infoText: {
    fontSize: 12,
    fontWeight: '600',
    position: 'absolute',
    top: 14,
    right: 14,
  },
  questionText: {
    fontSize: 20,
    maxWidth: '90%',
    textAlign: 'center',
    fontWeight: '600',
  },
  buttonText: {
    color: '#193252',
    fontSize: 24,
  },
  buttonsContainer: {
    paddingTop: 30,
    width: '100%',
    alignItems: 'center',
  },
  buttonsTitle: {
    fontSize: 20,
    maxWidth: '90%',
    textAlign: 'center',
    fontWeight: '600',
    color: '#FFF',
  },
  buttonContainer: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    width: '80%',
    paddingVertical: height * 0.025,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.7)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  answerContainer: {
    width: width * 0.7,
    height: undefined,
    aspectRatio: 1,
    backgroundColor: '#FFF',
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: '60%',
  },
});

export default styles;
