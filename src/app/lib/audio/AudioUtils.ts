import charSelect from "../../../assets/audio/char-select.mp3";
import fScrAudio from "../../../assets/audio/1-screen-music.mp3";
import vsMusic from "../../../assets/audio/vs-screen.mp3";
import vsCode from "../../../assets/audio/vs-code.mp3";

export class AudioPlayer {
  constructor() {
    console.log("construct");
  }
  firstScreenAudio: HTMLAudioElement;

  private fScrListener = (event: Event) => {
    this.firstScreenAudio.play().catch((e) => {
      console.log(e);
    });
  };

  public playFirstScreenAudio() {
    this.firstScreenAudio = new Audio(fScrAudio);

    this.firstScreenAudio.addEventListener("canplaythrough", this.fScrListener);
    this.firstScreenAudio.addEventListener("ended", this.fScrListener, false);
  }

  public stopFirstScreenAudio() {
    if (this.firstScreenAudio !== null) {
      this.firstScreenAudio.pause();
      this.firstScreenAudio.removeEventListener(
        "canplaythrough",
        this.fScrListener
      );
      this.firstScreenAudio.removeEventListener(
        "ended",
        this.fScrListener,
        false
      );
      this.firstScreenAudio = null;
    }
  }

  public playChangeChar() {
    const aud = new Audio(charSelect);
    aud.addEventListener("canplaythrough", (event) => {
      aud.play().catch((e) => {
        console.log(e);
      });
    });
  }

  public playVsMusic() {
    const aud = new Audio(vsMusic);
    aud.addEventListener("canplaythrough", (event) => {
      aud.play().catch((e) => {
        console.log(e);
      });
    });
  }

  public playVsCode() {
    const aud = new Audio(vsCode);
    aud.addEventListener("canplaythrough", (event) => {
      aud.play().catch((e) => {
        console.log(e);
      });
    });
  }
}
