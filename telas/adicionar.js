import { useEffect,useState } from 'react'
import { View,SafeAreaView, StyleSheet,Text  } from 'react-native';
import { TextInput,Button,Colors,Appbar} from 'react-native-paper';

export default function Adicionar({navigation}){
    const [id, setId] = useState('')
    const [nome, setNome] = useState('')
    const [classe, setClasse] = useState('')
    const [conteudo, setConteudo] = useState('')
    

    return(
        <SafeAreaView>
            <Appbar>
                <Appbar.BackAction onPress={() => { navigation.goBack() }} />
                <Appbar.Content title="Adicionar um Produto" />
            </Appbar>

            <TextInput
            style={styles.item}
            label="nome"
            value={nome}
            />
            <TextInput
            style={styles.item}
            label="classe"
            value={classe}
            />
            <TextInput
            style={styles.item}
            label="conteudo"
            value={conteudo}
            />
            <View>
                <Button
                    style={styles.botao}
                    onPress={()=>adicionarProduto(nome,classe,conteudo)}>Adicionar
                </Button>
            </View>
        </SafeAreaView>
    );

}

const styles=StyleSheet.create({
    item:{
        margin: 5,
        borderWidth: 1,
        borderColor: Colors.black, 
        borderRadius: 4,
        padding: 8,
    }
});