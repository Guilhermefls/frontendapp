import { useEffect,useState } from 'react'
import { View,SafeAreaView, StyleSheet,Text  } from 'react-native';
import { TextInput,Button,Colors,Appbar} from 'react-native-paper';

export default function Detalhes({route,navigation}){
    const [id, setId] = useState('')
    const [nome, setNome] = useState('')
    const [classe, setClasse] = useState('')
    const [conteudo, setConteudo] = useState('')

    async function removerProduto(){
        let resp = await servidor.removerProduto({
          id: id,
          nome: nome,
          quantidade: quantidade,
          preco: preco
        })
    }
    async function editarProduto(){
        let resp = await servidor.editarProduto({
          id: id,
          nome: nome,
          quantidade: quantidade,
          preco: preco
        })
    }
    
    useEffect(() => {
        const restricao = route.params
        if (restricao) {
          setId(restricao.id)
          setNome(restricao.nome)
          setClasse(restricao.classe)
          setConteudo(restricao.conteudo)
        }
      }, [route.params])

    return(
        <SafeAreaView style={styles.container}>
            <Appbar>
                <Appbar.BackAction onPress={() => { navigation.goBack() }} />
                <Appbar.Content title="Detalhes do Produto" />
            </Appbar>

            
            <TextInput
            style={styles.item}
            label="ID"
            value={id}
            editable={false}
            />

            <TextInput
            style={styles.item}
            label="nome"
            value={nome}
            onChangeText={setNome}
            />

            <TextInput
            style={styles.item}
            label="classe"
            value={classe}
            onChangeText={setClasse}
            />

            <TextInput
            style={styles.item}
            label="conteudo"
            value={conteudo}
            onChangeText={setConteudo}
            />

            <View style={styles.barraBotao}>
                <Button
                    style={styles.botao}
                    onPress={removerProduto}>Remover</Button>
                

                <Button
                    style={styles.botao}
                    onPress={editarProduto}>editar</Button>
                
            </View>
        </SafeAreaView>
        
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 5,
        marginTop: 20
      },
    item:{
        margin: 5,
        borderWidth: 1,
        borderColor: Colors.black, 
        borderRadius: 4,
        padding: 8,
    },
    barraBotao: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    botao:{
        backgroundColor:Colors.blue400
    }
    
  });