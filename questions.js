
// Questions database for Portuguese figures of speech - Vestibular/ENEM level
const questionsDatabase = {
  metafora: [
    {
      question: 'Analise o verso de Carlos Drummond de Andrade: "No meio do caminho tinha uma pedra / tinha uma pedra no meio do caminho". A repetição obsessiva da imagem da pedra funciona como:',
      options: ['Metáfora dos obstáculos existenciais', 'Metonímia da dureza da vida', 'Personificação do destino', 'Hipérbole do sofrimento'],
      correct: 0,
      explanation: 'A pedra representa metaforicamente os obstáculos e dificuldades que encontramos no percurso da vida, sendo uma das metáforas mais conhecidas da literatura brasileira.'
    },
    {
      question: 'Em "Vou-me embora pra Pasárgada" (Manuel Bandeira), Pasárgada representa metaforicamente:',
      options: ['Uma cidade real da Pérsia', 'O mundo ideal e utópico', 'A infância perdida', 'O paraíso religioso'],
      correct: 1,
      explanation: 'Pasárgada é uma metáfora do mundo ideal, do lugar onde todos os desejos se realizam, contrapondo-se à realidade frustrante.'
    },
    {
      question: 'No verso "Minha terra tem palmeiras onde canta o sabiá" (Gonçalves Dias), as palmeiras e o sabiá funcionam como:',
      options: ['Símbolos da fauna brasileira', 'Metáforas da pátria idealizada', 'Metonímias do território nacional', 'Personificações da natureza'],
      correct: 1,
      explanation: 'As palmeiras e o sabiá são metáforas que representam a pátria idealizada pelo poeta romântico, evocando a nostalgia da terra natal.'
    },
    {
      question: 'Em "Morte e Vida Severina" (João Cabral), quando o retirante diz "somos muitos Severinos", isso constitui:',
      options: ['Metáfora da massificação social', 'Hipérbole da pobreza', 'Ironia da condição humana', 'Antítese entre vida e morte'],
      correct: 0,
      explanation: 'A repetição do nome Severino metaforiza a perda de individualidade e a massificação dos retirantes nordestinos.'
    },
    {
      question: 'No poema "O Navio Negreiro" (Castro Alves), o navio é metáfora de:',
      options: ['Progresso da navegação', 'Inferno da escravidão', 'Aventura marítima', 'Colonização brasileira'],
      correct: 1,
      explanation: 'O navio negreiro é metaforizado como um inferno flutuante, representando o horror e a desumanização da escravidão.'
    },
    {
      question: 'Em "O Cortiço" (Aluísio Azevedo), quando o narrador se refere ao cortiço como "uma colmeia humana", temos:',
      options: ['Comparação explícita', 'Metáfora animalesca', 'Personificação do ambiente', 'Sinestesia urbana'],
      correct: 1,
      explanation: 'A metáfora da colmeia representa a vida coletiva e organizada do cortiço, onde cada morador tem sua função como as abelhas.'
    },
    {
      question: 'No verso "A vida é uma ópera" (Machado de Assis), a metáfora sugere que:',
      options: ['A vida é artificial', 'Somos todos atores sociais', 'A existência é teatral', 'Todas as anteriores'],
      correct: 3,
      explanation: 'A metáfora machadiana compara a vida à ópera, sugerindo artificialidade, teatralidade e que representamos papéis sociais.'
    },
    {
      question: 'Em "Quarto de despejo" (Carolina Maria de Jesus), quando a autora chama a favela de "quarto de despejo", há:',
      options: ['Metonímia espacial', 'Metáfora social crítica', 'Ironia amarga', 'Eufemismo habitacional'],
      correct: 1,
      explanation: 'A metáfora critica a marginalização social, comparando a favela a um local onde se jogam coisas indesejadas.'
    }
  ],
  
  metonimia: [
    {
      question: 'No verso "Não permita Deus que eu morra / Sem que eu volte para lá" (Gonçalves Dias), "lá" substitui metonimicamente:',
      options: ['O lugar físico', 'A pátria amada', 'O tempo perdido', 'A juventude'],
      correct: 1,
      explanation: 'O advérbio "lá" substitui metonimicamente "pátria", criando um efeito de proximidade afetiva com a terra natal.'
    },
    {
      question: 'Em "Dom Casmurro", quando o narrador diz "consultei os mortos", a metonímia se refere a:',
      options: ['Espíritos do além', 'Livros de autores falecidos', 'Memórias do passado', 'Túmulos no cemitério'],
      correct: 1,
      explanation: 'Machado usa "mortos" metonimicamente para se referir aos livros e às obras dos autores já falecidos.'
    },
    {
      question: 'Na expressão "O Planalto anunciou novas medidas", temos uma metonímia que substitui:',
      options: ['O governo federal', 'A geografia brasiliense', 'O Palácio da Alvorada', 'O Congresso Nacional'],
      correct: 0,
      explanation: 'O Planalto (lugar) substitui metonimicamente o governo federal, sendo uma metonímia muito comum no jornalismo político.'
    },
    {
      question: 'Em "Toquei Chopin a noite toda", a construção metonímica indica:',
      options: ['Conhecer o compositor', 'Executar suas composições', 'Estudar sua biografia', 'Visitar sua terra natal'],
      correct: 1,
      explanation: 'O nome do compositor (Chopin) substitui metonimicamente suas obras musicais que foram executadas.'
    },
    {
      question: 'No contexto "Hollywood está preocupada com a pirataria", a metonímia refere-se:',
      options: ['À cidade americana', 'Aos estúdios cinematográficos', 'Aos atores famosos', 'À indústria do entretenimento'],
      correct: 3,
      explanation: 'Hollywood (lugar) substitui metonimicamente toda a indústria cinematográfica e do entretenimento.'
    },
    {
      question: 'Em "Bebeu a garrafa inteira", a metonímia substitui:',
      options: ['O vidro da garrafa', 'O conteúdo da garrafa', 'O formato da garrafa', 'A marca da bebida'],
      correct: 1,
      explanation: 'A garrafa (continente) substitui metonimicamente seu conteúdo (a bebida), tipo clássico de metonímia.'
    },
    {
      question: 'Na frase "Ele tem um bom coração", temos metonímia que indica:',
      options: ['Saúde cardiovascular', 'Bondade de caráter', 'Força física', 'Inteligência emocional'],
      correct: 1,
      explanation: 'O coração (órgão físico) substitui metonimicamente a bondade e os sentimentos nobres.'
    },
    {
      question: 'Em "Ele ganhou o pão de cada dia", a expressão metonímica refere-se a:',
      options: ['Trabalho em padaria', 'Sustento básico', 'Alimentação específica', 'Renda mínima'],
      correct: 1,
      explanation: 'O pão substitui metonimicamente o sustento básico e necessário para a sobrevivência.'
    }
  ],
  
  hiperbole: [
    {
      question: 'No poema "Quadrilha" (Carlos Drummond de Andrade), o verso "João amava Teresa que amava Raimundo" sugere, através da hipérbole temporal:',
      options: ['Eternidade do amor', 'Ciclo infinito de desencontros', 'Brevidade dos sentimentos', 'Intensidade das paixões'],
      correct: 1,
      explanation: 'A hipérbole está na apresentação de um ciclo aparentemente infinito de amores não correspondidos, exagerando a condição humana dos desencontros.'
    },
    {
      question: 'Em "Auto da Compadecida" (Ariano Suassuna), quando João Grilo diz que mentiu "mais de mil vezes", isso caracteriza:',
      options: ['Confissão literal', 'Hipérbole confessional', 'Ironia autodepreciativa', 'Metáfora existencial'],
      correct: 1,
      explanation: 'O exagero numérico "mais de mil vezes" hiperbólicamente amplifica a quantidade de mentiras para efeito dramático.'
    },
    {
      question: 'No verso "Eu morro de amor por você" (linguagem popular), a hipérbole expressa:',
      options: ['Morte literal', 'Intensidade do sentimento', 'Desespero suicida', 'Ironia romântica'],
      correct: 1,
      explanation: 'A hipérbole "morrer de amor" exagera a intensidade do sentimento amoroso, sendo uma figura comum na linguagem popular.'
    },
    {
      question: 'Quando Camões escreve "Amor é fogo que arde sem se ver", o aspecto hiperbólico reside em:',
      options: ['Fogo invisível', 'Combustão eterna', 'Intensidade absoluta', 'Contradição física'],
      correct: 2,
      explanation: 'A hipérbole está na intensidade absoluta do amor como fogo que nunca se extingue, exagerando sua força permanente.'
    },
    {
      question: 'No Barroco brasileiro, a hipérbole "pecador de mil pecados" (Gregório de Matos) enfatiza:',
      options: ['Quantidade exata de pecados', 'Exagero da condição pecaminosa', 'Ironia religiosa', 'Confissão detalhada'],
      correct: 1,
      explanation: 'A expressão hiperbólica exagera a condição de pecador, intensificando o tom confessional típico da poesia barroca.'
    },
    {
      question: 'Na expressão "Chorou rios de lágrimas", a hipérbole:',
      options: ['Descreve volume real', 'Exagera a tristeza', 'Cria impossibilidade física', 'Indica desidratação'],
      correct: 1,
      explanation: 'A hipérbole exagera a quantidade de lágrimas para expressar a intensidade da tristeza ou dor.'
    },
    {
      question: 'Em "Esperei uma eternidade", temos hipérbole que:',
      options: ['Marca tempo real', 'Exagera a duração da espera', 'Indica impaciência', 'Mede precisão temporal'],
      correct: 1,
      explanation: 'A hipérbole exagera o tempo de espera, transformando minutos ou horas em "eternidade" para expressar ansiedade.'
    },
    {
      question: 'Na frase "Estou morrendo de fome", a hipérbole popular indica:',
      options: ['Estado de inanição', 'Exagero da sensação', 'Emergência médica', 'Distúrbio alimentar'],
      correct: 1,
      explanation: 'A hipérbole exagera a sensação de fome para expressar que se está com muita vontade de comer.'
    }
  ],
  
  ironia: [
    {
      question: 'Em "Dom Casmurro", a ironia machadiana se manifesta quando o narrador:',
      options: ['Conta fatos objetivamente', 'Questiona sua própria memória', 'Confessa seus ciúmes abertamente', 'Elogia Capitu constantemente'],
      correct: 1,
      explanation: 'Machado usa ironia ao fazer o narrador questionar a própria memória, criando ambiguidade sobre a veracidade dos fatos narrados.'
    },
    {
      question: 'No texto "O Alienista" (Machado de Assis), a ironia está no fato de que:',
      options: ['O médico cura todos os pacientes', 'O médico se interna como louco', 'A cidade aceita os métodos científicos', 'Os loucos se tornam sãos'],
      correct: 1,
      explanation: 'A ironia culmina quando Simão Bacamarte, após internar quase toda a cidade, conclui que ele próprio é o único louco.'
    },
    {
      question: 'Em "O Cortiço" (Aluísio Azevedo), quando o narrador descreve Miranda como "homem respeitável", considerando seus atos, há:',
      options: ['Sinceridade narrativa', 'Ironia social', 'Elogio genuíno', 'Neutralidade descritiva'],
      correct: 1,
      explanation: 'A ironia reside no contraste entre a aparência de "respeitabilidade" social e os comportamentos questionáveis da personagem.'
    },
    {
      question: 'No verso "Quem sabe se não foi por isso que Nosso Senhor Jesus Cristo não desceu à Terra?" (Ariano Suassuna), a ironia sugere:',
      options: ['Dúvida religiosa', 'Crítica social', 'Blasfêmia intencional', 'Questionamento teológico'],
      correct: 1,
      explanation: 'A ironia critica as condições sociais, sugerindo que são tão adversas que nem Jesus desceria para vivenciá-las.'
    },
    {
      question: 'Em "Memórias Póstumas de Brás Cubas", a ironia fundamental é:',
      options: ['Um morto narrar sua vida', 'Crítica à sociedade do século XIX', 'Amor não correspondido', 'Fracasso profissional'],
      correct: 0,
      explanation: 'A ironia principal é estrutural: um defunto autor que narra suas próprias memórias, subvertendo as convenções narrativas.'
    },
    {
      question: 'Na crônica machadiana, quando critica "nossos homens sérios", há ironia porque:',
      options: ['Elogia a seriedade', 'Questiona a falsa seriedade', 'Defende tradições', 'Promove mudanças'],
      correct: 1,
      explanation: 'Machado ironicamente questiona a seriedade aparente, sugerindo superficialidade por trás da pose solene.'
    },
    {
      question: 'Em "Que bela democracia!" (sobre situação autoritária), temos ironia que:',
      options: ['Elogia o sistema', 'Critica por contraste', 'Demonstra ignorância', 'Expressa conformismo'],
      correct: 1,
      explanation: 'A ironia critica usando o contrário: elogiar "democracia" em contexto autoritário expõe a contradição.'
    },
    {
      question: 'No conto "A Cartomante" (Machado), a ironia do destino está em:',
      options: ['Predição se realizar', 'Camilo morrer por ciúmes', 'Rita abandonar Vilela', 'Cartomante acertar tudo'],
      correct: 1,
      explanation: 'A ironia está em Camilo morrer exatamente pelo ciúme que a cartomante disse para não temer.'
    }
  ],
  
  personificacao: [
    {
      question: 'No verso "O tempo pergunta ao tempo qual o tempo que o tempo tem" (Vinícius de Moraes), a personificação:',
      options: ['Humaniza o tempo abstrato', 'Cria paradoxo temporal', 'Estabelece diálogo impossível', 'Todas as anteriores'],
      correct: 3,
      explanation: 'A personificação humaniza o tempo (capacidade de perguntar), cria paradoxo (tempo perguntando a si mesmo) e estabelece diálogo impossível.'
    },
    {
      question: 'Em "Morte e Vida Severina", quando João Cabral escreve "a vida se derrete", há:',
      options: ['Metáfora da liquidez', 'Personificação da vida', 'Hipérbole da miséria', 'Sinestesia temporal'],
      correct: 1,
      explanation: 'A personificação atribui à vida abstrata a capacidade física de "derreter", tornando palpável sua fragilidade.'
    },
    {
      question: 'No Romantismo, quando Castro Alves escreve "A natureza ama", isso representa:',
      options: ['Visão científica da natureza', 'Personificação romântica', 'Metáfora do amor humano', 'Conceito filosófico'],
      correct: 1,
      explanation: 'Típica personificação romântica que atribui sentimentos humanos (amor) à natureza, idealizando-a.'
    },
    {
      question: 'Em "Eu sou aquele que grita / quando o silêncio machuca" (autor contemporâneo), o silêncio personificado:',
      options: ['Representa ausência sonora', 'Ganha capacidade de ferir', 'Simboliza paz interior', 'Indica surdez física'],
      correct: 1,
      explanation: 'A personificação dá ao silêncio (abstrato) a capacidade humana de machucar, intensificando seu efeito psicológico.'
    },
    {
      question: 'No verso "A noite caminha pesada" (linguagem poética), a personificação sugere:',
      options: ['Movimento físico da Terra', 'Lentidão temporal subjetiva', 'Peso atmosférico', 'Escuridão densa'],
      correct: 1,
      explanation: 'A personificação humaniza a noite com capacidade de caminhar, sugerindo a percepção subjetiva de tempo que passa lentamente.'
    },
    {
      question: 'Em "O vento sussurra segredos", a personificação atribui ao vento:',
      options: ['Capacidade sonora', 'Habilidade comunicativa', 'Conhecimento oculto', 'Todas as anteriores'],
      correct: 3,
      explanation: 'A personificação dá ao vento capacidades humanas: sussurrar (falar), comunicar e possuir segredos (conhecimento).'
    },
    {
      question: 'Na expressão "A cidade que nunca dorme", temos personificação que sugere:',
      options: ['Atividade noturna', 'Vida urbana intensa', 'Humanização do espaço', 'Todas as anteriores'],
      correct: 3,
      explanation: 'A personificação humaniza a cidade dando-lhe necessidade humana (dormir), sugerindo vida intensa e atividade constante.'
    },
    {
      question: 'Em "A lua sorri para os namorados", a personificação romântica:',
      options: ['Descreve fase lunar', 'Humaniza o astro', 'Cria atmosfera poética', 'Indica benevolência celestial'],
      correct: 1,
      explanation: 'A personificação atribui capacidade humana (sorrir) à lua, criando efeito poético e romântico.'
    }
  ],
  
  antitese: [
    {
      question: 'No soneto "Alma minha gentil" (Camões), a antítese "vida de minha vida" / "morte de minha morte" expressa:',
      options: ['Contradição lógica', 'Paradoxo amoroso', 'Intensidade dos contrastes vitais', 'Erro de composição'],
      correct: 2,
      explanation: 'A antítese intensifica os contrastes entre vida e morte, mostrando como a amada era fonte tanto de vida quanto de morte simbólica.'
    },
    {
      question: 'Em Gregório de Matos, o verso "ardor em firme coração nascido" apresenta antítese entre:',
      options: ['Ardor e frieza', 'Nascimento e morte', 'Firmeza e instabilidade emocional', 'Coração e razão'],
      correct: 2,
      explanation: 'A antítese contrapõe "ardor" (paixão instável) com "firme coração" (estabilidade emocional), típica do conflito barroco.'
    },
    {
      question: 'No verso "É ferida que dói e não se sente" (Camões), a antítese revela:',
      options: ['Contradição física impossível', 'Paradoxo da dor amorosa', 'Erro médico', 'Anestesia emocional'],
      correct: 1,
      explanation: 'A antítese expressa o paradoxo do amor: uma ferida que causa dor mas é prazerosa, típica da dialética amorosa camoniana.'
    },
    {
      question: 'Em "Negro drama" (Racionais MCs), a antítese "preto tipo A, veja bem" / "procurado pela polícia" revela:',
      options: ['Contradição social', 'Preconceito racial', 'Crítica ao sistema', 'Todas as anteriores'],
      correct: 3,
      explanation: 'A antítese expõe a contradição entre ser "tipo A" (pessoa exemplar) e ser "procurado" (marginalizado), criticando o preconceito racial.'
    },
    {
      question: 'Na expressão "silêncio ensurdecedor", temos antítese que sugere:',
      options: ['Impossibilidade física', 'Intensidade extrema da ausência', 'Problema auditivo', 'Contradição semântica'],
      correct: 1,
      explanation: 'A antítese paradoxal intensifica a ausência de som ao ponto de torná-la quase física, criando efeito expressivo.'
    },
    {
      question: 'Em "doce amargura", a antítese expressa:',
      options: ['Sabor indefinido', 'Contradição gustativa', 'Paradoxo sentimental', 'Erro de percepção'],
      correct: 2,
      explanation: 'A antítese expressa paradoxo sentimental: algo que causa sofrimento mas também prazer.'
    },
    {
      question: 'No verso "claro escuro" (técnica pictórica), a antítese sugere:',
      options: ['Erro de iluminação', 'Contraste visual', 'Indefinição cromática', 'Problema de visão'],
      correct: 1,
      explanation: 'A antítese expressa o contraste entre luz e sombra, técnica artística que valoriza o jogo de opostos.'
    },
    {
      question: 'Na expressão "guerra fria", temos antítese que indica:',
      options: ['Conflito em clima frio', 'Tensão sem combate direto', 'Batalha congelada', 'Hostilidade gelada'],
      correct: 1,
      explanation: 'A antítese "guerra fria" expressa paradoxo: conflito (guerra) sem combate direto (fria), caracterizando tensão política.'
    }
  ],
  
  comparacao: [
    {
      question: 'No verso "Ó mar salgado, quanto do teu sal são lágrimas de Portugal!" (Fernando Pessoa), a comparação estabelece relação entre:',
      options: ['Mar e tristeza nacional', 'Sal e lágrimas físicas', 'Portugal e oceano', 'Navegação e sofrimento'],
      correct: 0,
      explanation: 'A comparação relaciona poeticamente o sal do mar com as lágrimas de sofrimento de Portugal pelas navegações e descobrimentos.'
    },
    {
      question: 'Em "Seus olhos como dois faróis" (linguagem poética), a comparação sugere:',
      options: ['Luminosidade ocular', 'Orientação e brilho', 'Semelhança física', 'Função visual'],
      correct: 1,
      explanation: 'A comparação sugere que os olhos, como faróis, proporcionam orientação e brilho, guiando quem os contempla.'
    },
    {
      question: 'No verso "Como o vento nos galhos" (Cecília Meireles), a comparação evoca:',
      options: ['Movimento físico', 'Leveza e mobilidade', 'Força destrutiva', 'Sussurro natural'],
      correct: 1,
      explanation: 'A comparação evoca a leveza e mobilidade do vento através dos galhos, criando imagem de delicadeza e movimento.'
    },
    {
      question: 'Em "Forte como a morte é o amor" (texto bíblico), a comparação indica:',
      options: ['Morbidez do amor', 'Intensidade equivalente', 'Destino inevitável', 'Fim das relações'],
      correct: 1,
      explanation: 'A comparação estabelece equivalência de intensidade entre amor e morte, ambos como forças absolutas e inevitáveis.'
    },
    {
      question: 'No verso "Noite fechada como breu", a comparação enfatiza:',
      options: ['Hora específica', 'Escuridão absoluta', 'Material betuminoso', 'Encerramento temporal'],
      correct: 1,
      explanation: 'A comparação com "breu" (substância muito escura) enfatiza o grau máximo de escuridão da noite.'
    },
    {
      question: 'Em "Veloz como o pensamento", a comparação destaca:',
      options: ['Capacidade mental', 'Rapidez extrema', 'Agilidade física', 'Processo cognitivo'],
      correct: 1,
      explanation: 'A comparação usa a rapidez do pensamento para destacar velocidade extrema de movimento ou ação.'
    },
    {
      question: 'Na comparação "doce como mel", o conectivo evidencia:',
      options: ['Produto apícola', 'Grau máximo de doçura', 'Sabor específico', 'Qualidade nutritiva'],
      correct: 1,
      explanation: 'A comparação com mel estabelece padrão máximo de doçura, tanto literal quanto figuradamente.'
    },
    {
      question: 'Em "branco como neve", temos comparação que indica:',
      options: ['Fenômeno meteorológico', 'Pureza absoluta', 'Cor específica', 'Temperatura baixa'],
      correct: 1,
      explanation: 'A comparação com neve estabelece padrão de brancura e pureza, frequentemente usada para virgindade ou inocência.'
    }
  ],
  
  sinestesia: [
    {
      question: 'No verso "Perfume doce e quente" (Cruz e Sousa), a sinestesia combina:',
      options: ['Olfato, paladar e tato', 'Visão e audição', 'Apenas olfato e paladar', 'Tato e audição'],
      correct: 0,
      explanation: 'A sinestesia combina olfato (perfume), paladar (doce) e tato (quente), criando experiência sensorial múltipla típica do Simbolismo.'
    },
    {
      question: 'Em "som azul" (linguagem poética moderna), a sinestesia sugere:',
      options: ['Impossibilidade física', 'Fusão audição/visão', 'Erro perceptivo', 'Metáfora cromática'],
      correct: 1,
      explanation: 'A sinestesia funde audição (som) com visão (azul), criando percepção poética que transcende os sentidos individuais.'
    },
    {
      question: 'No verso "luz morna" (Alphonsus de Guimaraens), há combinação entre:',
      options: ['Visão e tato', 'Audição e olfato', 'Paladar e visão', 'Tato e audição'],
      correct: 0,
      explanation: 'A sinestesia combina visão (luz) com tato (morna), criando sensação visual-tátil característica da poesia simbolista.'
    },
    {
      question: 'Em "gritos verdes" (vanguarda poética), a sinestesia provoca:',
      options: ['Nonsense poético', 'Efeito sinestésico audição/visão', 'Metáfora ecológica', 'Simbolismo cromático'],
      correct: 1,
      explanation: 'A sinestesia provoca efeito poético ao combinar audição (gritos) com visão (verdes), típico da experimentação vanguardista.'
    },
    {
      question: 'Na expressão "música colorida", temos sinestesia que:',
      options: ['Descreve espetáculo visual', 'Combina som e cor', 'Refere-se à partitura', 'Indica ritmo visual'],
      correct: 1,
      explanation: 'A sinestesia combina percepção auditiva (música) com visual (colorida), criando experiência sensorial integrada.'
    },
    {
      question: 'Em "sabor áspero", a sinestesia une:',
      options: ['Paladar e tato', 'Olfato e visão', 'Audição e paladar', 'Tato e olfato'],
      correct: 0,
      explanation: 'A sinestesia combina paladar (sabor) com tato (áspero), transferindo sensação tátil para gustativa.'
    },
    {
      question: 'Na expressão "voz aveludada", temos sinestesia:',
      options: ['Audição e tato', 'Visão e som', 'Paladar e audição', 'Olfato e tato'],
      correct: 0,
      explanation: 'A sinestesia combina audição (voz) com tato (aveludada), atribuindo textura macia ao som vocal.'
    },
    {
      question: 'Em "cheiro verde" (culinária), a sinestesia popular indica:',
      options: ['Cor dos temperos', 'Olfato e visão combinados', 'Frescor aromático', 'Todas as anteriores'],
      correct: 3,
      explanation: 'A expressão combina olfato (cheiro) com visão (verde), indicando cor, frescor e aroma dos temperos.'
    }
  ],
  
  eufemismo: [
    {
      question: 'Na literatura brasileira, quando se refere aos escravizados como "peças", há:',
      options: ['Eufemismo econômico', 'Metáfora objetual', 'Metonímia comercial', 'Todas as anteriores'],
      correct: 3,
      explanation: 'O termo "peças" funciona como eufemismo (suaviza "escravos"), metáfora (pessoas como objetos) e metonímia (valor comercial).'
    },
    {
      question: 'A expressão "conflito armado" em lugar de "guerra" constitui:',
      options: ['Precisão terminológica', 'Eufemismo diplomático', 'Linguagem técnica', 'Neutralidade jornalística'],
      correct: 1,
      explanation: 'É eufemismo diplomático que suaviza a gravidade da "guerra", sendo comum em discursos oficiais e mídia.'
    },
    {
      question: 'Quando se diz "economicamente desfavorecido" em vez de "pobre", temos:',
      options: ['Descrição sociológica', 'Eufemismo social', 'Linguagem acadêmica', 'Politicamente correto'],
      correct: 1,
      explanation: 'É eufemismo que suaviza a condição de pobreza com linguagem mais palatável socialmente.'
    },
    {
      question: 'No jornalismo, "baixas civis" substitui eufemisticamente:',
      options: ['Feridos em combate', 'Mortos civis em guerra', 'Danos materiais', 'Refugiados de guerra'],
      correct: 1,
      explanation: 'O eufemismo "baixas civis" ameniza a brutalidade de "civis mortos", sendo comum no jornalismo de guerra.'
    },
    {
      question: 'A expressão "terceira idade" em lugar de "velhice" representa:',
      options: ['Classificação etária', 'Eufemismo social', 'Termo médico', 'Linguagem respeitosa'],
      correct: 1,
      explanation: 'É eufemismo que substitui "velhice" por expressão considerada mais digna e menos pejorativa.'
    },
    {
      question: 'Quando alguém "partiu desta para melhor", temos eufemismo para:',
      options: ['Mudança de cidade', 'Morte natural', 'Melhoria de vida', 'Viagem definitiva'],
      correct: 1,
      explanation: 'É eufemismo que suaviza a ideia de morte, sugerindo passagem para algo melhor.'
    },
    {
      question: 'A expressão "descanso eterno" eufemisticamente indica:',
      options: ['Férias prolongadas', 'Aposentadoria', 'Morte pacífica', 'Sono profundo'],
      correct: 2,
      explanation: 'É eufemismo que apresenta a morte como descanso, amenizando seu aspecto definitivo e doloroso.'
    },
    {
      question: 'Em "pessoa com deficiência visual" (em vez de "cego"), há:',
      options: ['Precisão médica', 'Eufemismo inclusivo', 'Terminologia científica', 'Linguagem politicamente correta'],
      correct: 1,
      explanation: 'É eufemismo que visa inclusão e respeito, substituindo termo considerado mais direto ou pejorativo.'
    }
  ],
  
  pleonasmo: [
    {
      question: 'No verso "E rir meu riso e derramar meu pranto" (Vinícius de Moraes), o pleonasmo é:',
      options: ['Vício de linguagem', 'Recurso estilístico intencional', 'Erro do poeta', 'Redundância desnecessária'],
      correct: 1,
      explanation: 'É pleonasmo literário intencional que intensifica a posse dos sentimentos ("meu riso", "meu pranto"), criando efeito expressivo.'
    },
    {
      question: 'Na construção "chorar lágrimas de sangue", o pleonasmo:',
      options: ['É vicioso e deve ser evitado', 'Intensifica dramaticamente a dor', 'Constitui erro gramatical', 'Demonstra ignorância'],
      correct: 1,
      explanation: 'É pleonasmo literário que intensifica o sofrimento através da redundância estilística, comum na linguagem poética.'
    },
    {
      question: 'Em "vou subir lá em cima", temos pleonasmo:',
      options: ['Literário aceito', 'Vicioso da linguagem coloquial', 'Regionalismo válido', 'Ênfase necessária'],
      correct: 1,
      explanation: 'É pleonasmo vicioso comum na oralidade, pois "subir" já implica movimento para cima, tornando "lá em cima" redundante.'
    },
    {
      question: 'O pleonasmo em "ver com os próprios olhos" funciona como:',
      options: ['Erro a ser corrigido', 'Ênfase na experiência pessoal', 'Vício linguístico', 'Regionalismo'],
      correct: 1,
      explanation: 'É pleonasmo que enfatiza a experiência direta e pessoal, diferenciando de informações de segunda mão.'
    },
    {
      question: 'Na frase "conviver junto", o pleonasmo é considerado:',
      options: ['Literário expressivo', 'Vicioso e redundante', 'Regionalmente aceito', 'Tecnicamente correto'],
      correct: 1,
      explanation: 'É pleonasmo vicioso, pois "conviver" já significa "viver junto", tornando "junto" redundante e desnecessário.'
    },
    {
      question: 'Em "ouvir com os ouvidos", temos pleonasmo:',
      options: ['Enfático válido', 'Vicioso e desnecessário', 'Didático apropriado', 'Literário expressivo'],
      correct: 1,
      explanation: 'É pleonasmo vicioso, pois "ouvir" já pressupõe o uso dos ouvidos, tornando a especificação redundante.'
    },
    {
      question: 'Na expressão "surpresa inesperada", o pleonasmo indica:',
      options: ['Ênfase na surpresa', 'Redundância viciosa', 'Intensificação válida', 'Esclarecimento necessário'],
      correct: 1,
      explanation: 'É pleonasmo vicioso, pois "surpresa" já implica algo inesperado, tornando "inesperada" redundante.'
    },
    {
      question: 'Em "descer para baixo", temos exemplo de:',
      options: ['Pleonasmo estilístico', 'Pleonasmo vicioso', 'Ênfase direcional', 'Precisão espacial'],
      correct: 1,
      explanation: 'É pleonasmo vicioso típico da oralidade, pois "descer" já indica movimento para baixo.'
    }
  ],

  paradoxo: [
    {
      question: 'No verso "É ferida que dói e não se sente" (Camões), o paradoxo expressa:',
      options: ['Contradição médica', 'Natureza contraditória do amor', 'Anestesia emocional', 'Impossibilidade física'],
      correct: 1,
      explanation: 'O paradoxo camoniano expressa a natureza contraditória do amor: causa dor mas é desejado, machuca mas traz prazer.'
    },
    {
      question: 'Em "Docemente amarga" (oxímoro), o paradoxo sugere:',
      options: ['Sabor indefinido', 'Experiência contraditória', 'Erro gustativo', 'Mistura de sabores'],
      correct: 1,
      explanation: 'O paradoxo expressa experiência que combina elementos opostos simultaneamente, criando tensão poética.'
    },
    {
      question: 'Na expressão "silêncio eloquente", temos paradoxo que indica:',
      options: ['Comunicação sem palavras', 'Contradição lógica', 'Quietude expressiva', 'Todas as anteriores'],
      correct: 3,
      explanation: 'O paradoxo mostra como o silêncio pode comunicar tanto quanto palavras, sendo contraditório mas expressivo.'
    },
    {
      question: 'Em "menos é mais" (design/arquitetura), o paradoxo sugere:',
      options: ['Erro matemático', 'Simplicidade como riqueza', 'Economia de recursos', 'Minimização excessiva'],
      correct: 1,
      explanation: 'O paradoxo expressa que a simplicidade pode ser mais rica e eficaz que a complexidade excessiva.'
    },
    {
      question: 'No verso "Amor é fogo que arde sem se ver" (Camões), o paradoxo reside em:',
      options: ['Combustão invisível', 'Paixão imperceptível', 'Fogo sem luz', 'Calor sem chama'],
      correct: 0,
      explanation: 'O paradoxo está na imagem de fogo que queima mas não se vê, expressando amor que consome internamente.'
    }
  ],

  anafora: [
    {
      question: 'No poema "Oração ao Tempo" (Caetano Veloso), a repetição "És um senhor tão bonito" constitui:',
      options: ['Anáfora enfática', 'Refrão musical', 'Pleonasmo estilístico', 'Paralelismo sintático'],
      correct: 0,
      explanation: 'A anáfora repete a estrutura inicial para enfatizar a admiração e reverência ao tempo.'
    },
    {
      question: 'Em "Morte e Vida Severina", a repetição "E se somos Severinos" configura:',
      options: ['Anáfora identitária', 'Refrão narrativo', 'Paralelismo social', 'Todas as anteriores'],
      correct: 3,
      explanation: 'A anáfora reforça a identidade coletiva dos retirantes através da repetição estrutural.'
    },
    {
      question: 'No discurso "Eu tenho um sonho" (Martin Luther King), a anáfora funciona como:',
      options: ['Recurso retórico', 'Ênfase persuasiva', 'Estrutura memorável', 'Todas as anteriores'],
      correct: 3,
      explanation: 'A anáfora é recurso retórico que enfatiza, persuade e torna o discurso memorável através da repetição.'
    }
  ],

  elipse: [
    {
      question: 'Na frase "Na mesa, frutas; na geladeira, bebidas", a elipse omite:',
      options: ['O sujeito', 'O verbo', 'O complemento', 'O adjunto'],
      correct: 1,
      explanation: 'A elipse omite o verbo ("há" ou "têm"), criando economia linguística e ritmo na enumeração.'
    },
    {
      question: 'Em "Uns dizem que sim; outros, que não", a elipse evita:',
      options: ['Repetição do verbo', 'Redundância desnecessária', 'Prolixidade textual', 'Todas as anteriores'],
      correct: 3,
      explanation: 'A elipse elimina a repetição de "dizem", evitando redundância e tornando o texto mais conciso.'
    }
  ],

  zeugma: [
    {
      question: 'Em "Ele gosta de futebol; eu, de basquete", temos zeugma que omite:',
      options: ['O sujeito da segunda oração', 'O verbo da segunda oração', 'O objeto da primeira oração', 'O adjunto adverbial'],
      correct: 1,
      explanation: 'O zeugma omite "gosto" na segunda oração, evitando repetição do verbo já expresso na primeira.'
    },
    {
      question: 'Na construção "Uns trabalham de dia; outros, de noite", o zeugma:',
      options: ['Elimina repetição verbal', 'Cria paralelismo', 'Economiza elementos linguísticos', 'Todas as anteriores'],
      correct: 3,
      explanation: 'O zeugma elimina a repetição de "trabalham", criando paralelismo e economia linguística.'
    }
  ]
};

// Tips and explanations for special houses
const specialHouseContent = {
  dica: [
    {
      title: "💡 Dica: Metáfora vs. Comparação",
      content: "A metáfora é uma comparação implícita (sem conectivos), enquanto a comparação usa palavras como 'como', 'tal qual', 'feito'. Exemplo: Metáfora: 'Seus olhos são estrelas.' Comparação: 'Seus olhos são como estrelas.'"
    },
    {
      title: "💡 Dica: Identificando Metonímia",
      content: "A metonímia substitui uma palavra por outra próxima no sentido. Principais tipos: causa pelo efeito, continente pelo conteúdo, autor pela obra, marca pelo produto. Exemplo: 'Beber uma coca' (marca pelo produto)."
    },
    {
      title: "💡 Dica: Personificação",
      content: "A personificação (prosopopeia) atribui características humanas a seres inanimados. Procure por verbos de ação humana aplicados a objetos, animais ou conceitos abstratos."
    },
    {
      title: "💡 Dica: Hipérbole",
      content: "A hipérbole é o exagero intencional para dar ênfase. Procure por expressões exageradas como 'morrer de', 'mil vezes', 'oceano de lágrimas'. É muito usada na linguagem coloquial."
    },
    {
      title: "💡 Dica: Ironia e Sarcasmo",
      content: "A ironia expressa o contrário do que se pensa. O sarcasmo é ironia com intenção crítica ou zombeteira. Observe o contexto para identificar quando alguém está sendo irônico."
    },
    {
      title: "💡 Dica: Sinestesia",
      content: "A sinestesia mistura diferentes sentidos numa mesma expressão. Exemplo: 'som colorido' (audição + visão), 'doce melodia' (paladar + audição). É muito comum na poesia simbolista."
    },
    {
      title: "💡 Dica: Antítese vs. Paradoxo",
      content: "A antítese opõe ideias contrárias ('amor e ódio'), enquanto o paradoxo apresenta ideias contraditórias que coexistem ('docemente amarga'). Ambos criam tensão poética."
    },
    {
      title: "💡 Dica: Eufemismo",
      content: "O eufemismo suaviza expressões desagradáveis ou chocantes. Exemplos: 'terceira idade' (velhice), 'partiu desta para melhor' (morreu). É comum em linguagem diplomática e social."
    },
    {
      title: "💡 Dica: Pleonasmo",
      content: "Há dois tipos: literário (intencional, para ênfase) e vicioso (desnecessário). Compare: 'chorar lágrimas' (literário) vs. 'subir para cima' (vicioso)."
    },
    {
      title: "💡 Dica: Anáfora",
      content: "A anáfora repete palavras ou estruturas no início de versos ou frases. Cria ritmo, ênfase e é muito usada em discursos e poesia para persuasão."
    }
  ],
  
  extra: [
    {
      question: "Qual figura de linguagem está presente em 'Morreu na flor da idade'?",
      options: ["Metáfora", "Eufemismo", "Ambas", "Hipérbole"],
      correct: 2,
      explanation: "Há metáfora ('flor da idade' compara juventude com flor) e eufemismo (suaviza a ideia de morte prematura)."
    },
    {
      question: "'Gelado calor' é exemplo de:",
      options: ["Antítese", "Oxímoro", "Paradoxo", "Sinestesia"],
      correct: 1,
      explanation: "Oxímoro combina termos contraditórios numa mesma expressão, criando efeito poético."
    },
    {
      question: "Em 'A praça é o coração da cidade', que figura predomina?",
      options: ["Comparação", "Metáfora", "Metonímia", "Personificação"],
      correct: 1,
      explanation: "Metáfora compara a praça (centro de convivência) com o coração (centro vital do corpo)."
    },
    {
      question: "No verso 'Beber das águas do conhecimento', temos:",
      options: ["Metáfora", "Metonímia", "Personificação", "Hipérbole"],
      correct: 0,
      explanation: "Metáfora que compara adquirir conhecimento com o ato de beber água."
    },
    {
      question: "'Chuva de críticas' exemplifica:",
      options: ["Hipérbole", "Metáfora", "Comparação", "Personificação"],
      correct: 1,
      explanation: "Metáfora que compara grande quantidade de críticas com chuva intensa."
    },
    {
      question: "Em 'O livro fala sobre História', há:",
      options: ["Metáfora", "Personificação", "Metonímia", "Sinestesia"],
      correct: 1,
      explanation: "Personificação atribui ao livro (objeto) a capacidade humana de falar."
    },
    {
      question: "'Luz que cega' apresenta:",
      options: ["Paradoxo", "Ironia", "Hipérbole", "Todas as anteriores"],
      correct: 2,
      explanation: "Hipérbole que exagera a intensidade da luz ao ponto de causar cegueira."
    },
    {
      question: "Na expressão 'mar de gente', predomina:",
      options: ["Comparação", "Metáfora", "Hipérbole", "Metonímia"],
      correct: 1,
      explanation: "Metáfora que compara multidão com a imensidão do mar."
    }
  ]
};

// Utility functions for question management
function getRandomQuestion() {
  const categories = Object.keys(questionsDatabase);
  const randomCategory = categories[Math.floor(Math.random() * categories.length)];
  const categoryQuestions = questionsDatabase[randomCategory];
  const randomQuestion = categoryQuestions[Math.floor(Math.random() * categoryQuestions.length)];
  
  return {
    ...randomQuestion,
    category: randomCategory
  };
}

function getRandomTip() {
  const tips = specialHouseContent.dica;
  return tips[Math.floor(Math.random() * tips.length)];
}

function getRandomExtraQuestion() {
  const extraQuestions = specialHouseContent.extra;
  return extraQuestions[Math.floor(Math.random() * extraQuestions.length)];
}

function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Export for use in main script
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    questionsDatabase,
    specialHouseContent,
    getRandomQuestion,
    getRandomTip,
    getRandomExtraQuestion,
    shuffleArray
  };
}
