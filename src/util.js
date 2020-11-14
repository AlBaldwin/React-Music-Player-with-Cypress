/* export const playAudio = async (audioRef, isPlaying) => {
  if (isPlaying) {
    const audioPromise = await audioRef.current.play();
    audioRef.current.play();
  }
}; */

export const playAudio = (isPlaying, audioRef) => {
  if (isPlaying) {
    const playPromise = audioRef.current.play();
    if (playPromise !== undefined) {
      playPromise.then((audio) => {
        audioRef.current.play();
      });
    }
  }
};
