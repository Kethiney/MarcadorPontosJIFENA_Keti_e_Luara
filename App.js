import React, { useState } from 'react'; 
import { ScrollView, View, Text, TextInput, TouchableOpacity, StyleSheet, Picker } from 'react-native';

const App = () => { 

  const [esportesSelecionados, setEsportesSelecionados] = useState([]);
  const [time1, setTime1] = useState(''); 
  const [time2, setTime2] = useState(''); 
  const [pontosTime1, setPontosTime1] = useState(0); 
  const [pontosTime2, setPontosTime2] = useState(0); 
  const [jogadorNome, setJogadorNome] = useState(''); 
  const [numeroCamisa, setNumeroCamisa] = useState(''); 
  const [timeSelecionado, setTimeSelecionado] = useState(null); 
  const [jogadores, setJogadores] = useState([]); 

  const handleCadastroJogador = () => {
    const jogador = { 
      nome: jogadorNome,
      numeroCamisa: numeroCamisa,
      time: timeSelecionado === 1 ? time1 : time2 
    };
    setJogadores([...jogadores, jogador]); 
    setJogadorNome(''); 
    setNumeroCamisa(''); 
  };


  const aumentarPontos = (time) => {
    if (time === 1) { 
      setPontosTime1(pontosTime1 + 1); 
    } else { 
      setPontosTime2(pontosTime2 + 1); 
    }
  };

  return (
    <View style={styles.container}> 
      <Text style={styles.header}>Marcador De Pontos Do JIFENA</Text> 

      <ScrollView contentContainerStyle={styles.scrollContainer}> 
        <View style={styles.formulario}> 
          <Text style={styles.titulo}>Qual esporte</Text> 

          <Picker
            selectedValue={esportesSelecionados}
            onValueChange={(itemValue) => setEsportesSelecionados(itemValue)}
            mode="multiple"
            style={styles.select}
          >

            <Picker.Item label="Futsal" value="Futsal" /> 
            <Picker.Item label="Volei" value="Volei" /> 
            <Picker.Item label="Basquete" value="Basquete" /> 
            <Picker.Item label="Handbol" value="Handbol" /> 
          </Picker>

          <Text style={styles.titulo}>Nome do time 1</Text> 
          <TextInput
            style={styles.input}
            onChangeText={setTime1}
            value={time1}
          />

          <Text style={styles.titulo}>Nome do time 2</Text> {/* Define o estilo do componente Text como 'titulo' e exibe o texto */}
          <TextInput
            style={styles.input}
            onChangeText={setTime2}
            value={time2}
          />

          <Text style={styles.placar}>Placar</Text> 
          <View style={styles.gridPlacar}> 
            <Text style={styles.pontos}>{time1} = {pontosTime1}</Text> 
            <Text style={styles.pontos}>{time2} = {pontosTime2}</Text> 
          </View>

          <Text style={styles.tituloFormulario}>Cadastre o Jogador</Text> 
          <Text style={styles.label}>Nome</Text> 
          <TextInput
            style={styles.input}
            onChangeText={setJogadorNome}
            value={jogadorNome}
          />

          <Text style={styles.label}>N° Camisa</Text> 
          <TextInput
            style={styles.input}
            onChangeText={setNumeroCamisa}
            value={numeroCamisa}
          />

          <Text style={styles.tituloFormulario}>Selecione o time do jogador</Text> 
          <View style={styles.gridTimes}> 
            <TouchableOpacity onPress={() => setTimeSelecionado(1)} style={styles.botaoTime}>
              <Text style={styles.textoBotao}>{time1}</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setTimeSelecionado(2)} style={styles.botaoTime}>
              <Text style={styles.textoBotao}>{time2}</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={handleCadastroJogador} style={styles.botaoCadastrar}>
            <Text style={styles.textoBotao}>Cadastrar jogador</Text>
          </TouchableOpacity>

          <Text style={styles.listaTitulo}>Lista de Jogadores</Text> 
          {jogadores.map((jogador, index) => (
            <View key={index} style={styles.jogadorItem}>
              <Text>{jogador.nome} - Camisa: {jogador.numeroCamisa} - Time: {jogador.time}</Text>
              <TouchableOpacity onPress={() => aumentarPontos(jogador.time === time1 ? 1 : 2)} style={styles.botaoPontuou}>
                <Text style={styles.textoBotao}>Pontuou</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupa todo o espaço disponível na tela
    justifyContent: 'center', // Alinha os itens verticalmente ao centro
    alignItems: 'center', // Alinha os itens horizontalmente ao centro
    paddingHorizontal: 20, // Espaçamento horizontal interno
  },
  scrollContainer: {
    flexGrow: 1, // Permite que o ScrollView cresça conforme necessário
    justifyContent: 'center', // Alinha os itens verticalmente ao centro
  },
  header: {
    fontSize: 24, // Tamanho da fonte
    fontWeight: 'bold', // Espessura da fonte
    marginBottom: 20, // Espaçamento inferior
  },
  formulario: {
    width: '100%', // Largura total
  },
  titulo: {
    fontSize: 18, // Tamanho da fonte
    fontWeight: 'bold', // Espessura da fonte
    marginBottom: 10, // Espaçamento inferior
  },
  select: {
    marginBottom: 20, // Espaçamento inferior
    borderColor: '#ccc', // Cor da borda
    borderWidth: 1, // Largura da borda
    borderRadius: 5, // Raio do canto da borda
    paddingHorizontal: 10, // Preenchimento horizontal interno
  },
  input: {
    borderWidth: 1, // Largura da borda
    borderColor: '#ccc', // Cor da borda
    borderRadius: 5, // Raio do canto da borda
    paddingHorizontal: 10, // Preenchimento horizontal interno
    marginBottom: 10, // Espaçamento inferior
  },
  placar: {
    fontSize: 18, // Tamanho da fonte
    fontWeight: 'bold', // Espessura da fonte
    marginBottom: 10, // Espaçamento inferior
  },
  gridPlacar: {
    flexDirection: 'row', // Disposição dos itens em linha
    justifyContent: 'space-between', // Espaçamento uniforme entre os itens
    marginBottom: 20, // Espaçamento inferior
  },
  pontos: {
    fontSize: 16, // Tamanho da fonte
  },
  tituloFormulario: {
    fontSize: 18, // Tamanho da fonte
    fontWeight: 'bold', // Espessura da fonte
    marginBottom: 10, // Espaçamento inferior
  },
  label: {
    fontSize: 16, // Tamanho da fonte
    marginBottom: 5, // Espaçamento inferior
  },
  gridTimes: {
    flexDirection: 'row', // Disposição dos itens em linha
    justifyContent: 'space-between', // Espaçamento uniforme entre os itens
    marginBottom: 20, // Espaçamento inferior
  },
  botaoTime: {
    backgroundColor: '#969fa8', // Cor de fundo do botão
    padding: 10, // Preenchimento interno
    borderRadius: 5, // Raio do canto do botão
    flex: 1, // Expandir para ocupar o espaço disponível
    alignItems: 'center', // Alinhar os itens horizontalmente ao centro
    marginRight: 10, // Margem à direita
  },
  textoBotao: {
    color: '#fff', // Cor do texto
  },
  botaoCadastrar: {
    backgroundColor: '#16181a', // Cor de fundo do botão
    padding: 10, // Preenchimento interno
    borderRadius: 5, // Raio do canto do botão
    alignItems: 'center', // Alinhar os itens horizontalmente ao centro
    marginBottom: 20, // Espaçamento inferior
  },
  listaTitulo: {
    fontSize: 18, // Tamanho da fonte
    fontWeight: 'bold', // Espessura da fonte
    marginBottom: 10, // Espaçamento inferior
  },
  jogadorItem: {
    flexDirection: 'row', // Disposição dos itens em linha
    justifyContent: 'space-between', // Espaçamento uniforme entre os itens
    alignItems: 'center', // Alinhar os itens verticalmente ao centro
    marginBottom: 10, // Espaçamento inferior
  },
  botaoPontuou: {
    backgroundColor: '#ccc', // Cor de fundo do botão
    paddingVertical: 5, // Preenchimento vertical
    paddingHorizontal: 10, // Preenchimento horizontal
    borderRadius: 5, // Raio do canto do botão
    marginLeft: 10, // Margem à esquerda
  },
});


export default App; // Exporta o componente App como padrão



