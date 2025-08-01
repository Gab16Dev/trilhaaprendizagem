// Questions database for Portuguese figures of speech
const questionsDatabase = {
  metafora: [
    {
      question: '"Ela estava com um coração de pedra." Esta frase é um exemplo de qual figura de linguagem?',
      options: ['Metáfora', 'Ironia', 'Hipérbole', 'Eufemismo'],
      correct: 0,
      explanation: 'Metáfora é uma comparação implícita. "Coração de pedra" compara o coração insensível com a dureza da pedra.'
    },
    {
      question: '"Seus olhos são duas estrelas brilhantes." Qual figura de linguagem está presente?',
      options: ['Hipérbole', 'Metáfora', 'Personificação', 'Antítese'],
      correct: 1,
      explanation: 'Metáfora compara os olhos com estrelas, criando uma imagem poética sem usar conectivos como "como" ou "tal qual".'
    },
    {
      question: '"O tempo é dinheiro." Esta expressão representa qual figura?',
      options: ['Comparação', 'Metáfora', 'Metonímia', 'Sinestesia'],
      correct: 1,
      explanation: 'É uma metáfora que equipara tempo e dinheiro, sugerindo que ambos são recursos valiosos.'
    }
  ],
  
  metonimia: [
    {
      question: '"Ele bebeu a garrafa toda." Qual figura de linguagem está presente?',
      options: ['Hipérbole', 'Metáfora', 'Metonímia', 'Ironia'],
      correct: 2,
      explanation: 'Metonímia substitui "conteúdo da garrafa" por "garrafa". É a substituição de uma palavra por outra com relação de proximidade.'
    },
    {
      question: '"Lemos Machado de Assis na escola." O que representa esta construção?',
      options: ['Metáfora', 'Metonímia', 'Personificação', 'Antonomásia'],
      correct: 1,
      explanation: 'Metonímia: o nome do autor (Machado de Assis) substitui sua obra (livros). É autor pela obra.'
    },
    {
      question: '"A cidade inteira veio ao evento." Qual figura está presente?',
      options: ['Hipérbole', 'Metonímia', 'Personificação', 'Todas as anteriores'],
      correct: 3,
      explanation: 'Há hipérbole (exagero), metonímia (cidade pelos habitantes) e personificação (cidade como pessoa que pode vir).'
    }
  ],
  
  hiperbole: [
    {
      question: '"Chorei rios de lágrimas." Esta expressão representa:',
      options: ['Metáfora', 'Hipérbole', 'Personificação', 'Comparação'],
      correct: 1,
      explanation: 'Hipérbole é o exagero intencional. "Rios de lágrimas" exagera a quantidade de choro para enfatizar a emoção.'
    },
    {
      question: '"Morri de rir da piada." Qual figura de linguagem está presente?',
      options: ['Ironia', 'Hipérbole', 'Eufemismo', 'Antítese'],
      correct: 1,
      explanation: 'Hipérbole exagera o efeito da piada. "Morrer de rir" é um exagero para expressar que achou muito engraçado.'
    },
    {
      question: '"Já falei mil vezes para você!" O que caracteriza esta frase?',
      options: ['Hipérbole', 'Metonímia', 'Pleonasmo', 'Anacoluto'],
      correct: 0,
      explanation: 'Hipérbole através do exagero numérico "mil vezes" para enfatizar a repetição da mensagem.'
    }
  ],
  
  ironia: [
    {
      question: 'Ao ver alguém tropeçar, dizer "Que elegante!" é exemplo de:',
      options: ['Eufemismo', 'Hipérbole', 'Ironia', 'Metáfora'],
      correct: 2,
      explanation: 'Ironia expressa o contrário do que se pensa. Chamar alguém que tropeçou de "elegante" é irônico.'
    },
    {
      question: '"Que belo dia!" disse ao ver a chuva torrencial. Isto é:',
      options: ['Ironia', 'Antítese', 'Paradoxo', 'Eufemismo'],
      correct: 0,
      explanation: 'Ironia: dizer que o dia está belo quando está chovendo muito expressa o contrário do que se pensa.'
    },
    {
      question: '"Nossa, que pontualidade!" para quem chegou 2 horas atrasado:',
      options: ['Sarcasmo', 'Ironia', 'Ambas as anteriores', 'Eufemismo'],
      correct: 2,
      explanation: 'É ironia (expressa o contrário) com tom sarcástico (crítica mordaz). Sarcasmo é uma forma de ironia.'
    }
  ],
  
  personificacao: [
    {
      question: '"O vento sussurrava segredos." Qual figura está presente?',
      options: ['Metáfora', 'Personificação', 'Hipérbole', 'Sinestesia'],
      correct: 1,
      explanation: 'Personificação atribui características humanas (sussurrar) a seres inanimados (vento).'
    },
    {
      question: '"As flores dançavam na brisa." Esta construção representa:',
      options: ['Personificação', 'Comparação', 'Metáfora', 'Metonímia'],
      correct: 0,
      explanation: 'Personificação: as flores ganham a capacidade humana de dançar, criando uma imagem poética.'
    },
    {
      question: '"A lua sorriu para os namorados." Que figura de linguagem é esta?',
      options: ['Hipérbole', 'Ironia', 'Personificação', 'Antítese'],
      correct: 2,
      explanation: 'Personificação dá à lua a capacidade humana de sorrir, criando um ambiente romântico.'
    }
  ],
  
  antitese: [
    {
      question: '"Era o melhor dos tempos, era o pior dos tempos." Esta frase apresenta:',
      options: ['Paradoxo', 'Antítese', 'Ironia', 'Pleonasmo'],
      correct: 1,
      explanation: 'Antítese opõe ideias contrárias: "melhor" e "pior" dos tempos criam um contraste intencional.'
    },
    {
      question: '"Amor e ódio" numa mesma frase caracteriza:',
      options: ['Antítese', 'Paradoxo', 'Oxímoro', 'Todas as anteriores'],
      correct: 0,
      explanation: 'Antítese contrapõe palavras de sentidos opostos (amor/ódio) para criar efeito expressivo.'
    },
    {
      question: '"Subir descendo" é exemplo de:',
      options: ['Paradoxo', 'Antítese', 'Oxímoro', 'Todas as anteriores'],
      correct: 2,
      explanation: 'Oxímoro combina termos contraditórios numa mesma expressão, criando aparente contradição.'
    }
  ],
  
  comparacao: [
    {
      question: '"Ela é linda como uma flor." Qual figura está presente?',
      options: ['Metáfora', 'Comparação', 'Personificação', 'Hipérbole'],
      correct: 1,
      explanation: 'Comparação usa conectivos (como, tal qual, assim como) para estabelecer semelhança entre elementos.'
    },
    {
      question: '"Rápido feito um raio" representa:',
      options: ['Comparação', 'Metáfora', 'Hipérbole', 'Metonímia'],
      correct: 0,
      explanation: 'Comparação usa "feito" (conectivo) para comparar velocidade com a rapidez do raio.'
    },
    {
      question: 'A diferença entre comparação e metáfora é:',
      options: ['Não há diferença', 'Comparação usa conectivos', 'Metáfora é mais poética', 'Comparação é mais simples'],
      correct: 1,
      explanation: 'Comparação usa conectivos explícitos (como, feito, tal qual), enquanto metáfora é comparação implícita.'
    }
  ],
  
  sinestesia: [
    {
      question: '"Voz doce" mistura quais sentidos?',
      options: ['Visão e tato', 'Audição e paladar', 'Olfato e visão', 'Tato e audição'],
      correct: 1,
      explanation: 'Sinestesia mistura audição (voz) com paladar (doce), criando uma sensação sinestésica.'
    },
    {
      question: '"Cor áspera" representa:',
      options: ['Sinestesia', 'Metáfora', 'Personificação', 'Antítese'],
      correct: 0,
      explanation: 'Sinestesia mistura visão (cor) com tato (áspera), combinando diferentes sensações.'
    },
    {
      question: '"Som quente" é exemplo de qual figura?',
      options: ['Metáfora', 'Sinestesia', 'Personificação', 'Hipérbole'],
      correct: 1,
      explanation: 'Sinestesia combina audição (som) com sensação térmica (quente).'
    }
  ],
  
  eufemismo: [
    {
      question: '"Ele partiu desta para melhor" significa que:',
      options: ['Viajou', 'Morreu', 'Melhorou', 'Mudou-se'],
      correct: 1,
      explanation: 'Eufemismo suaviza a ideia da morte com uma expressão mais delicada.'
    },
    {
      question: '"Pessoa de idade" em vez de "velho" é:',
      options: ['Eufemismo', 'Hipérbole', 'Ironia', 'Antítese'],
      correct: 0,
      explanation: 'Eufemismo substitui termo considerado desagradável por expressão mais suave.'
    },
    {
      question: '"Faltou com a verdade" substitui qual palavra?',
      options: ['Errou', 'Mentiu', 'Esqueceu', 'Confundiu'],
      correct: 1,
      explanation: 'Eufemismo ameniza "mentiu" com expressão mais polida "faltou com a verdade".'
    }
  ],
  
  pleonasmo: [
    {
      question: '"Subir para cima" é exemplo de:',
      options: ['Pleonasmo', 'Redundância', 'Ambas as anteriores', 'Solecismo'],
      correct: 2,
      explanation: 'Pleonasmo é redundância: "subir" já indica movimento para cima, tornando "para cima" desnecessário.'
    },
    {
      question: '"Vi com meus próprios olhos" caracteriza:',
      options: ['Pleonasmo vicioso', 'Pleonasmo literário', 'Erro gramatical', 'Hipérbole'],
      correct: 1,
      explanation: 'Pleonasmo literário usado para dar ênfase à ação de ver pessoalmente.'
    },
    {
      question: 'Qual pleonasmo é considerado literário?',
      options: ['"Entrar para dentro"', '"Chorar lágrimas"', '"Sair para fora"', '"Descer para baixo"'],
      correct: 1,
      explanation: '"Chorar lágrimas" é pleonasmo literário aceito poeticamente, enquanto os outros são viciosos.'
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
