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
      kick:'audio/tr808/tr-808-kick.mp3',
      snare:'audio/tr808/tr-808-snare.mp3',
      ohat:'audio/tr808/tr-808-hat-open.mp3',
      chat:'audio/tr808/tr-808-hat-closed.mp3'
    },
    tr909: {
      kick:'audio/tr909/tr-909-kick.mp3',
      snare:'audio/tr909/tr-909-clap.mp3',
      ohat:'audio/tr909/tr-909-hat-open.mp3',
      chat:'audio/tr909/tr-909-hat-closed.mp3'
    },
    trap1: {
      kick:'audio/trap1/trap-1-kick.mp3',
      snare:'audio/trap1/trap-1-snare.mp3',
      ohat:'audio/trap1/trap-1-ride.mp3',
      chat:'audio/trap1/trap-1-chant.mp3'
    },
    trap2: {
      kick:'audio/trap2/trap-2-kick.mp3',
      snare:'audio/trap2/trap-2-snare.mp3',
      ohat:'audio/trap2/trap-2-ohat.mp3',
      chat:'audio/trap2/trap-2-chat.mp3'
    },
    trap3: {
      kick: 'audio/trap3/trap-3-kick.mp3',
      snare: 'audio/trap3/trap-3-snare.mp3',
      ohat: 'audio/trap3/trap-3-808.mp3',
      chat: 'audio/trap3/trap-3-chat.mp3'
    },
    anotherKit: {
      kick:'audio/another-kit/LF_kick_08.mp3',
      snare:'audio/another-kit/LF_snare_01.mp3',
      ohat:'audio/another-kit/LF_hihat_open_03.mp3',
      chat:'audio/another-kit/LF_hihat_closed_05.mp3'
    },
    airhorns: {
      kick:'audio/airhorns/airhorn1.mp3',
      snare:'audio/airhorns/airhorn2.mp3',
      ohat:'audio/airhorns/airhorn3.mp3',
      chat:'audio/airhorns/airhorn4.mp3'
    },
    grapelady: {
      kick: 'audio/grapelady/grape1.mp3',
      snare: 'audio/grapelady/grape2.mp3',
      ohat: 'audio/grapelady/grape3.mp3',
      chat: 'audio/grapelady/grape4.mp3'
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
