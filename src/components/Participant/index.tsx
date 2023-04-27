import { View, Text, TouchableOpacity} from 'react-native';
import { styles } from './styles'

type Props = { // Tipagem do componente
    name: string;
    onRemove: () => void; //tipagem de função através de arrow function retornando vazio
}

export function Participant({name, onRemove}: Props) { // Aqui dentro do componente acessamos a propriedade através de 'props'. De forma desestruturada {name e onRemove}
    return(
        <View style={styles.container}>
            <Text style={styles.name}>
                {name /* Em vez do nome estático inserimos a propriedade*/} 
            </Text>

            <TouchableOpacity style={styles.button} onPress={onRemove}>  
                <Text style={styles.buttonText}>
                    -
                </Text>
            </TouchableOpacity>
        </View>
    )
}