// Game state management
class GameState {
  constructor() {
    this.currentPosition = 1;
    this.totalHouses = 50;
    this.isGameActive = false;
    this.canRollDice = true;
    this.skipNextTurn = false;
    this.gameStarted = false;
  }
  
  reset() {
    this.currentPosition = 1;
    this.isGameActive = true;
    this.canRollDice = true;
    this.skipNextTurn = false;
    this.gameStarted = true;
  }
  
  moveToPosition(position) {
    this.currentPosition = Math.max(1, Math.min(this.totalHouses, position));
  }
  
  hasWon() {
    return this.currentPosition >= this.totalHouses;
  }
}

// Game logic class
class FiguresOfSpeechGame {
  constructor() {
    this.gameState = new GameState();
    this.currentQuestion = null;
    this.diceValue = 0;
    this.specialHouses = this.generateSpecialHouses();
    
    this.init();
  }
  
  init() {
    this.setupEventListeners();
    this.setupTheme();
    this.createTrailHouses();
    this.updatePlayerPosition();
    this.updateProgress();
  }
  
  setupEventListeners() {
    // Theme toggle
    document.getElementById('theme-toggle-btn').addEventListener('click', () => {
      this.toggleTheme();
    });
    
    // Navigation buttons
    document.getElementById('start-game-btn').addEventListener('click', () => {
      this.startGame();
    });
    
    document.getElementById('rules-btn').addEventListener('click', () => {
      this.showModal('rules-modal');
    });
    
    document.getElementById('close-rules').addEventListener('click', () => {
      this.hideModal('rules-modal');
    });
    
    document.getElementById('home-btn').addEventListener('click', () => {
      this.goHome();
    });
    
    // Game controls
    document.getElementById('roll-dice-btn').addEventListener('click', () => {
      this.rollDice();
    });
    
    // Modal controls
    document.getElementById('continue-btn').addEventListener('click', () => {
      this.hideFeedbackModal();
    });
    
    document.getElementById('special-continue-btn').addEventListener('click', () => {
      this.hideModal('special-modal');
    });
    
    // Win modal buttons
    document.getElementById('play-again-btn').addEventListener('click', () => {
      this.hideModal('win-modal');
      this.startGame();
    });
    
    document.getElementById('home-from-win-btn').addEventListener('click', () => {
      this.hideModal('win-modal');
      this.goHome();
    });
    
    // Close modals when clicking outside
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('modal')) {
        if (e.target.id === 'rules-modal') {
          this.hideModal('rules-modal');
        }
      }
    });
    
    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.hideAllModals();
      }
      if (e.key === ' ' && this.gameState.canRollDice && this.gameState.isGameActive) {
        e.preventDefault();
        this.rollDice();
      }
    });
  }
  
  setupTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
  }
  
  toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  }
  
  generateSpecialHouses() {
    const special = {};
    const totalHouses = this.gameState.totalHouses;
    
    // Generate tip houses (dica) - 6 casas distribuídas
    const tipHouses = [8, 15, 22, 30, 37, 44];
    tipHouses.forEach(house => special[house] = 'dica');
    
    // Generate extra challenge houses - 4 casas
    const extraHouses = [12, 25, 33, 41];
    extraHouses.forEach(house => special[house] = 'extra');
    
    // Generate lose turn houses - 3 casas
    const loseHouses = [18, 28, 38];
    loseHouses.forEach(house => special[house] = 'perde');
    
    return special;
  }
  
  createTrailHouses() {
    const container = document.getElementById('trail-container');
    container.innerHTML = '';
    
    for (let i = 1; i <= this.gameState.totalHouses; i++) {
      const house = document.createElement('div');
      house.className = 'trail-house';
      house.id = `house-${i}`;
      
      const number = document.createElement('div');
      number.className = 'house-number';
      number.textContent = i;
      house.appendChild(number);
      
      // Add special house styling and icons
      if (this.specialHouses[i]) {
        const type = this.specialHouses[i];
        house.classList.add(`special-${type}`);
        
        const icon = document.createElement('div');
        icon.className = 'house-icon';
        
        switch (type) {
          case 'dica':
            icon.textContent = '💡';
            break;
          case 'extra':
            icon.textContent = '⭐';
            break;
          case 'perde':
            icon.textContent = '❌';
            break;
        }
        
        house.appendChild(icon);
      }
      
      container.appendChild(house);
    }
  }
  
  startGame() {
    this.gameState.reset();
    this.specialHouses = this.generateSpecialHouses(); // Regenerate for variety
    this.createTrailHouses();
    this.updatePlayerPosition();
    this.updateProgress();
    this.updateGameMessage('Clique em "Lançar Dado" para começar sua jornada!');
    
    this.showScreen('game-screen');
    audioManager.playSound('move');
  }
  
  goHome() {
    this.gameState.isGameActive = false;
    this.showScreen('home-screen');
    this.hideAllModals();
  }
  
  showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
      screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
  }
  
  rollDice() {
    if (!this.gameState.canRollDice || !this.gameState.isGameActive) return;
    
    // Check if player should skip turn
    if (this.gameState.skipNextTurn) {
      this.gameState.skipNextTurn = false;
      this.gameState.canRollDice = true;
      this.updateGameMessage('Você perdeu a vez! Sua próxima jogada está liberada.');
      return;
    }
    
    this.gameState.canRollDice = false;
    
    // Animate dice
    const dice = document.getElementById('dice');
    const diceNumber = document.getElementById('dice-number');
    
    dice.classList.add('rolling');
    audioManager.playSound('diceRoll');
    
    // Simulate rolling animation
    let rollCount = 0;
    const rollInterval = setInterval(() => {
      diceNumber.textContent = Math.floor(Math.random() * 6) + 1;
      rollCount++;
      
      if (rollCount >= 10) {
        clearInterval(rollInterval);
        this.diceValue = Math.floor(Math.random() * 6) + 1;
        diceNumber.textContent = this.diceValue;
        dice.classList.remove('rolling');
        
        setTimeout(() => {
          this.movePlayer();
        }, 500);
      }
    }, 80);
  }
  
  movePlayer() {
    const newPosition = Math.min(this.gameState.currentPosition + this.diceValue, this.gameState.totalHouses);
    
    this.animatePlayerMovement(newPosition, () => {
      this.gameState.moveToPosition(newPosition);
      this.updateProgress();
      
      if (this.gameState.hasWon()) {
        this.handleWin();
      } else {
        this.handleHouseLanding();
      }
    });
  }
  
  animatePlayerMovement(targetPosition, callback) {
    const steps = targetPosition - this.gameState.currentPosition;
    let currentStep = 0;
    
    const moveStep = () => {
      if (currentStep < steps) {
        currentStep++;
        const intermediatePosition = this.gameState.currentPosition + currentStep;
        this.updatePlayerPosition(intermediatePosition);
        audioManager.playSound('move');
        
        setTimeout(moveStep, 300);
      } else {
        callback();
      }
    };
    
    if (steps > 0) {
      moveStep();
    } else {
      callback();
    }
  }
  
  updatePlayerPosition(position = this.gameState.currentPosition) {
    const playerPiece = document.getElementById('player-piece');
    const targetHouse = document.getElementById(`house-${position}`);
    
    if (targetHouse) {
      const rect = targetHouse.getBoundingClientRect();
      const containerRect = document.getElementById('trail-container').getBoundingClientRect();
      
      const x = rect.left - containerRect.left + (rect.width / 2) - 15; // Center the piece
      const y = rect.top - containerRect.top + (rect.height / 2) - 15;
      
      playerPiece.style.left = `${x}px`;
      playerPiece.style.top = `${y}px`;
    }
    
    // Update current position indicator
    document.getElementById('current-position').textContent = position;
    
    // Highlight current house
    document.querySelectorAll('.trail-house').forEach(house => {
      house.classList.remove('current');
    });
    
    if (document.getElementById(`house-${position}`)) {
      document.getElementById(`house-${position}`).classList.add('current');
    }
  }
  
  updateProgress() {
    const progressFill = document.getElementById('progress-fill');
    const percentage = (this.gameState.currentPosition / this.gameState.totalHouses) * 100;
    progressFill.style.width = `${percentage}%`;
  }
  
  handleHouseLanding() {
    const currentHouse = this.gameState.currentPosition;
    
    if (this.specialHouses[currentHouse]) {
      this.handleSpecialHouse(this.specialHouses[currentHouse]);
    } else {
      this.askQuestion();
    }
  }
  
  handleSpecialHouse(type) {
    audioManager.playSound('special');
    
    const modal = document.getElementById('special-modal');
    const title = document.getElementById('special-title');
    const content = document.getElementById('special-content');
    
    switch (type) {
      case 'dica':
        const tip = getRandomTip();
        title.textContent = tip.title;
        content.innerHTML = `<p>${tip.content}</p>`;
        this.showModal('special-modal');
        
        // After showing tip, continue normally
        setTimeout(() => {
          this.gameState.canRollDice = true;
          this.updateGameMessage('Ótima dica! Clique em "Lançar Dado" para continuar.');
        }, 100);
        break;
        
      case 'extra':
        title.textContent = '⭐ Desafio Extra!';
        content.innerHTML = '<p>Responda esta pergunta bônus para ganhar uma casa extra!</p>';
        this.showModal('special-modal');
        
        setTimeout(() => {
          this.hideModal('special-modal');
          this.askExtraQuestion();
        }, 2000);
        break;
        
      case 'perde':
        title.textContent = '❌ Perde a Vez';
        content.innerHTML = '<p>Ops! Você caiu numa casa especial e vai perder a próxima jogada.</p>';
        this.showModal('special-modal');
        
        this.gameState.skipNextTurn = true;
        this.gameState.canRollDice = true;
        this.updateGameMessage('Você vai pular a próxima rodada!');
        break;
    }
  }
  
  askQuestion() {
    this.currentQuestion = getRandomQuestion();
    this.showQuestionModal();
  }
  
  askExtraQuestion() {
    this.currentQuestion = getRandomExtraQuestion();
    this.currentQuestion.isExtra = true;
    this.showQuestionModal();
  }
  
  showQuestionModal() {
    const modal = document.getElementById('question-modal');
    const title = document.getElementById('question-title');
    const questionText = document.getElementById('question-text');
    const optionsContainer = document.getElementById('question-options');
    
    title.textContent = this.currentQuestion.isExtra ? '⭐ Pergunta Bônus' : '❓ Pergunta';
    questionText.textContent = this.currentQuestion.question;
    
    // Clear previous options
    optionsContainer.innerHTML = '';
    
    // Create shuffled options for better gameplay
    const options = [...this.currentQuestion.options];
    const correctAnswer = options[this.currentQuestion.correct];
    const shuffledOptions = shuffleArray(options);
    const newCorrectIndex = shuffledOptions.indexOf(correctAnswer);
    
    shuffledOptions.forEach((option, index) => {
      const button = document.createElement('button');
      button.className = 'option-btn';
      button.textContent = `${String.fromCharCode(97 + index)}) ${option}`;
      button.addEventListener('click', () => {
        this.handleAnswer(index === newCorrectIndex);
      });
      optionsContainer.appendChild(button);
    });
    
    this.showModal('question-modal');
  }
  
  handleAnswer(isCorrect) {
    // Disable all option buttons
    document.querySelectorAll('.option-btn').forEach(btn => {
      btn.disabled = true;
      
      // Highlight correct and incorrect answers
      if (btn.textContent.includes(this.currentQuestion.options[this.currentQuestion.correct])) {
        btn.classList.add('correct');
      } else if (btn === event.target && !isCorrect) {
        btn.classList.add('incorrect');
      }
    });
    
    // Wait a moment to show the visual feedback
    setTimeout(() => {
      this.hideModal('question-modal');
      this.showFeedback(isCorrect);
    }, 1500);
  }
  
  showFeedback(isCorrect) {
    const modal = document.getElementById('feedback-modal');
    const content = document.getElementById('feedback-content');
    
    content.className = `feedback-content ${isCorrect ? 'correct' : 'incorrect'}`;
    
    if (isCorrect) {
      audioManager.playSound('correct');
      
      if (this.currentQuestion.isExtra) {
        // Extra question bonus
        const newPosition = Math.min(this.gameState.currentPosition + 1, this.gameState.totalHouses);
        this.gameState.moveToPosition(newPosition);
        this.updatePlayerPosition();
        this.updateProgress();
        
        content.innerHTML = `
          <h3>🎉 Correto!</h3>
          <p>Resposta certa! Você ganhou uma casa extra!</p>
          <p><strong>Explicação:</strong> ${this.currentQuestion.explanation}</p>
        `;
        
        if (this.gameState.hasWon()) {
          setTimeout(() => {
            this.hideModal('feedback-modal');
            this.handleWin();
          }, 3000);
          return;
        }
      } else {
        content.innerHTML = `
          <h3>🎉 Correto!</h3>
          <p>Muito bem! Você permanece na casa ${this.gameState.currentPosition}.</p>
          <p><strong>Explicação:</strong> ${this.currentQuestion.explanation}</p>
        `;
      }
    } else {
      audioManager.playSound('incorrect');
      
      if (!this.currentQuestion.isExtra) {
        // Move back one house for wrong answer (except for extra questions)
        const newPosition = Math.max(this.gameState.currentPosition - 1, 1);
        this.gameState.moveToPosition(newPosition);
        this.updatePlayerPosition();
        this.updateProgress();
        
        content.innerHTML = `
          <h3>❌ Incorreto</h3>
          <p>Resposta errada. Você volta para a casa ${this.gameState.currentPosition}.</p>
          <p><strong>Resposta correta:</strong> ${this.currentQuestion.options[this.currentQuestion.correct]}</p>
          <p><strong>Explicação:</strong> ${this.currentQuestion.explanation}</p>
        `;
      } else {
        content.innerHTML = `
          <h3>❌ Incorreto</h3>
          <p>Não foi dessa vez! Continue na casa ${this.gameState.currentPosition}.</p>
          <p><strong>Resposta correta:</strong> ${this.currentQuestion.options[this.currentQuestion.correct]}</p>
          <p><strong>Explicação:</strong> ${this.currentQuestion.explanation}</p>
        `;
      }
    }
    
    this.showModal('feedback-modal');
  }
  
  hideFeedbackModal() {
    this.hideModal('feedback-modal');
    this.gameState.canRollDice = true;
    this.updateGameMessage('Clique em "Lançar Dado" para continuar!');
  }
  
  handleWin() {
    audioManager.playSound('win');
    this.gameState.isGameActive = false;
    
    setTimeout(() => {
      this.showModal('win-modal');
    }, 1000);
  }
  
  showModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.add('active');
    
    // Focus trap for accessibility
    const focusableElements = modal.querySelectorAll('button, input, select, textarea, [tabindex]:not([tabindex="-1"])');
    if (focusableElements.length > 0) {
      focusableElements[0].focus();
    }
  }
  
  hideModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.remove('active');
  }
  
  hideAllModals() {
    document.querySelectorAll('.modal').forEach(modal => {
      modal.classList.remove('active');
    });
  }
  
  updateGameMessage(message) {
    document.getElementById('game-message').textContent = message;
  }
}

// Initialize game when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Initialize audio on first user interaction
  const initAudio = () => {
    if (audioManager.audioContext && audioManager.audioContext.state === 'suspended') {
      audioManager.audioContext.resume();
    }
    document.removeEventListener('click', initAudio);
    document.removeEventListener('keydown', initAudio);
  };
  
  document.addEventListener('click', initAudio);
  document.addEventListener('keydown', initAudio);
  
  // Start the game
  const game = new FiguresOfSpeechGame();
  
  // Make game accessible globally for debugging
  window.game = game;
  
  // Add service worker for offline functionality (if needed)
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').catch(err => {
      console.log('Service worker registration failed:', err);
    });
  }
});

// Handle page visibility change to pause/resume audio context
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    if (audioManager.audioContext && audioManager.audioContext.state === 'running') {
      audioManager.audioContext.suspend();
    }
  } else {
    if (audioManager.audioContext && audioManager.audioContext.state === 'suspended') {
      audioManager.audioContext.resume();
    }
  }
});

// Handle window resize for responsive layout
window.addEventListener('resize', () => {
  if (window.game && window.game.gameState.isGameActive) {
    window.game.updatePlayerPosition();
  }
});
