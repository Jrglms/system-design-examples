export abstract class Tea {
  brew(minutes: number) {
    console.log(`I'm brewing for ${minutes} minutes!`);
  }

  drink() {
    console.log(`I'm getting drank!`);
  }
}
