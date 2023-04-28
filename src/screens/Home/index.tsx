import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Alert, FlatList } from 'react-native';  //text input para colocar o input, TouchableOpacity para fazer clicks
import { styles } from './styles';

import { Participant } from '../../components/Participant';   // importando o componente Participant

export default function Home() { // sempre criar as funções dentro do escopo dos components (HOME)
    
  const [participants, setParticipants] = useState<string[]>([]);  // [estado, função que vai atualizar o conteúdo do estado] ->string[] para determinar o que o conteúdo do array vazio é uma string
  const [participantName, setParticipantName] = useState(''); // estado do nome do participante para pegar o valor digital pelo usuário 

    function handleParticipantAdd(){
        if(participants.includes(participantName)){   //Verifica dentro do Array sem temos valores repetidos
           return Alert.alert("Participante existe", "Já existe um participante na lista com esse nome.") // Alerta
        }

        setParticipants(prevState => [...prevState, participantName]) // função que define o novo conteúdo de participants // [...prevState para manter o que tinha antes e somar com o que queremos adicionar]
        
        setParticipantName(''); // limpar o estado ao adicionar o participante (input)
    
    }

    function handleParticipantRemove(name:string){   
        Alert.alert("Remover", `Remover o participante ${name}?`, [ // Alerta de confirmação
            {
               text: 'Sim',
               onPress: () => setParticipants(prevState => prevState.filter(participant => participant !== name)) // LÓGICA: Aqui ele está acessando o conteúdo atual da lista e percorrendo esse estado através do filtro, para retornar todos os participantes menos o nome que será deletado
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
                onChangeText={setParticipantName}  // disparada um evento sempre que o conteúdo do textinput muda, acessa o conteúdo atual da caixa de texto
                value={participantName}
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
                  onRemove={() => handleParticipantRemove(item)} /* Passar a propriedade para o componente, neste caso como texto name e também podemos através do onRemove passar uma função como propriedade que exclui o participante*/
                  />
                )}

            showsVerticalScrollIndicator={false}
        />
    </View>
  );
}
