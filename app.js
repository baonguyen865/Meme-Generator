const submit = document.querySelector('form')
const link = document.querySelector('#link')
const topText = document.querySelector('#topText')
const bottomText = document.querySelector('#bottomText')
const meme = document.querySelector('.meme')
const container = document.querySelector('.memeContainer')


submit.addEventListener('submit', function(e){
  e.preventDefault()
  const meme = document.createElement('div');
  const textTop = document.createElement('div');
  const textBottom = document.createElement('div');
  const img = document.createElement('img');

  img.src = link.value;
  textTop.classList.add('textTop')
  textTop.innerHTML = topText.value
  textBottom.classList.add('textBottom')
  textBottom.innerHTML = bottomText.value

  meme.classList.add('meme')
  meme.append(textTop);
  meme.append(textBottom);
  meme.append(img);
  container.append(meme);
  submit.reset();
})

meme.addEventListener('click', function(e){
  e.target.remove()
})