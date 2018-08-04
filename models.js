const Step = (function() {
  return class Step {
    constructor(number) {
      this.number = number
      this.notes = []
    }
  }
})()

const Note = (function() {
  return class Note {
    constructor(instrument, step) {
      this.instrument = instrument
      // this.step = step
      step.notes.push(this)
    }
  }
})()

const DrumKit = (function() {
  const drumKits = {
    tr808: {
      kick:'https://s3.amazonaws.com/beat-machine-audio/tr-808-kick.wav',
      snare:'https://s3.amazonaws.com/beat-machine-audio/tr-808-snare.wav',
      ohat:'https://s3.amazonaws.com/beat-machine-audio/tr-808-hat-open.wav',
      chat:'https://s3.amazonaws.com/beat-machine-audio/tr-808-hat-closed.wav'
    },
    tr909: {
      kick:'https://s3.amazonaws.com/beat-machine-audio/tr-909-kick.wav',
      snare:'https://s3.amazonaws.com/beat-machine-audio/tr-909-clap.wav',
      ohat:'https://s3.amazonaws.com/beat-machine-audio/tr-909-hat-open.wav',
      chat:'https://s3.amazonaws.com/beat-machine-audio/tr-909-hat-closed.wav'
    },
    trap1: {
      kick:'https://s3.amazonaws.com/beat-machine-audio/trap-1-kick.wav',
      snare:'https://s3.amazonaws.com/beat-machine-audio/trap-1-snare.wav',
      ohat:'https://s3.amazonaws.com/beat-machine-audio/trap-1-ride.wav',
      chat:'https://s3.amazonaws.com/beat-machine-audio/trap-1-chant.wav'
    },
    trap2: {
      kick:'https://s3.amazonaws.com/beat-machine-audio/trap-2-kick.wav',
      snare:'https://s3.amazonaws.com/beat-machine-audio/trap-2-snare.wav',
      ohat:'https://s3.amazonaws.com/beat-machine-audio/trap-2-ohat.wav',
      chat:'https://s3.amazonaws.com/beat-machine-audio/trap-2-chat.wav'
    },
    trap3: {
      kick: 'https://s3.amazonaws.com/beat-machine-audio/trap-3-kick.wav',
      snare: 'https://s3.amazonaws.com/beat-machine-audio/trap-3-snare.wav',
      ohat: 'https://s3.amazonaws.com/beat-machine-audio/trap-3-808.wav',
      chat: 'https://s3.amazonaws.com/beat-machine-audio/trap-3-chat.wav'
    },
    anotherKit: {
      kick:'https://s3.amazonaws.com/beat-machine-audio/LF_kick_08.wav',
      snare:'https://s3.amazonaws.com/beat-machine-audio/LF_snare_01.wav',
      ohat:'https://s3.amazonaws.com/beat-machine-audio/LF_hihat_open_03.wav',
      chat:'https://s3.amazonaws.com/beat-machine-audio/LF_hihat_closed_05.wav'
    },
    airhorns: {
      kick:'https://s3.amazonaws.com/beat-machine-audio/airhorn1.wav',
      snare:'https://s3.amazonaws.com/beat-machine-audio/airhorn2.wav',
      ohat:'https://s3.amazonaws.com/beat-machine-audio/airhorn3.wav',
      chat:'https://s3.amazonaws.com/beat-machine-audio/airhorn4.wav'
    },
    grapelady: {
      kick: 'https://s3.amazonaws.com/beat-machine-audio/grape1.mp3',
      snare: 'https://s3.amazonaws.com/beat-machine-audio/grape2.mp3',
      ohat: 'https://s3.amazonaws.com/beat-machine-audio/grape3.mp3',
      chat: 'https://s3.amazonaws.com/beat-machine-audio/grape4.mp3'
    }

  }
  return class DrumKit {
    constructor(name) {
      this.name = name
      this.kick = this.instantiateAudioElements(drumKits[name].kick)
      this.snare = this.instantiateAudioElements(drumKits[name].snare)
      this.ohat = this.instantiateAudioElements(drumKits[name].ohat)
      this.chat = this.instantiateAudioElements(drumKits[name].chat)
    }
    instantiateAudioElements (audioFilePath){
      let sampleObjects = []
      let count = 1
      while (count <= 16) {
        sampleObjects.push(new Audio(audioFilePath))
        count++
      }
      return sampleObjects
    }
    static all(){
      return drumKits
    }
  }
})()
