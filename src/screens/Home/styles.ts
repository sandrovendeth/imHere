import { StyleSheet } from "react-native"; // Com o stylesheet podemos estilizar de forma conjunta, passando somente somente a constante no index.html, podendo assim estilizar de forma separada.

export const styles = StyleSheet.create({ // Aqui criou uma constante chamada styles no qual cria um objeto que possui todas as estilizações que deseja.
    container: { // estilização do container
      flex: 1,
      backgroundColor: '#131016',
      padding: 24
    },
    eventName: { // estilização do texto eventName
      color: '#FFF',
      fontSize: 24,
      fontWeight: 'bold',
      marginTop: 48
    },
    eventDate: { //estilização do texto eventDate
      color: '#6B6B6B',
      fontSize: 16,
    },
    input: {
        flex: 1,    // Aqui o input vai preencher o que estiver disponível de espaço 
        height: 56,
        backgroundColor: '#1F1E25',
        borderRadius: 5,
        color: '#FFF',
        padding: 16,
        fontSize: 16,
        marginRight: 12
        
    },
    buttonText: {
        color: '#FFF',
        fontSize: 30
    },
    button:{
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: '#31CF67',
        alignItems: 'center',
        justifyContent: 'center'
    },
    form: {
        width: '100%',
        flexDirection: 'row', // Flexdirection row faz com que um fique do lado do outro
        marginTop: 36,
        marginBottom: 42
        
    }   
  });
  