import React, { useState } from 'react'; // Importa o React e a função useState do pacote 'react'
import { ScrollView, View, Text, TextInput, TouchableOpacity, StyleSheet, Picker } from 'react-native'; // Importa os componentes necessários do React Native

const App = () => { // Define o componente principal App como uma função

  // Definição dos estados usando o hook useState
  const [esportesSelecionados, setEsportesSelecionados] = useState([]); // Estado para armazenar os esportes selecionados
  const [time1, setTime1] = useState(''); // Estado para armazenar o nome do time 1
  const [time2, setTime2] = useState(''); // Estado para armazenar o nome do time 2
  const [pontosTime1, setPontosTime1] = useState(0); // Estado para armazenar os pontos do time 1
  const [pontosTime2, setPontosTime2] = useState(0); // Estado para armazenar os pontos do time 2
  const [jogadorNome, setJogadorNome] = useState(''); // Estado para armazenar o nome do jogador
  const [numeroCamisa, setNumeroCamisa] = useState(''); // Estado para armazenar o número da camisa do jogador
  const [timeSelecionado, setTimeSelecionado] = useState(null); // Estado para armazenar o time selecionado pelo jogador
  const [jogadores, setJogadores] = useState([]); // Estado para armazenar a lista de jogadores cadastrados

  // Função para cadastrar um novo jogador na lista de jogadores
  const handleCadastroJogador = () => {
    const jogador = { // Cria um novo objeto jogador com os dados fornecidos
      nome: jogadorNome,
      numeroCamisa: numeroCamisa,
      time: timeSelecionado === 1 ? time1 : time2 // Determina o time do jogador com base no time selecionado
    };
    setJogadores([...jogadores, jogador]); // Adiciona o jogador à lista de jogadores
    setJogadorNome(''); // Limpa o campo de nome do jogador
    setNumeroCamisa(''); // Limpa o campo de número da camisa do jogador
  };

  // Função para aumentar os pontos do time selecionado
  const aumentarPontos = (time) => {
    if (time === 1) { // Se o time for o time 1
      setPontosTime1(pontosTime1 + 1); // Incrementa os pontos do time 1
    } else { // Se o time for o time 2
      setPontosTime2(pontosTime2 + 1); // Incrementa os pontos do time 2
    }
  };

  return (
    <View style={styles.container}> {/* Define o estilo do componente View como 'container' */}
      <Text style={styles.header}>Marcador De Pontos Do JIFENA</Text> {/* Define o estilo do componente Text como 'header' e exibe o texto */}

      <ScrollView contentContainerStyle={styles.scrollContainer}> {/* Define o estilo do componente ScrollView como 'scrollContainer' */}
        <View style={styles.formulario}> {/* Define o estilo do componente View como 'formulario' */}
          <Text style={styles.titulo}>Qual esporte</Text> {/* Define o estilo do componente Text como 'titulo' e exibe o texto */}

          <Picker
            selectedValue={esportesSelecionados}
            onValueChange={(itemValue) => setEsportesSelecionados(itemValue)}
            mode="multiple"
            style={styles.select}
          >
            {/* Define o estilo do componente Picker como 'select' e permite a seleção múltipla de esportes */}

            <Picker.Item label="Futsal" value="Futsal" /> {/* Define uma opção no seletor de esportes */}
            <Picker.Item label="Volei" value="Volei" /> {/* Define uma opção no seletor de esportes */}
            <Picker.Item label="Basquete" value="Basquete" /> {/* Define uma opção no seletor de esportes */}
            <Picker.Item label="Handbol" value="Handbol" /> {/* Define uma opção no seletor de esportes */}
          </Picker>

          <Text style={styles.titulo}>Nome do time 1</Text> {/* Define o estilo do componente Text como 'titulo' e exibe o texto */}
          <TextInput
            style={styles.input}
            onChangeText={setTime1}
            value={time1}
          />
          {/* Define o estilo do componente TextInput como 'input' e permite a entrada do nome do time 1 */}

          <Text style={styles.titulo}>Nome do time 2</Text> {/* Define o estilo do componente Text como 'titulo' e exibe o texto */}
          <TextInput
            style={styles.input}
            onChangeText={setTime2}
            value={time2}
          />
          {/* Define o estilo do componente TextInput como 'input' e permite a entrada do nome do time 2 */}

          <Text style={styles.placar}>Placar</Text> {/* Define o estilo do componente Text como 'placar' e exibe o texto */}
          <View style={styles.gridPlacar}> {/* Define o estilo do componente View como 'gridPlacar' */}
            <Text style={styles.pontos}>{time1} = {pontosTime1}</Text> {/* Define o estilo do componente Text como 'pontos' e exibe os pontos do time 1 */}
            <Text style={styles.pontos}>{time2} = {pontosTime2}</Text> {/* Define o estilo do componente Text como 'pontos' e exibe os pontos do time 2 */}
          </View>

          <Text style={styles.tituloFormulario}>Cadastre o Jogador</Text> {/* Define o estilo do componente Text como 'tituloFormulario' e exibe o texto */}
          <Text style={styles.label}>Nome</Text> {/* Define o estilo do componente Text como 'label' e exibe o texto */}
          <TextInput
            style={styles.input}
            onChangeText={setJogadorNome}
            value={jogadorNome}
          />
          {/* Define o estilo do componente TextInput como 'input' e permite a entrada do nome do jogador */}

          <Text style={styles.label}>N° Camisa</Text> {/* Define o estilo do componente Text como 'label' e exibe o texto */}
          <TextInput
            style={styles.input}
            onChangeText={setNumeroCamisa}
            value={numeroCamisa}
          />
          {/* Define o estilo do componente TextInput como 'input' e permite a entrada do número da camisa do jogador */}

          <Text style={styles.tituloFormulario}>Selecione o time do jogador</Text> {/* Define o estilo do componente Text como 'tituloFormulario' e exibe o texto */}
          <View style={styles.gridTimes}> {/* Define o estilo do componente View como 'gridTimes' */}
            <TouchableOpacity onPress={() => setTimeSelecionado(1)} style={styles.botaoTime}>
              <Text style={styles.textoBotao}>{time1}</Text>
            </TouchableOpacity>
            {/* Define o estilo do componente TouchableOpacity como 'botaoTime' e exibe o nome do time 1, 
            componente fornecido pelo React Native que fornece uma área de toque que detecta quando o 
            usuário pressiona nela. Funciona de maneira semelhante ao componente TouchableHighlight, mas 
            com um feedback visual sutil: quando pressionado, a opacidade do filho do TouchableOpacity é bem reduzida. */}

            <TouchableOpacity onPress={() => setTimeSelecionado(2)} style={styles.botaoTime}>
              <Text style={styles.textoBotao}>{time2}</Text>
            </TouchableOpacity>
            {/* Neste trecho, quando o usuário pressionar o componente TouchableOpacity, a função setTimeSelecionado(1) 
            será chamada. Isso define o time selecionado como o time 1. O mesmo padrão se aplica aos outros 
            botões TouchableOpacity no código, cada um com sua própria ação definida no onPress, igual o pontuou aumenta os pontos. */}
            {/* Define o estilo do componente TouchableOpacity como 'botaoTime' e exibe o nome do time 2 */}
          </View>

          <TouchableOpacity onPress={handleCadastroJogador} style={styles.botaoCadastrar}>
            <Text style={styles.textoBotao}>Cadastrar jogador</Text>
          </TouchableOpacity>
          {/* Define o estilo do componente TouchableOpacity como 'botaoCadastrar' e exibe o botão 'Cadastrar jogador' */}

          <Text style={styles.listaTitulo}>Lista de Jogadores</Text> {/* Define o estilo do componente Text como 'listaTitulo' e exibe o texto */}
          {jogadores.map((jogador, index) => (
            <View key={index} style={styles.jogadorItem}>
              <Text>{jogador.nome} - Camisa: {jogador.numeroCamisa} - Time: {jogador.time}</Text>
              <TouchableOpacity onPress={() => aumentarPontos(jogador.time === time1 ? 1 : 2)} style={styles.botaoPontuou}>
                <Text style={styles.textoBotao}>Pontuou</Text>
              </TouchableOpacity>
              {/* Define o estilo do componente TouchableOpacity como 'botaoPontuou' e exibe o botão 'Pontuou' */}
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



