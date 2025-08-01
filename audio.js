// Audio management for the game
class AudioManager {
  constructor() {
    this.audioContext = null;
    this.sounds = {};
    this.enabled = true;
    this.volume = 0.5;
    
    this.initializeAudio();
  }
  
  async initializeAudio() {
    try {
      // Initialize Web Audio API
      this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
      
      // Create sound effects using oscillators
      this.createSoundEffects();
    } catch (error) {
      console.warn('Audio initialization failed:', error);
      this.enabled = false;
    }
  }
  
  createSoundEffects() {
    // Dice roll sound
    this.sounds.diceRoll = () => this.createDiceRollSound();
    
    // Correct answer sound
    this.sounds.correct = () => this.createCorrectSound();
    
    // Incorrect answer sound
    this.sounds.incorrect = () => this.createIncorrectSound();
    
    // Move piece sound
    this.sounds.move = () => this.createMoveSound();
    
    // Special house sound
    this.sounds.special = () => this.createSpecialSound();
    
    // Win sound
    this.sounds.win = () => this.createWinSound();
  }
  
  createDiceRollSound() {
    if (!this.enabled || !this.audioContext) return;
    
    const oscillator = this.audioContext.createOscillator();
    const gainNode = this.audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(this.audioContext.destination);
    
    oscillator.type = 'square';
    oscillator.frequency.setValueAtTime(200, this.audioContext.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(100, this.audioContext.currentTime + 0.3);
    
    gainNode.gain.setValueAtTime(this.volume * 0.3, this.audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.3);
    
    oscillator.start();
    oscillator.stop(this.audioContext.currentTime + 0.3);
  }
  
  createCorrectSound() {
    if (!this.enabled || !this.audioContext) return;
    
    const oscillator = this.audioContext.createOscillator();
    const gainNode = this.audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(this.audioContext.destination);
    
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(523.25, this.audioContext.currentTime); // C5
    oscillator.frequency.setValueAtTime(659.25, this.audioContext.currentTime + 0.1); // E5
    oscillator.frequency.setValueAtTime(783.99, this.audioContext.currentTime + 0.2); // G5
    
    gainNode.gain.setValueAtTime(this.volume * 0.4, this.audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.4);
    
    oscillator.start();
    oscillator.stop(this.audioContext.currentTime + 0.4);
  }
  
  createIncorrectSound() {
    if (!this.enabled || !this.audioContext) return;
    
    const oscillator = this.audioContext.createOscillator();
    const gainNode = this.audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(this.audioContext.destination);
    
    oscillator.type = 'sawtooth';
    oscillator.frequency.setValueAtTime(200, this.audioContext.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(100, this.audioContext.currentTime + 0.5);
    
    gainNode.gain.setValueAtTime(this.volume * 0.3, this.audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.5);
    
    oscillator.start();
    oscillator.stop(this.audioContext.currentTime + 0.5);
  }
  
  createMoveSound() {
    if (!this.enabled || !this.audioContext) return;
    
    const oscillator = this.audioContext.createOscillator();
    const gainNode = this.audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(this.audioContext.destination);
    
    oscillator.type = 'triangle';
    oscillator.frequency.setValueAtTime(400, this.audioContext.currentTime);
    oscillator.frequency.linearRampToValueAtTime(600, this.audioContext.currentTime + 0.1);
    
    gainNode.gain.setValueAtTime(this.volume * 0.2, this.audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.15);
    
    oscillator.start();
    oscillator.stop(this.audioContext.currentTime + 0.15);
  }
  
  createSpecialSound() {
    if (!this.enabled || !this.audioContext) return;
    
    const oscillator = this.audioContext.createOscillator();
    const gainNode = this.audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(this.audioContext.destination);
    
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(800, this.audioContext.currentTime);
    oscillator.frequency.setValueAtTime(1000, this.audioContext.currentTime + 0.1);
    oscillator.frequency.setValueAtTime(1200, this.audioContext.currentTime + 0.2);
    
    gainNode.gain.setValueAtTime(this.volume * 0.3, this.audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.3);
    
    oscillator.start();
    oscillator.stop(this.audioContext.currentTime + 0.3);
  }
  
  createWinSound() {
    if (!this.enabled || !this.audioContext) return;
    
    // Create a celebratory fanfare
    const frequencies = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
    
    frequencies.forEach((freq, index) => {
      const oscillator = this.audioContext.createOscillator();
      const gainNode = this.audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(this.audioContext.destination);
      
      oscillator.type = 'sine';
      oscillator.frequency.setValueAtTime(freq, this.audioContext.currentTime + index * 0.2);
      
      gainNode.gain.setValueAtTime(this.volume * 0.4, this.audioContext.currentTime + index * 0.2);
      gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + index * 0.2 + 0.3);
      
      oscillator.start(this.audioContext.currentTime + index * 0.2);
      oscillator.stop(this.audioContext.currentTime + index * 0.2 + 0.3);
    });
  }
  
  playSound(soundName) {
    if (this.enabled && this.sounds[soundName]) {
      try {
        // Resume audio context if it's suspended
        if (this.audioContext && this.audioContext.state === 'suspended') {
          this.audioContext.resume();
        }
        
        this.sounds[soundName]();
      } catch (error) {
        console.warn(`Failed to play sound ${soundName}:`, error);
      }
    }
  }
  
  setVolume(volume) {
    this.volume = Math.max(0, Math.min(1, volume));
  }
  
  toggle() {
    this.enabled = !this.enabled;
    return this.enabled;
  }
  
  isEnabled() {
    return this.enabled;
  }
}

// Create global audio manager instance
const audioManager = new AudioManager();

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { AudioManager, audioManager };
}
