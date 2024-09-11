import { useState } from 'react'
import { View,SafeAreaView, StyleSheet,Text } from 'react-native';
import { Button,Colors,DataTable} from 'react-native-paper';

export default function Principal({navigation}){
    const [restricoes, setRestricoes] = useState([
        { id: 1, nome: 'Item 1', classe: 'A', conteudo: 'Conteúdo 1' },
        { id: 2, nome: 'Item 2', classe: 'B', conteudo: 'Conteúdo 2' },
    ]);
    function verDetalhes(restricao) {
        navigation.navigate('Detalhes', restricao)
    }
    
    function adicionarProduto() {
        navigation.navigate('Adicionar')
    }

    return(
        <SafeAreaView>
            <Text style={styles.Cabecalho}>aSc Timetables</Text>
            <DataTable>
                <DataTable.Header>
                    <DataTable.Title>Nome</DataTable.Title>
                    <DataTable.Title>Classe</DataTable.Title>
                    <DataTable.Title> conteudo</DataTable.Title>
                </DataTable.Header>
                {restricoes.map((restricao) => (
                <DataTable.Row key={restricao.id}  onPress={()=>verDetalhes(restricao)}>
                    <DataTable.Cell>{restricao.nome}</DataTable.Cell>
                    <DataTable.Cell>{restricao.classe}</DataTable.Cell>
                    <DataTable.Cell>{restricao.conteudo}</DataTable.Cell>
                </DataTable.Row>
                ))}
            </DataTable>
            <View>
            <Button
                style={styles.botao}
                onPress={()=>adicionarProduto()}>Adicionar
            </Button>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    Cabecalho: {
        textAlign: 'center',
        width: '100%',
        backgroundColor:Colors.blue500,
        fontSize:20
    },
    botao:{
        backgroundColor:Colors.blue400,
        width:"10%",
        marginTop:10
    }
  });