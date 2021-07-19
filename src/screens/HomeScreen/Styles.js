import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: '5%'
  },
  addRow: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 22,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '5%',
    alignSelf: 'stretch',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    borderRadius: 5,
  },
  addRowText: {
    marginLeft: 15,
    fontSize: 14
  },
  add: {
    flexDirection: 'row',
    height: 25,
    width: 25,
    borderRadius: 50,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center'
  },
  renderContainer: {
    height: 80,
    flex: 0.5,
    margin: '3%',
    elevation: 0.7,
    borderWidth: 1
  },
  buttonContainerItem: {
    height: 50,
    alignItems: 'center',
    backgroundColor: 'orange'
  },
  flatList: {
    flex: 1
  }
})

export default styles