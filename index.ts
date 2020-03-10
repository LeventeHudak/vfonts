// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');

const tokenizeTextByWords1 = (container: Element) => {
  const text = container.textContent;
  const textArray = text.split(' ');

  container.innerHTML = '';

  textArray.forEach((curr: string, index: number) => {
    const el = document.createElement('span');
    el.classList.add('word' + ++index);
    el.setAttribute('aria-hidden', 'true');
    el.innerText = curr + ' ';

    el.addEventListener('mouseenter', event => {
      event.stopPropagation();
      event.preventDefault();

      const selectedEl = event.currentTarget as Element;

      if (selectedEl.previousElementSibling) {
        selectedEl.previousElementSibling.classList.toggle('test1');
      }

      if (selectedEl.previousElementSibling && selectedEl.previousElementSibling.previousElementSibling) {
        selectedEl.previousElementSibling.previousElementSibling.classList.toggle('test2');
      }
    });

    el.addEventListener('mouseleave', event => {
      event.stopPropagation();
      event.preventDefault();

      const selectedEl = event.currentTarget as Element;

      if (selectedEl.previousElementSibling) {
        selectedEl.previousElementSibling.classList.toggle('test1');
      }

      if (selectedEl.previousElementSibling && selectedEl.previousElementSibling.previousElementSibling) {
        selectedEl.previousElementSibling.previousElementSibling.classList.toggle('test2');
      }
    });

    container.appendChild(el);
  });
};

const tokenizeTextByWords2 = (container: Element) => {
  const text = container.textContent;
  const textArray = text.split(' ');

  container.innerHTML = '';

  textArray.forEach((curr: string, index: number) => {
    const el = document.createElement('span');
    el.classList.add('word' + ++index);
    el.setAttribute('aria-hidden', 'true');
    el.innerText = curr + ' ';

    el.addEventListener('mouseenter', event => {
      event.stopPropagation();
      event.preventDefault();

      const selectedEl = event.currentTarget as Element;
      
      selectedEl.classList.toggle('test3');

      if (selectedEl.previousElementSibling) {
        selectedEl.previousElementSibling.classList.toggle('test1');
      }

      if (selectedEl.previousElementSibling && selectedEl.previousElementSibling.previousElementSibling) {
        selectedEl.previousElementSibling.previousElementSibling.classList.toggle('test2');
      }
    });

    el.addEventListener('mouseleave', event => {
      event.stopPropagation();
      event.preventDefault();

      const selectedEl = event.currentTarget as Element;

      selectedEl.classList.toggle('test3');

      if (selectedEl.previousElementSibling) {
        selectedEl.previousElementSibling.classList.toggle('test1');
      }

      if (selectedEl.previousElementSibling && selectedEl.previousElementSibling.previousElementSibling) {
        selectedEl.previousElementSibling.previousElementSibling.classList.toggle('test2');
      }
    });

    container.appendChild(el);
  });
};

const tokenizeTextByWords3 = (container: Element) => {
  const text = container.textContent;
  const textArray = text.split(' ');

  container.innerHTML = '';

  textArray.forEach((curr: string, index: number) => {
    const el = document.createElement('span');
    el.classList.add('word' + ++index);
    el.setAttribute('aria-hidden', 'true');
    el.innerText = curr + ' ';

    el.addEventListener('mouseenter', event => {
      event.stopPropagation();
      event.preventDefault();

      const selectedEl = event.currentTarget as Element;
      
      selectedEl.classList.toggle('test1');
      selectedEl.classList.toggle('test3');

      if (selectedEl.previousElementSibling) {
        selectedEl.previousElementSibling.classList.toggle('test2');
      }
    });

    el.addEventListener('mouseleave', event => {
      event.stopPropagation();
      event.preventDefault();

      const selectedEl = event.currentTarget as Element;

      selectedEl.classList.toggle('test1');
      selectedEl.classList.toggle('test3');

      if (selectedEl.previousElementSibling) {
        selectedEl.previousElementSibling.classList.toggle('test2');
      }
    });

    container.appendChild(el);
  });
};

//tokenizeTextByWords1(document.getElementById('word_split'));
//tokenizeTextByWords2(document.getElementById('word_split'));
tokenizeTextByWords3(document.getElementById('word_split'));