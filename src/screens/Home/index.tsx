import { Text, View, TextInput, TouchableOpacity, Alert, FlatList } from 'react-native';  //text input para colocar o input, TouchableOpacity para fazer clicks
import { styles } from './styles';

import { Participant } from '../../components/Participant';   // importando o componente Participant

export default function Home() {  // sempre criar as funções dentro do escopo dos components (HOME)
    const participants = ['André', 'Sandro', 'Gabriel', 'Felipe', 'Caio', 'João','Walquiria' ,'Rafael' ,'Joaquim']

    function handleParticipantAdd(){
        if(participants.includes("André")){   //Verifica dentro do Array sem temos valores repetidos
           return Alert.alert("Participante existe", "Já existe um participante na lista com esse nome.") // Alerta
        }
    }
    function handleParticipantRemove(name:string){ 
        Alert.alert("Remover", `Remover o participante ${name}?`, [ // Alerta de confirmação
            {
               text: 'Sim',
               onPress: () => Alert.alert("Deletado!")
            },
            {
                text: 'Não',
                style: 'cancel'
            }
        ])
    }

  return (   // RETORNAMOS SEMPRE OS ELEMENTOS QUE QUEREMOS RENDERIZAR NA TELA
    <View style={styles.container} /* acessa o styles.container no qual tras a estilização que se encontra no styles.ts */>  
      <Text style={styles.eventName}>
        Nome do evento
      </Text>

      <Text style={styles.eventDate}>
        Quinta-Feira, 27 de abril de 2023
      </Text>

        <View style={styles.form /* Aqui foi envolvido o text input e o opacity em uma view para fazer com que fiquem na mesma linha */ }> 
             <TextInput // Cria um text input no qual o usuário vai colocar a informação, passando os stylos e o placeholder.
                style={styles.input}
                placeholder='Nome do Participante'
                placeholderTextColor="#6B6b6b"
            />
            <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}/* propriedade on press no qual chama uma função ao pressionar o botão + */> 
                <Text style={styles.buttonText}>
                    +
                </Text>
            </TouchableOpacity>
        </View>

        <FlatList  // Rolagem no qual renderiza assim que o usuário fazer a rolagem(lentamente e prestes a aparecer na tela), diferente da ScrollView que renderiza todos os componentes tendo uma desvantegem de desempenho em relação ao FlatList
            data={participants}
            keyExtractor={item => item}
            renderItem={({ item }) => (
                <Participant
                  key={item}
                  name={item}
                  onRemove={() => handleParticipantRemove(item)} /* Passar a propriedade para o componente, neste caso como texto name e também podemos através do onRemove passar uma função como propriedade que exclui o participante*//>
            )}
            showsVerticalScrollIndicator={false}
        />
    </View>
  );
}
