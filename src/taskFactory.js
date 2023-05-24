let number = 0;

export default function taskFactory (title) {
  number++;
  return {
    'title': title,
    'number': number,
  }
}